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
    TextField
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SaveIcon from '@mui/icons-material/Save';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

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

export default function AddVideos() {

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
                <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'Add Videos' }]} />
            </Box>

            <Stack spacing={3}>
                <SimpleCard title="Add Videos">
                    <div>
                        <ValidatorForm onError={() => null}>
                            <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12} >

                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <TextField
                                            type="file"
                                            name="venue"
                                            id="standard-basic"
                                            value={""}
                                            // onChange={handleChange}
                                            errorMessages={["this field is required"]}
                                            label="Venue"
                                            validators={["required"]}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <TextField
                                            type="text"
                                            name="Report"
                                            id="standard-basic"
                                            // value={""}
                                            // onChange={handleChange}
                                            errorMessages={["this field is required"]}
                                            label="Report"
                                            validators={["required"]}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>

                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <Selects
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            components={animatedComponents}
                                            name="colors"
                                            placeholder="Players"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </FormControl>

                                    {/* <FormControl sx={{ minWidth: 550, marginBottom: 2 }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker />
                                        </LocalizationProvider>
                                    </FormControl> */}

                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <TextField
                                            type="text"
                                            name="Comment"
                                            id="standard-basic"
                                            // value={""}
                                            // onChange={handleChange}
                                            errorMessages={["this field is required"]}
                                            label="Comment"
                                            validators={["required"]}
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
