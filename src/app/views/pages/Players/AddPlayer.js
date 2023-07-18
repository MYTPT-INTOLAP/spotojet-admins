import React from "react";
import { Stack } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
// import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  Box,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SaveIcon from "@mui/icons-material/Save";

import { useDispatch, useSelector } from "react-redux";
import { AddPlayerData, UpdatePlayer } from "../../../../store/actions/playerAction";
import { update } from "lodash";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

export default function AddPlayer() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log(store.Players.data)

 

  useEffect(() => {
    localStorage.removeItem('playerId');
    localStorage.removeItem('player');
  }, [])


  let playerData;
  if (localStorage.getItem("playerId")) {
    console.log("hi")
    playerData = localStorage.getItem("player")
    playerData = JSON.parse(playerData)
    console.log(playerData)
  }

  let player = {
    name: playerData && playerData.name ? playerData.name : "",
    club: playerData && playerData.club ? playerData.club : "",
    position: playerData && playerData.position ? playerData.position : "",
    DOB: playerData && playerData.DOB ? playerData.DOB : "",
    team: playerData && playerData.team ? playerData.team : "",
    location: playerData && playerData.location ? playerData.location : "",
    gender: playerData && playerData.gender ? playerData.gender : "",
  };

  const [pState, setPstate] = useState(player)
  // console.log(79, pState)

  const [state, setState] = useState({ date: new Date() });

 
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;
      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submitted");
    // console.log(event);
    console.log(state);
    const adminId = "64a7f852277cdd655b84098b";
    const playerId = localStorage.getItem("playerId");
    console.log(playerId);
    if (!playerId) {
      dispatch(AddPlayerData(state));
    } else {
      console.log("state: ", state)
      const data = {
        ...state,
        date: undefined,
      }
      dispatch(UpdatePlayer({ ...data, playerId, adminId }));
      // navigate("/pages/listPlayers")
    }
  };

  useEffect(() => {
    if (localStorage.getItem("playerId") && store.Players.successMessage) {
      Swal.fire({
        title: store.Players.successMessage ,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      },2000).then(() => {
        localStorage.removeItem("playerId"); //{remove item}
        localStorage.removeItem("player"); //{remove item}
        navigate("/pages/listPlayers")
      }) 
    }

    if (!localStorage.getItem("playerId") && store.Players.successMessage) {
      Swal.fire({
        title: store.Players.successMessage,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      },2000).then(()=>{
      navigate("/pages/listPlayers")
      })
    }
  }, [store]);

  const handleChange = (event) => {
    // event.persist();
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  let {
    name,
    club,
    position,
    DOB = "1.01.2022",
    team,
    location,
    gender,
  } = state;

  // const [age, setAge] = React.useState('');

  // const handleChanges = (event) => {
  //   setAge(event.target.value);
  // };
  let pageTitle = localStorage.getItem("playerId") ? "Edit Player" : "Add Player"
  let btnName = localStorage.getItem("playerId") ? "Save Edit" : "Save"

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Pages", path: "/pages" },
            { name: pageTitle },
          ]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title={pageTitle}>
          <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <FormControl sx={{ minWidth: "90%", marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="name"
                      id="standard-basic"
                      // sx={{ minWidth: 550, marginBottom: 2 }}
                      value={name || pState.name}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="Name"
                      validators={["required"]}
                    />
                  </FormControl>

                  <FormControl sx={{ minWidth: "90%", marginBottom: 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Position
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={position || pState.position}
                      name="position"
                      label="Position"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Forward">Forward</MenuItem>
                      <MenuItem value="Defence">Defence</MenuItem>
                      <MenuItem value="Goalkeep">Goalkeep</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ minWidth: "90%", marginBottom: 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Team
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={team || pState.team}
                      name="team"
                      label="Team"
                      onChange={handleChange}
                    >
                      <MenuItem value="team">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="U-16">U-16</MenuItem>
                      <MenuItem value="U-19">U-19</MenuItem>
                      <MenuItem value="Club">Club</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ minWidth: "90%", marginBottom: 2 }}>
                    <RadioGroup
                      row
                      name="gender"
                      sx={{ mb: 2 }}
                      value={gender || pState.gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Male"
                        label="Male"
                        labelPlacement="end"
                        control={<Radio color="secondary" />}
                      />
                      <FormControlLabel
                        value="Female"
                        label="Female"
                        labelPlacement="end"
                        control={<Radio color="secondary" />}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <FormControl sx={{ minWidth: "90%", marginBottom: 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Club
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={club || pState.club}
                      name="club"
                      label="club"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="FC">FC</MenuItem>
                      <MenuItem value="RM">RM</MenuItem>
                      <MenuItem value="GOA">GOA</MenuItem>
                    </Select>
                  </FormControl>

                  {/* <FormControl sx={{ minWidth: "90%", marginBottom: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="DOB"
                        name="DOB"
                        value= {DOB}
                        onChange={handleChange}
                      />
                    </LocalizationProvider>
                  </FormControl> */}

                  <FormControl sx={{ minWidth: "90%", marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="location"
                      label="Location"
                      // sx={{ minWidth: 550, marginBottom: 2 }}
                      onChange={handleChange}
                      value={location || pState.location}
                      // validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <SaveIcon />
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>{btnName}</Span>
              </Button>
            </ValidatorForm>
          </div>
        </SimpleCard>
      </Stack>
    </Container>
  );
}
