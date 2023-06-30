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


export default function ListPlayer() {

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
      name: "position",
      label: "Position",
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
      name: "dob",
      label: "DOB",
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
      name: "club",
      label: "Club",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "location",
      label: "Location",
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
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
    { name: "Joe James", position: 'Goalkeeper', gender: 'M', team: "U18", dob: '29-06-2023', club: 'Stars FC', location: "kolkata" },
  ];



  
  
  const acolumns = [
    {
      name: "team",
      label: "Team",
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
      name: "noTeam",
      label: "No Of Teams",
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
      name: "players",
      label: "Players",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "location",
      label: "Location",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];





  const datas = [
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
    { team: "U10", gender: 'M', noTeam: '8',  coaches: "Koushik Mandal", players: '25', location: 'kolkata' },
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



  const aoptions = {
    // filterType: 'checkbox',
    filter: false,
    selectableRows: 'multiple',
    filterType: 'dropdown',
    responsive: 'horizontal',
    rowsPerPage: 10,
  };

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'List Player' }]} />
      </Box>

      <Stack spacing={3} sx={{mb: 15}}>
        {/* <SimpleCard title="Player List"> */}
        <MUIDataTable
          title={"Player List"}
          data={data}
          columns={columns}
          options={options}
        />
        {/* </SimpleCard> */}
      </Stack>

      <Stack spacing={3} >
        <MUIDataTable
          title={"Stars FC Teams"}
          data={datas}
          columns={acolumns}
          options={aoptions}
        />
      </Stack>
    </Container>
  )
}
