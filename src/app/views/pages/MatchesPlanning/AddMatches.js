import React from 'react'
import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import { parse } from 'date-fns';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import { DatePicker, TimePicker, MobileTimePicker, DesktopTimePicker, StaticTimePicker } from '@mui/lab';
// import dayjsAdapter from '@mui/lab/AdapterDayjs';
// import { LocalizationProvider } from '@mui/lab';
// import AdapterDayjs from '@mui/lab/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';


// import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {
  AddMatchData,
  UpdateMatchData
} from "../../../../store/actions/matchAction";

import Swal from 'sweetalert2'

import makeAnimated from 'react-select/animated';

import Selects from 'react-select';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const animatedComponents = makeAnimated();


export default function AddMatches() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const TeamList = store?.Teams?.data;
  console.log(TeamList);

  useEffect(() => {
    localStorage.removeItem('matchId');
    localStorage.removeItem('match');
  }, [])

  let MatchList, homeTeamDetails, awayTeamDetails;
  if (localStorage.getItem("matchId")) {
    MatchList = localStorage.getItem("match");
    MatchList = JSON.parse(MatchList);
    // console.log(77, MatchList.homeTeam, MatchList.awayTeam);
    homeTeamDetails = TeamList.filter((t) => t.team === MatchList.homeTeam);
    awayTeamDetails = TeamList.filter((t) => t.team === MatchList.awayTeam);
    console.log(homeTeamDetails[0]);
    console.log(awayTeamDetails[0]);
    MatchList = { ...MatchList, homeTeam: homeTeamDetails[0]._id, awayTeam: awayTeamDetails[0]._id }
  }




  const [pState, setpState] = useState(MatchList);
  // console.log(pState);
  if(pState){
  let xD = pState.mDate
  xD= xD.split("/")
  let yD =`${xD[2]}-${xD[1]}-${xD[0]}`
  console.log(95, yD)
  pState.mDate = yD;
}

  const [state, setState] = useState({ date: new Date() });
  let {
    cAdminId, mDate, mTime, location, event, homeTeam, awayTeam, weather, format, htFormations, atFormations, mhh, mha, mfh, mfa, venue, ageGroup, level, viewing
  } = state;

  // const [age, setAge] = React.useState('');

  // const handleChanges = (event) => {
  //   setAge(event.target.value);
  // };

  const handleChange = (event) => {
    console.log("handleChange");
    console.log(event);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    const adminId = "64a7f852277cdd655b84098b";//(this is cAdmin)
    console.log("submit")
    console.log(state);
    const matchId = localStorage.getItem("matchId");
    if (!matchId) {
      dispatch(AddMatchData({ ...state, adminId: adminId, cAdminId: adminId }));
    } else {
      console.log("update")
      console.log("state: ", state)
      const data = {
        ...state,
        date: undefined,
      }
      // dispatch(UpdateMatchData({ ...data, matchId: matchId, adminId: adminId }));
    }
  }

  useEffect(() => {
    // console.log(store.Matchs.successMessage)
    if (localStorage.getItem("matchId") && store.Matchs.successMessage) {
      Swal.fire({
        title: store.Matchs.successMessage,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }, 2000).then(() => {
        localStorage.removeItem("matchId"); //{remove item}
        localStorage.removeItem("match"); //{remove item}
        navigate("/pages/listMatches")
      })
    }

    if (!localStorage.getItem("matchId") && store.Matchs.successMessage) {
      Swal.fire({
        title: store.Matchs.successMessage,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }, 2000).then(() => {
        navigate("/pages/listMatches")
      })
    }
  }, [store]);

  {/* for date change */ }
  const handleDateChange = (event) => {
    const formattedDate = dayjs(event).format('DD/MM/YYYY');
    console.log(formattedDate);
    setState({ ...state, mDate: formattedDate });
    console.log(state);
  };

  {/* for time change */ }
  const handleTimeChange = (event) => {
    const formattedTime = dayjs(event).format('HH:mm');
    console.log(formattedTime);
    setState({ ...state, mTime: formattedTime });
  };



  let pageTitle = localStorage.getItem("matchId") ? "Edit Match Data" : "Add Match"
  let btnName = localStorage.getItem("matchId") ? "Save Edit" : "Save"



  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: pageTitle }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title={pageTitle}>
          <div>
            <ValidatorForm onError={() => null} onSubmit={handleSubmit}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} >

                  {/* Date */}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        onChange={handleDateChange}
                         value={pState?.mDate ? dayjs(pState.mDate) : null}
                         format="DD/MM/YY"
                      />
                    </LocalizationProvider>
                  </FormControl>

                  {/* Time*/}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                      <DemoContainer
                        components={[
                          'TimePicker',
                          'MobileTimePicker',
                          'DesktopTimePicker',
                          'StaticTimePicker',
                        ]}
                        onChange={handleTimeChange}
                      >
                        <DemoItem >
                          <DesktopTimePicker
                            label="Select Time"
                            onChange={handleTimeChange}
                            // renderInput={(params) => <TextField {...params} />}
                           // defaultValue={dayjs('2022-04-17T15:30')}
                          value={pState?.mDate ? dayjs(pState.mTime, 'HH:mm') : null }
                          renderInput={(params) => <TextField {...params} />}
                          format="HH:mm"
                          />
                        </DemoItem>
                      </DemoContainer>

                    </LocalizationProvider>
                  </FormControl>

                  {/* venue*/}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="venue"
                      id="standard-basic"
                      sx={{ minWidth: 550, marginBottom: 2 }}
                      value={venue || pState?.venue || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="Venue"
                      validators={["required"]}
                    />
                  </FormControl>

                  {/* ageGroup*/}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="ageGroup"
                      id="standard-basic"
                      sx={{ minWidth: 550, marginBottom: 2 }}
                      value={ageGroup || pState?.ageGroup || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="ageGroup"
                      validators={["required"]}
                    />
                  </FormControl>

                  {/* weather*/}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="weather"
                      id="standard-basic"
                      sx={{ minWidth: 550, marginBottom: 2 }}
                      value={weather || pState?.weather || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="weather"
                      validators={["required"]}
                    />
                  </FormControl>

                  {/* Home Team */}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">Home Team</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      name='homeTeam'
                      value={homeTeam || pState?.homeTeam || ""}
                      label="Home Team"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {TeamList.map((sTeam) => {
                        return (
                          <MenuItem value={sTeam._id}>{sTeam.team}</MenuItem>
                        )
                      })}
                    </Select>
                  </FormControl>

                  {/* Home Team Formations */}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="htFormations"
                      id="standard-basic"
                      sx={{ minWidth: 550, marginBottom: 2 }}
                      value={htFormations || pState?.htFormations || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="Home Team Formation"
                      validators={["required"]}
                    />
                  </FormControl>

                  {/* Away Team */}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <InputLabel id="demo-simple-select-helper-label">Away Team</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      name='awayTeam'
                      value={awayTeam || pState?.awayTeam || ""}
                      label="Away Team"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {TeamList.map((sTeam) => {
                        return (
                          <MenuItem value={sTeam?._id || "NA"}>{sTeam?.team || "NA"}</MenuItem>
                        )
                      })}
                    </Select>
                  </FormControl>

                  {/* AwayTeam Formation */}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="atFormations"
                      id="standard-basic"
                      sx={{ minWidth: 550, marginBottom: 2 }}
                      value={atFormations || pState?.atFormations || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="Away Team Formation"
                      validators={["required"]}
                    />
                  </FormControl>

                  {/* Location */}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="location"
                      id="standard-basic"
                      // sx={{ minWidth: 550, marginBottom: 2 }}
                      value={location || pState?.location || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="location"
                      validators={["required"]}
                    />
                  </FormControl>

                  {/* event */}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="event"
                      id="standard-basic"
                      // sx={{ minWidth: 550, marginBottom: 2 }}
                      value={event || pState?.event || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="event"
                      validators={["required"]}
                    />
                  </FormControl>

                  {/* Score */}
                  <Grid container spacing={2} sx={{ marginLeft: "2%", marginTop: "2%", marginBottom: "2%" }}>

                    <InputLabel id="demo-simple-select-helper-label" sx={{ marginLeft: 15 }}>Half Time Score</InputLabel>

                    <Grid container spacing={2}>

                      <Grid item xs={4}>

                        <FormControl sx={{ minWidth: 50, marginBottom: 2 }}>
                          <TextField
                            type="number"
                            name="mhh"
                            id="standard-basic"
                            // sx={{ minWidth: 550, marginBottom: 2 }}
                            value={mhh || pState?.mhh || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Home Team Score"
                            validators={["required"]}
                          />
                        </FormControl>

                      </Grid>

                      <Grid item xs={4}>

                        <FormControl sx={{ minWidth: 50, marginBottom: 2 }}>
                          <TextField
                            type="number"
                            name="mha"
                            id="standard-basic"
                            // sx={{ minWidth: 550, marginBottom: 2 }}
                            value={mha || pState?.mha || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Away Team Score"
                            validators={["required"]}
                          />
                        </FormControl>

                      </Grid>

                    </Grid>

                    <InputLabel id="demo-simple-select-helper-label" sx={{ marginLeft: 15 }}>Full Time Score </InputLabel>

                    <Grid container spacing={2}>

                      <Grid item xs={4}>

                        <FormControl sx={{ minWidth: 50, marginBottom: 2 }}>
                          <TextField
                            type="number"
                            name="mfh"
                            id="standard-basic"
                            // sx={{ minWidth: 550, marginBottom: 2 }}
                            value={mfh || pState?.mfh || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Home Team Score"
                            validators={["required"]}
                          />
                        </FormControl>

                      </Grid>

                      <Grid item xs={4}>

                        <FormControl sx={{ minWidth: 50, marginBottom: 2 }}>
                          <TextField
                            type="number"
                            name="mfa"
                            id="standard-basic"
                            // sx={{ minWidth: 550, marginBottom: 2 }}
                            value={mfa || pState?.mfa || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Away Team Score"
                            validators={["required"]}
                          />
                        </FormControl>

                      </Grid>

                    </Grid>


                  </Grid>

                  {/* level */}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="level"
                      id="standard-basic"
                      // sx={{ minWidth: 550, marginBottom: 2 }}
                      value={level || pState?.level || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="level"
                      validators={["required"]}
                    />
                  </FormControl>

                  {/* viewing */}
                  <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="viewing"
                      id="standard-basic"
                      // sx={{ minWidth: 550, marginBottom: 2 }}
                      value={viewing || pState?.viewing || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="viewing"
                      validators={["required"]}
                    />
                  </FormControl>

                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                {/* <SaveIcon /> */}
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>{btnName}</Span>
              </Button>
            </ValidatorForm>
          </div>
        </SimpleCard>
      </Stack>
    </Container>
  )
}
