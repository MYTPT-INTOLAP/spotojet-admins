import React from 'react'
import { Stack } from '@mui/material';
import { Box, styled, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));


export default function ListTeams() {


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
              <Button >
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
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
    { team: "U10", squad: 'Main', gender: 'M', players: '25', coaches: "Koushik Mandal" },
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
        <Button >
          <AddIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{color: 'gray'}}>Add New Team</p>
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
