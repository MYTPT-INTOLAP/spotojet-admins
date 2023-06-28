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




export default function AddTeam() {

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
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    email,
  } = state;


  const [age, setAge] = React.useState('');

  const handleChanges = (event) => {
    setAge(event.target.value);
  };


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
                  <TextField
                    type="text"
                    name="username"
                    id="standard-basic"
                    value={username || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Name"
                    validators={["required"]}
                  />

                  <FormControl sx={{ minWidth: 550, marginBottom: 2}}>
                    <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Category"
                      onChange={handleChanges}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                 
                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <SaveIcon/>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Save</Span>
              </Button>
            </ValidatorForm>
          </div>
        </SimpleCard>
      </Stack>
    </Container>
  )
}
