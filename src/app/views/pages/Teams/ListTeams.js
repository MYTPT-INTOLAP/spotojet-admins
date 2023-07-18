import React,{useEffect} from 'react'
import { Stack } from '@mui/material';
import { Box, styled, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import {
  DeleteTeam
} from "../../../../store/actions/teamAction";
import { useNavigate } from 'react-router-dom';



const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));


export default function ListTeams() {

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log(store.Teams.data);

  useEffect(() => {
    localStorage.removeItem('teamId');
    localStorage.removeItem('team');
  }, [])

  const handleEdit = (x) => {

    console.log("Edit", x);
    const team = data[x.rowIndex];
    // console.log(team);
    const teamId = team._id;
    // console.log(playerId);
    localStorage.setItem("teamId", teamId);
    localStorage.setItem("team", JSON.stringify(team));
    navigate("/pages/addTeam");
  };

  const handleDelete = (x) => {
    const adminId = "64a7f852277cdd655b84098b";
    const team = data[x.rowIndex];
    const teamId = team._id;
    // console.log(teamId);

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

        dispatch(DeleteTeam({ teamid: teamId, adminId: adminId }))
        Swal.fire(
          'Deleted!',
          'Your Team has been deleted.',
          'success'
        )
      }
    })
  }

  useEffect(() => {
    console.log(store)
    if (store.Teams.successMessage) {
      window.location.reload()
    }
  }, [store])

  const data = store.Teams.data;

  const columns = [
    {
      name: "team",
      label: "Team",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "squad",
      label: "Squad",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "gender",
      label: "Gender",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "players",
      label: "Players",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "coaches",
      label: "Coaches",
      options: {
        filter: true,
        sort: true,
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
              <Button onClick={() => handleEdit(dataIndex)}>
                <EditIcon />
              </Button>
              <Button onClick={() => handleDelete(dataIndex)}>
                <DeleteIcon sx={{ color: 'red' }} />
              </Button>
            </Box>
          );
        }
      }

    },
  ];

  // const data = [
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  //   { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
  // ];





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
        <Button onClick={()=>{navigate("/pages/addTeam")}}>
          <AddIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{color: 'gray'}} >Add New Team</p>
        </Button>
        <Button>
          <CloudUploadIcon sx={{ color: 'gray', mr: 1}} />
          <p style={{color: 'gray'}}>Bulk upload</p>
        </Button>
      </>
    ),
  };



  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'List Teams' }]} />
      </Box>

      <Stack spacing={3} sx={{mb: 5}}>
        <MUIDataTable
          title={"Teams List"}
          data={data}
          columns={columns}
          options={options}
        />
      </Stack>


    </Container>
  )
}
