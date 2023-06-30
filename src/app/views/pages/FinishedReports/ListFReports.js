import React from 'react'
import { Stack } from '@mui/material';
import { Box, styled, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));


export default function ListFReports() {

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
      name: "positions",
      label: "Positions",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "date",
      label: "Match Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "club",
      label: "Club",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "team",
      label: "Team",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "type",
      label: "Type",
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
            <Box sx={{display: 'flex', flexDirection: 'row' }}>
              <Button >
                <RemoveRedEyeIcon />
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
    { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
    { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
    { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
    { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
    { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
    { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
    { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
    { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
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
    rowsPerPage: 10
  };


  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'Finished Reports' }]} />
      </Box>

      <Stack spacing={3}>
        <MUIDataTable
          title={'Finished Reports'}
          data={data}
          columns={columns}
          options={options}
        />
      </Stack>
    </Container>
  )
}
