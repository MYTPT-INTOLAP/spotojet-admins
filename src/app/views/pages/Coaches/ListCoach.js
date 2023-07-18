import React,{useEffect} from 'react'
import { Stack } from '@mui/material';
import { Box, styled, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from "react-router-dom";

import { DeleteAdmin } from "../../../../store/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));


export default function ListCoach() {

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { loading, error, successMessage, data } = useSelector((state) => state.Admins);
  const navigate = useNavigate();
  // console.log(data);

  const handleEdit = (x)=>{
    console.log("Edit", x);
    const team= data[x.rowIndex];
    console.log(team);
    const teamId = team._id;
    console.log(teamId);
    localStorage.setItem("coachId", teamId);
    localStorage.setItem("coach", JSON.stringify(team));
    navigate("/pages/addCoach");
  };

  const handleDelete = (x) => {

    const adminId = "64a6bee28bb58f1d5f02cf05";
    const coach = data[x.rowIndex];
    const coachId = coach._id;

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

        dispatch(DeleteAdmin({  adminId: coachId }))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };

  useEffect(() => {
    console.log(store.Admins.successMessage)
    if (store.Admins.successMessage) {
      /*window alert*/
      // window.alert(store.Players.successMessage)
      window.location.reload()
      // navigate("/pages/listPlayers")
    }
  }, [store])




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
    }, {
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
  // { name: "Joe James",phone: '+916296783642', email: 'wd.intolap@gmail.com', team: "U15,U16" },  
  // ];

  let name, phone, email;
  let modData = [];
  if (data) {
    data.map((sData) => {
      name = `${sData.fname} ${sData.lname}`
      // email= sData.email && sData.email || "",
      // phone = sData.email && sData.phone || "",
      // console.log(128, name)
      // console.log(132, sData.email)
      let x = { name: name, phone: sData.phone, email: sData.email }
      modData.push(x)
    })
  }
  console.log(134, modData)

  const datas = modData || null;

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
        <Button onClick={() => navigate("/pages/addCoach")}>
          <AddIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{ color: 'gray' }}>Add New Coach</p>
        </Button>
        <Button >
          <CloudUploadIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{ color: 'gray' }}>Bulk upload</p>
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
          data={datas}
          columns={columns}
          options={options}
        />
      </Stack>
    </Container>
  )
}
