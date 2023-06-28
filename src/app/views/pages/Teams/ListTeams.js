import React from 'react'
import { Stack } from '@mui/material';
import { Box, styled, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


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
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "category",
      label: "Category",
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
                <DeleteIcon sx={{color: 'red'}} />
              </Button>
            </Box>
          );
        }
      }

    },
  ];

  const data = [
    { name: "Joe James", category: "Test Corp", date: "06-28-2023" },
    { name: "John Walsh", category: "Test Corp", date: "06-28-2023"},
    { name: "Bob Herm", category: "Test Corp", date: "06-28-2023"},
    { name: "James Houston", category: "Test Corp", date: "06-28-2023"},
    { name: "Joe James", category: "Test Corp", date: "06-28-2023"},
    { name: "John Walsh", category: "Test Corp", date: "06-28-2023"},
    { name: "Bob Herm", category: "Test Corp", date: "06-28-2023" },
    { name: "James Houston", category: "Test Corp", date: "06-28-2023"},
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
    // print: printBtn,
    // viewColumns: viewColumnBtn,
    // filter: filterBtn,
  };


  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'List Teams' }]} />
      </Box>

      <Stack spacing={3}>
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
