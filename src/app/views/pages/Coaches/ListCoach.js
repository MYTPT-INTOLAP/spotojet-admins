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


export default function ListCoach() {

    const navigate = useNavigate();


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
        name: "gender",
        label: "Gender",
        options: {
          filter: true,
          sort: false,
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
        name: "phone",
        label: "Phone",
        options: {
          filter: true,
          sort: true,
        },
      },    {
        name: "email",
        label: "Email",
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
              <Button onClick={()=> navigate("/pages/addCoach")} >
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
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
    { name: "Joe James", gender: 'M', phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "Test Corp"},
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
          <Button onClick={()=> navigate("/pages/addCoach")}>
            <AddIcon sx={{ color: 'gray', mr: 1 }} />
            <p style={{color: 'gray'}}>Add New Coach</p>
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
        <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'List Coach' }]} />
      </Box>

      <Stack spacing={3}>
        <MUIDataTable
          title={"Coaches List"}
          data={data}
          columns={columns}
          options={options}
        />
      </Stack>
    </Container>
  )
}
