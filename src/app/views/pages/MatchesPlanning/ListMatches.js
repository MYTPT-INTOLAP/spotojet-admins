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

  const columns = [
    {
      name: "date",
      label: "Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "time",
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
      name: "team1",
      label: "Team 1",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "player1",
      label: "Team 1 Player",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "team2",
      label: "Team 2",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "player2",
      label: "Team 2 Player",
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
              <Button onClick={() => navigate('/pages/addPlayer')} >
                <EditIcon />
              </Button>
              <Button >
                <DeleteIcon sx={{ color: 'red' }} />
              </Button>
            </Box>
          );
        }
      }

    },
  ];

  const data = [
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
    { date: "26-06-2023", time: '12:00PM', venue: 'dsfhsgf', team1: "U18", player1: 'dhfbd', team2: "U10", player2: 'dhfbdfghfh'},
  
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
        <Button onClick={() => navigate('/pages/addPlayer')}>
          <AddIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{ color: 'gray' }}>Add New Player</p>
        </Button>
        <Button>
          <CloudUploadIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{ color: 'gray' }}>Bulk upload</p>
        </Button>
      </>
    ),
  };
  // 



  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'Match Planning' }]} />
      </Box>

      <Stack spacing={3} sx={{mb: 15}}>
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
