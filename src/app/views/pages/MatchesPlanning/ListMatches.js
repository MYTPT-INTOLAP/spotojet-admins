import React from 'react'
import { Stack } from '@mui/material';
import { Box, styled, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteMatchData,
} from "../../../../store/actions/matchAction";

import Swal from 'sweetalert2'


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));


export default function ListMatches() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  // console.log(62, store.Players.data)
  // console.log(36, store.Matchs.matchData)
  const matchData = store?.Matchs?.matchData || [];
  const TeamList = store?.Teams?.data || [];
  // console.log(40,TeamList)

  // const data = [
  //   { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
  //   { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
  //   { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
  //   { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
  //   { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
  // ];

  let data = []
  matchData.map((sdata) => {
    // console.log(50,sdata);
    let homeTeamDetails = TeamList.filter((t) => t._id === sdata.homeTeam);
    let awayTeamDetails = TeamList.filter((t) => t._id === sdata.awayTeam);
    
    // console.log(56,homeTeamDetails[0])
    let y = {
      id: sdata._id,
      mDate: sdata.mDate,
      mTime: sdata.mTime,
      venue: sdata.venue,
      homeTeam: homeTeamDetails[0].team,
      player1: "**",
      awayTeam: awayTeamDetails[0].team,
      player2: "**",
      ageGroup: sdata.ageGroup,
      format: sdata.format,
      mfa: sdata.mfa,
      mfh: sdata.mfh,
      mha: sdata.mha,
      mhh: sdata.mha,
      level: sdata.level,
      viewing : sdata.viewing,
      weather: sdata.weather,
      location: sdata.location,
      htformations: sdata.htformations,
      atformations: sdata.atformations,
      event: sdata.event,
    }
    data.push(y)
  })


  const handleEdit = (x) => {
    console.log("Edit", x);
    const match = data[x.rowIndex];
    console.log(match);
    const matchId = match.id;
    console.log(matchId);
    localStorage.setItem("matchId", matchId);
    localStorage.setItem("match", JSON.stringify(match));
    navigate("/pages/addMatches");
  };


  const handleDelete = (x) => {

    const adminId = "64a7f852277cdd655b84098b";
    const match = data[x.rowIndex];
    console.log(match);
    const matchId = match.id;
    console.log(matchId);

    Swal.fire({
      title: 'You are going To delete the Team.Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        dispatch(DeleteMatchData({ matchId: matchId, adminId: adminId }))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };




  useEffect(() => {
    console.log(store.Matchs.successMessage)
    if (store.Matchs.successMessage) {
      window.location.reload()
    }
  }, [store])



  const columns = [
    {
      name: "mDate",
      label: "Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "mTime",
      label: "Time",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "venue",
      label: "Venue",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "homeTeam",
      label: "Home Team",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "player1",
      label: "HT Players",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "awayTeam",
      label: "Away Team",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "player2",
      label: "AT Players",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "Action",
      label: "Action",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, dataIndex, rowIndex) => {
          return (
            <Box sx={{ flexDirection: 'row' }}>
              <Button onClick={() => handleEdit(dataIndex)} >
                <EditIcon />
              </Button>
              <Button >
                <DeleteIcon sx={{ color: 'red' }} onClick={() => handleDelete(dataIndex)} />
              </Button>
            </Box>
          );
        }
      }

    },
  ];




  const options = {
    // filterType: 'checkbox',
    filter: true,
    onFilterChange: (changedColumn, filterList) => {
      console.log(changedColumn, filterList);
    },
    selectableRows: 'multiple',
    filterType: 'dropdown',
    responsive: 'horizontal',
    rowsPerPage: 10,
    customToolbar: () => (
      <>
        <Button onClick={() => navigate('/pages/addMatches')}>
          <AddIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{ color: 'gray' }}>Create New Match</p>
        </Button>
        <Button>
          <CloudUploadIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{ color: 'gray' }}>Bulk upload</p>
        </Button>
      </>
    ),
  };




  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'Match Planning' }]} />
      </Box>

      <Stack spacing={3} sx={{ mb: 15 }}>
        <MUIDataTable
          title={"Match Planning"}
          data={data}
          columns={columns}
          options={options}
        />
      </Stack>
    </Container>
  )
}
