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
import { AddAdmin } from "../../../../store/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { UpdateAdmin } from 'store/actions/adminAction';


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




export default function AddCoach() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    console.log(store);

    useEffect(() => {
        localStorage.removeItem('coachId');
        localStorage.removeItem('coach');
      }, [])

    let coachData;
    if (localStorage.getItem("coachId")) {
        let coachDatas = localStorage.getItem("coach")
        coachData = JSON.parse(coachDatas)
        coachData.name = `${coachData.fname} ${coachData.lname}`
        console.log(coachData)
    }

    let coach = {
        name: coachData && coachData.name ? coachData.name : "",
        position: coachData && coachData.position ? coachData.position : "",
        phone: coachData && coachData.phone ? coachData.phone : "",
        email: coachData && coachData.email ? coachData.email : "",
        gender: coachData && coachData.gender ? coachData.gender : "",
    };

    const [pState, setPstate] = useState(coach)
    console.log(80, pState)

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
        console.log(state);
        const adminId = "64a2b13800357eba47ad0f83";
        const uAdminId = localStorage.getItem("coachId");
        console.log(97,uAdminId);
        if (!uAdminId) {
            console.log(state.username);
            const name = state.username;
            const fname = name.split(" ")[0] || "";
            const lname = name.split(" ")[1] || "*";
            const newState = { ...state, fname, lname }
            // console.log("#######", newState)
            // console.log("*****", state)
            dispatch(AddAdmin(newState));
        } else {
            console.log("state: ", state)
            // const data = {
            //     ...state,
            //     date: undefined,
            // }
            dispatch(UpdateAdmin({ ...state, adminId: uAdminId }));
        }
    };

    const handleChange = (event) => {
        // event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        if (localStorage.getItem("coachId") && store.Admins.successMessage) {
            Swal.fire({
                title: store.Admins.successMessage,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }, 2000).then(() => {
                localStorage.removeItem("coachId"); //{remove item}
                localStorage.removeItem("coach"); //{remove item}
                navigate("/pages/listCoach")
            })
        }

        if (!localStorage.getItem("coachId") && store.Admins.successMessage) {
            Swal.fire({
                title: store.Admins.successMessage,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }, 2000).then(() => {
                navigate("/pages/listCoach")
            })
        }
    }, [store]);

    const handleDateChange = (date) => setState({ ...state, date });

    let {
        username,
        fname,
        lname,
        phone,
        password,
        // confirmPassword,
        gender,
        // date,
        email,
        position,
    } = state;
    state.password = "Abcd@1234"
    state.role = "Coach"
    state.fname = state.username && state.username.split(" ")[0];
    state.lname = state.username && state.username.split(" ")[1] || "";


    const [age, setAge] = React.useState('');

    const handleChanges = (event) => {
        setAge(event.target.value);
    };

    let pageTitle = localStorage.getItem("coachId") ? "Edit Coach" : "Add Coach"
    let btnName = localStorage.getItem("coachId") ? "Save Edit" : "Save"


    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: pageTitle }]} />
            </Box>

            <Stack spacing={3}>
                <SimpleCard title={pageTitle}>
                    <div>
                        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                            <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>

                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <TextField
                                            type="text"
                                            name="username"
                                            id="standard-basic"
                                            value={username || pState.name || ""}
                                            onChange={handleChange}
                                            errorMessages={["this field is required"]}
                                            label="Name"
                                            validators={["required"]}
                                        />
                                    </FormControl>


                                    {/* <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Team</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={team||""}
                                            label="Team"
                                            name="team"
                                            onChange={handleChanges}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl> */}

                                    <FormControl sx={{ minWidth: "90%", marginBottom: 2 }}>
                                        <InputLabel id="demo-simple-select-helper-label">
                                            Position
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={position || pState.position || ""}
                                            name="position"
                                            label="position"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="U19">U19</MenuItem>
                                            <MenuItem value="U20">U20</MenuItem>
                                            <MenuItem value="U30">U30</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
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

                                            <FormControlLabel
                                                value="Others"
                                                label="Others"
                                                labelPlacement="end"
                                                control={<Radio color="secondary" />}
                                            />
                                        </RadioGroup>
                                    </FormControl>

                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>

                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <TextField
                                            type="text"
                                            name="phone"
                                            value={phone || pState.phone || ""}
                                            label="phone"
                                            onChange={handleChange}
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <TextField
                                            type="email"
                                            name="email"
                                            label="Email"
                                            value={email || pState.email || ""}
                                            onChange={handleChange}
                                            validators={["required", "isEmail"]}
                                            errorMessages={["this field is required", "email is not valid"]}
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
    )
}
