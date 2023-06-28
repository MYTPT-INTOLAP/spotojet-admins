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

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));

export default function Position() {

    let listData = [
        {
            pName: 'My Position'
        },
        {
            pName: 'My Position'
        }, {
            pName: 'My Position'
        }, {
            pName: 'My Position'
        }, {
            pName: 'My Position'
        }, {
            pName: 'My Position'
        }, {
            pName: 'My Position'
        }, {
            pName: 'My Position'
        }, {
            pName: 'My Position'
        }, {
            pName: 'My Position'
        },
    ]
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
                                                    <Checkbox />
                                                    <input
                                                        value={value.pName}
                                                        style={{ padding: '5px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none' }}
                                                    />
                                                </Box>
                                            )
                                        })
                                        : null}

                                    <Box sx={{ flexDirection: 'row', width: 400, mb: 1, mt: 5 }}>
                                        <input
                                            placeholder="Input your new position"
                                            style={{ height: '40px', padding: '5px', width: '280px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none', marginRight: 20 }}
                                        />
                                        <Button color="success" variant="contained">
                                            <SaveIcon />
                                            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Save</Span>
                                        </Button>
                                    </Box>
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <p>My position Library</p>
                                    {listData && listData.length > 0 ?
                                        listData.map((value, index) => {
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
