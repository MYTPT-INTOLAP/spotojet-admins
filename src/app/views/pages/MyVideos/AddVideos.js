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

import { AddVideoData, UpdateVideo } from "../../../../store/actions/videoAction";


import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { red } from '@mui/material/colors';

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

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    // console.log(62, store.Players.data)

    useEffect(() => {
        localStorage.removeItem('videoId');
        localStorage.removeItem('video');
      }, [])


    const [age, setAge] = React.useState('');

    const handleChanges = (event) => {
        setAge(event.target.value);
    };


    // let colourOptions = [
    //     { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    //     { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    //     { value: 'purple', label: 'Purple', color: '#5243AA' },
    //     { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    //     { value: 'orange', label: 'Orange', color: '#FF8B00' },
    //     { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    //     { value: 'green', label: 'Green', color: '#36B37E' },
    //     { value: 'forest', label: 'Forest', color: '#00875A' },
    //     { value: 'slate', label: 'Slate', color: '#253858' },
    //     { value: 'silver', label: 'Silver', color: '#666666' },
    // ]

    let videoData;
    if (localStorage.getItem("videoId")) {
        console.log("hi")
        videoData = localStorage.getItem("video")
        videoData = JSON.parse(videoData)
        console.log(videoData)
    }

    let videoDetails = {
        video: videoData && videoData.video ? videoData.video : "",
        report: videoData && videoData.report ? videoData.report : "",
        comment: videoData && videoData.comment ? videoData.comment : "",
        players: videoData && videoData.players ? videoData.players : "",
    };

    const [pState, setPstate] = useState(videoDetails)
    console.log(102, videoDetails)

    const playersData = store?.Players?.data || [];
    // const colour = ['#00B8D9','#0052CC', '#5243AA', '#FF5630','#FF8B00','#FFC400','#36B37E','#00875A','#253858','#666666'];
    // const pickcolor= colour[Math.floor(Math.random() * colour.length)]
    let playerOptions = []
    playersData.map((sPlayer) => {
        let x = { value: sPlayer._id, label: sPlayer.name }
        playerOptions.push(x)
    })

    const [state, setState] = useState({ date: new Date() });
    let {
        video,
        report,
        comment,
        players,
    } = state;

    // const handleChange = (event) => {
    //     // event.persist();
    //     // event.preventDefault();
    //     setState({ ...state, [event.target.name]: event.target.value });
    // };

    const handleChange = (event) => {
        console.log(event.target.name)
        if (event.target.name === "video") {
            console.log(110, "video", event.target.files[0].name)
            setState({ ...state, [event.target.name]: event.target.files[0] });
        } else {
            setState({ ...state, [event.target.name]: event.target.value });
        }
    };

    // const [playerArr,setPlayerArr] =  useState([])
    // // let playerArr = [];
    // const handlePlayerChange = (selectedOptions) => {
    //     selectedOptions.map((option) => {
    //         console.log(option)
    //         setPlayerArr.push(option.value)
    //         console.log(playerArr)
    //         // setState({ ...state, players: [ playerArr] });
    //         // console.log(state)
    //     });
    // };
    // console.log(playerArr)

    const [playerArr, setPlayerArr] = useState([]);

    const handlePlayerChange = (selectedOptions) => {
        const updatedPlayerArr = selectedOptions.map((option) => option.value);
        setPlayerArr(updatedPlayerArr);
    };

    // console.log(playerArr);
    state.players = playerArr;
    console.log(state.players);



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state)
        const adminId = "64a7f852277cdd655b84098b";
        const videoId = localStorage.getItem("videoId");
        console.log(videoId);

        if (!videoId) {
            dispatch(AddVideoData({ ...state, adminId: adminId }));
        } else {
            console.log("update")
            console.log("state: ", state)
            const data = {
                ...state,
                date: undefined,
            }
            dispatch(UpdateVideo({ ...data, videoId:videoId, adminId: adminId }));
        }
    };

    useEffect(() => {
        if (localStorage.getItem("videoId") && store.Videos.successMessage) {
            Swal.fire({
                title: store.Videos.successMessage,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }, 2000).then(() => {
                localStorage.removeItem("videoId"); //{remove item}
                localStorage.removeItem("video"); //{remove item}
                navigate("/pages/listVideos")
            })
        }

        if (!localStorage.getItem("videoId") && store.Videos.successMessage) {
            Swal.fire({
                title: store.Videos.successMessage,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }, 2000).then(() => {
                navigate("/pages/listVideos")
            })
        }
    }, [store]);

    let pageTitle = localStorage.getItem("videoId") ? "Edit Video" : "Add Videos"
    let btnName = localStorage.getItem("videoId") ? "Save Edit" : "Save"


    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: pageTitle }]} />
            </Box>

            <Stack spacing={3}>
                <SimpleCard title={pageTitle}>
                    <div>
                        <ValidatorForm onSubmit={handleSubmit} onError={() => null} >
                            <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12} >

                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <TextField
                                            type="file"
                                            name="video"
                                            id="standard-basic"
                                            onChange={handleChange}
                                            errorMessages={["this field is required"]}
                                            label="Video"
                                            validators={["required"]}
                                        />
                                    </FormControl>

                                    {/* <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
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
                                    </FormControl> */}


                                    <FormControl sx={{ minWidth: "90%", marginBottom: 2 }}>
                                        <InputLabel id="demo-simple-select-helper-label">
                                            Report
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={report || pState.report || ""}
                                            name="report"
                                            label="report"
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="report">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="Feedback">Feedback</MenuItem>
                                            <MenuItem value="Assesment">Assesment</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>

                                    {/* <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}>
                                        <Selects
                                            defaultValue={[playerOptions[2]]}
                                            isMulti
                                            components={animatedComponents}
                                            name="players"
                                            label="players"
                                            placeholder="Players"
                                            options={playerOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            value={players || ""}
                                            // onChange={handleChange}
                                            onChange={handlePlayerChange}
                                        // onChange((e)=>{console.log(e.target.value)})
                                        />
                                    </FormControl> */}





                                    <FormControl sx={{ minWidth: '90%', marginBottom: 2 }}  >
                                        <Selects
                                            // defaultValue={ pState.players[0]|| ""}
                                            isMulti
                                            components={playerOptions}
                                            name="players"
                                            placeholder="Players"
                                            options={playerOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            onChange={handlePlayerChange}
                                        // styles={{color: 'blue'}}
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
                                            name="comment"
                                            id="standard-basic"
                                            value={comment || pState.comment || ""}
                                            onChange={handleChange}
                                            errorMessages={["this field is required"]}
                                            label="Comment"
                                            validators={["required"]}
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
