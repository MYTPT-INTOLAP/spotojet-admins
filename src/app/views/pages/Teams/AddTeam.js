import React from 'react'
import { Stack } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
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
  Box
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SaveIcon from '@mui/icons-material/Save';
import makeAnimated from 'react-select/animated';

import { useDispatch, useSelector } from "react-redux";
import {
  AddTeamData
} from "../../../../store/actions/teamAction";

import Selects from 'react-select';
import axios from 'axios';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));


const animatedComponents = makeAnimated();



export default function AddTeam() {

  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;
      return true;
    });
    
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
    const adminId = "64a2b592ce098e9113c9e1e4" 
    console.log(state)
    dispatch(AddTeamData({...state, adminId: adminId}))
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    team,
    squad,
    gender,
    // coach: null,
    location,
  } = state;


  const [age, setAge] = React.useState('');

  const handleChanges = (event) => {
    setAge(event.target.value);
  };


  let colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ]


  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'Add Teams' }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Add Team">
          <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>

                  <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="team"
                      id="standard-basic"
                      value={team || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="Team"
                      validators={["required"]}
                    />
                  </FormControl>


                  <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="squad"
                      id="standard-basic"
                      value={squad || ""}
                      onChange={handleChange}
                      errorMessages={["this field is required"]}
                      label="Squad"
                      validators={["required"]}
                    />
                  </FormControl>


                  <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                    <RadioGroup
                      row
                      name="gender"
                      sx={{ mb: 2 }}
                      value={gender || ""}
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

                  <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                    <Selects
                      defaultValue={[colourOptions[2], colourOptions[3]]}
                      isMulti
                      components={animatedComponents}
                      name="colors"
                      // value={coach||""}
                      placeholder="Select Coaches..."
                      options={colourOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      // onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                    <TextField
                      type="text"
                      name="location"
                      label="Location"
                      onChange={handleChange}
                      value={location || ""}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </FormControl>


                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <SaveIcon />
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Save</Span>
              </Button>
            </ValidatorForm>
          </div>
        </SimpleCard>
      </Stack>
    </Container>
  )
}
