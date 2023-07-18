import { Stack } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
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

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddPosition, GetAllPosition, DeletePosition, UpdatePosition } from "../../../../store/actions/positionAction";
import Swal from 'sweetalert2'
import { POSITION_SUCESS_MSG_CLEAR } from "../../../../store/types/positionTypes"



const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));



export default function Position() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const { posLoading, posErrorMessage, posSuccessMessage, posData } = store.Positions
    console.log(46, posData);
    const allPositions = posData || [];



    const [state, setState] = useState({ date: new Date() });
    let {
        positions,
        shortHand
    } = state;


    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi")
        //add position
        console.log(state)
        const adminId = "64a7f852277cdd655b84098b";
        /*we are sending only adminId from FE but in backend we set coach value as adminID */
        dispatch(AddPosition({ ...state, adminId: adminId }));
    };

    
    useEffect(() => {
        // console.log(posSuccessMessage)
        if (posSuccessMessage) {

            dispatch(GetAllPosition())
            dispatch({ type: POSITION_SUCESS_MSG_CLEAR })
            setState({ ...state, positions: "", shortHand: "" })

        }
    }, [store]);

    // let listData = [
    //     {
    //         pName: 'My Position'
    //     },
    //     {
    //         pName: 'My Position'
    //     }, {
    //         pName: 'My Position'
    //     }, {
    //         pName: 'My Position'
    //     }, {
    //         pName: 'My Position'
    //     }, {
    //         pName: 'My Position'
    //     }, {
    //         pName: 'My Position'
    //     }, {
    //         pName: 'My Position'
    //     }, {
    //         pName: 'My Position'
    //     }, {
    //         pName: 'My Position'
    //     },
    // ]

    let listData = [];
    allPositions.map((sPosition) => {
        let pos = {
            pName: `${sPosition.positions} (${sPosition.shortHand}) `,
            id: sPosition._id,
            isChecked: sPosition.isSelected
        }
        listData.push(pos);
    });

    const handleCheckboxChange = (value) => {
        const adminId = "64a7f852277cdd655b84098b";
        console.log(value);
        console.log(value.isChecked)
        const isSelected = value.isChecked ? false : true;
        dispatch(UpdatePosition({ id: value.id, isSelected: isSelected, adminId: adminId }))
    };

    let selectedData = [];
    allPositions.map((sPosition) => {
        if (sPosition.isSelected) {
            let pos = {
                pName: `${sPosition.positions} (${sPosition.shortHand}) `,
                id: sPosition._id
            }
            selectedData.push(pos);
        }
    });


    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'Position' }]} />
            </Box>

            <Stack spacing={3}>
                <SimpleCard title="Position List">
                    <div>
                        <ValidatorForm onError={() => null}>
                            <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <p>Please tick mark all the positions which you'd like use for the players</p>
                                    {listData && listData.length > 0 ?
                                        listData.map((value, index) => {
                                            return (
                                                <Box key={index} sx={{ flexDirection: 'row', backgroundColor: '#E5F1F1', width: 400, mb: 1 }}>
                                                    <Checkbox checked={value.isChecked} onChange={() => handleCheckboxChange(value)} />
                                                    <input
                                                        value={value.pName}
                                                        style={{ padding: '5px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none' }}
                                                    />
                                                </Box>
                                            )
                                        })
                                        : null}

                                    <Box sx={{ flexDirection: 'row', width: 450, mb: 1, mt: 5 }}>
                                        <input
                                            placeholder="Input your new position"
                                            style={{ height: '40px', padding: '5px', width: '200px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none', marginRight: 20 }}
                                            name='positions'
                                            // label='position'
                                            value={positions || ""}
                                            onChange={handleChange}
                                        />
                                        <input
                                            placeholder="Acronym"
                                            style={{ height: '40px', padding: '5px', width: '100px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none', marginRight: 20 }}
                                            name='shortHand'
                                            // label='shortHand'
                                            value={shortHand || ""}
                                            onChange={handleChange}
                                        />
                                        <Button color="success" variant="contained" onClick={handleSubmit}>
                                            <SaveIcon />
                                            <Span sx={{ pl: 1, textTransform: "capitalize" }} >Save</Span>
                                        </Button>
                                    </Box>
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <p>My position Library</p>
                                    {selectedData && selectedData.length > 0 ?
                                        selectedData.map((value, index) => {
                                            return (
                                                <Box key={index} sx={{ flexDirection: 'row', backgroundColor: '#E5F1F1', width: 400, height: 40, mb: 1.5 }}>
                                                    {/* <Checkbox /> */}
                                                    <div
                                                        // value={value.pName}
                                                        style={{ padding: '12px 10px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none' }}
                                                    >{value.pName}</div>
                                                </Box>
                                            )
                                        })
                                        : null}
                                </Grid>
                            </Grid>

                            {/* <Button color="primary" variant="contained" type="submit">
                <SaveIcon/>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Save</Span>
              </Button> */}
                        </ValidatorForm>
                    </div>
                </SimpleCard>
            </Stack>
        </Container>
    )
}
