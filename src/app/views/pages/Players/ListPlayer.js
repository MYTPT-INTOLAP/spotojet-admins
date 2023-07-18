import React from "react";
import { Stack } from "@mui/material";
import { Box, styled, Button } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import MUIDataTable from "mui-datatables";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPlayers,
  DeletePayer,
} from "../../../../store/actions/playerAction";

import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

export default function ListPlayer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // let data = [
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  //   {
  //     name: "Joe James",
  //     position: "Goalkeeper",
  //     gender: "M",
  //     team: "U18",
  //     dob: "29-06-2023",
  //     club: "Stars FC",
  //     location: "kolkata",
  //   },
  // ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       dispatch(GetAllPlayers());
  //     } catch (error) {
  //       // Handle the error
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log(store);

  const data = store?.Players?.data ;
  console.log(store.Players);

  const handleEdit = (x) => {

    console.log("Edit", x);
    const player = data[x.rowIndex];
    console.log(player);
    const playerId = player._id;
    console.log(playerId);
    localStorage.setItem("playerId", playerId);
    localStorage.setItem("player", JSON.stringify(player));
    navigate("/pages/addPlayer");
  };


  const handleDelete = (x) => {

    const adminId = "64a7f852277cdd655b84098b";
    const player = data[x.rowIndex];
    const playerId = player._id;
    console.log(playerId);

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

        dispatch(DeletePayer({ playerId: playerId, adminId: adminId }))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };

  useEffect(() => {
    console.log(store.Players.successMessage)
    if (store.Players.successMessage) {
      window.location.reload()
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
            <Box sx={{ flexDirection: "row" }}>
              <Button onClick={() => handleEdit(dataIndex)}>
                <EditIcon />
              </Button>
              <Button onClick={() => handleDelete(dataIndex)}>
                <DeleteIcon sx={{ color: "red" }} />
              </Button>
            </Box>
          );
        },
      },
    },
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
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
    {
      team: "U10",
      gender: "M",
      noTeam: "8",
      coaches: "Koushik Mandal",
      players: "25",
      location: "kolkata",
    },
  ];


  const options = {
    // filterType: 'checkbox',
    filter: true,
    onFilterChange: (changedColumn, filterList) => {
      console.log(changedColumn, filterList);
    },
    selectableRows: "multiple",
    filterType: "dropdown",
    responsive: "horizontal",
    rowsPerPage: 10,
    customToolbar: () => (
      <>
        <Button onClick={() => navigate("/pages/addPlayer")}>
          <AddIcon sx={{ color: "gray", mr: 1 }} />
          <p style={{ color: "gray" }}>Add New Player</p>
        </Button>
        <Button>
          <CloudUploadIcon sx={{ color: "gray", mr: 1 }} />
          <p style={{ color: "gray" }}>Bulk upload</p>
        </Button>
      </>
    ),
  };


  const aoptions = {
    // filterType: 'checkbox',
    filter: false,
    selectableRows: "multiple",
    filterType: "dropdown",
    responsive: "horizontal",
    rowsPerPage: 10,
  };

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Pages", path: "/pages" },
            { name: "List Player" },
          ]}
        />
      </Box>

      <Stack spacing={3} sx={{ mb: 15 }}>
        {/* <SimpleCard title="Player List"> */}
        <MUIDataTable
          title={"Player List"}
          data={data ||[]}
          columns={columns}
          options={options}
        />
        {/* </SimpleCard> */}
      </Stack>

      <Stack spacing={3}>
        <MUIDataTable
          title={"Stars FC Teams"}
          data={datas}
          columns={acolumns}
          options={aoptions}
        />
      </Stack>
    </Container>
  );
}
