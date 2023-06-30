import React from 'react'
import { Stack } from '@mui/material';
import { Box, styled, Grid, TextField, Button, Checkbox } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';

import Radio from '@mui/material/Radio';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Span } from "app/components/Typography";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));

export default function AssessmentParameters() {

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    let data = [
        {
            'title': 'Technical',
            perameters: [
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },

            ]
        },
        {
            'title': 'Tactical',
            perameters: [
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },

            ]
        },
        {
            'title': 'Physical',
            perameters: [
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },
                {
                    'title': 'Passing & Retention',
                },

            ]
        },
    ]



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
                <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'Assessment Parameters' }]} />
            </Box>

            <Stack spacing={3}>
                <SimpleCard title="">
                    <h3>Please select the report format-with parameters divided by categories or list</h3>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', width: 550 }}>
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    sx={{ marginRight: 2 }}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <p>By Categories</p>
                            </Box>

                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', width: 550 }}>
                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChange}
                                    sx={{ marginRight: 2 }}
                                    value="b"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'B' }}
                                />
                                <p>By List</p>
                            </Box>

                        </Grid>
                    </Grid>

                    <h3>Would you like to use the template (you can edit it also) or create it from scratch?</h3>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', width: 550 }}>
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    sx={{ marginRight: 2 }}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <p>Use Template</p>
                            </Box>

                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', width: 550 }}>
                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChange}
                                    sx={{ marginRight: 2 }}
                                    value="b"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'B' }}
                                />
                                <p>Create New</p>
                            </Box>

                        </Grid>
                    </Grid>

                </SimpleCard>

                <SimpleCard title="Report Template">
                    <Grid container spacing={6}>
                        <Grid item lg={8} md={8} sm={12} xs={12} sx={{ mt: 2 }}>
                            <div>
                                {data && data.length > 0 ?
                                    data.map((value, index) => {
                                        return (
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography>{value.title}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {value.perameters && value.perameters.length > 0 ?
                                                        value.perameters.map((values, indexs) => {
                                                            return (
                                                                <Box key={index} sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E5F1F1', width: 400, p: 1.5, mb: 1 }}>
                                                                    <input
                                                                        value={values.title}
                                                                        style={{ padding: '5px', backgroundColor: '#E5F1F1', width: 300, outline: 'none', border: 'none' }}
                                                                    />
                                                                    <DeleteIcon sx={{ ml: 4 }} />
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

                                                </AccordionDetails>
                                            </Accordion>

                                        )
                                    })
                                    : null}

                            </div>
                        </Grid>

                        <Grid item lg={4} md={4} sm={12} xs={12} sx={{ mt: 2 }}>

                        </Grid>
                    </Grid>

                    {/* <h3>Would you like to use the template (you can edit it also) or create it from scratch?</h3>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <Box sx={{display: 'flex', flexDirection: 'row', width: 550}}>
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    sx={{marginRight: 2}}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <p>Use Template</p>
                            </Box>

                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <Box sx={{display: 'flex', flexDirection: 'row', width: 550}}>
                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChange}
                                    sx={{marginRight: 2}}
                                    value="b"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'B' }}
                                />
                                <p>Create New</p>
                            </Box>

                        </Grid>
                    </Grid> */}

                </SimpleCard>

                <SimpleCard title="">
                    <div>
                        <ValidatorForm onError={() => null}>
                            <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <h3>Which positions would you like to assess with this template? Select 1 or many.</h3>
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

                                    <Box sx={{ mt: 5, display: 'flex', flexDirection: 'row' }}>
                                        <TextField
                                            type="text"
                                            name="templateName"
                                            id="standard-basic"
                                            sx={{ minWidth: 400, marginBottom: 2 }}
                                            value={""}

                                            errorMessages={["this field is required"]}
                                            label="Template Name"
                                            validators={["required"]}
                                        />
                                        <Button color="success" sx={{height: 50, width: 180, ml: 3}} variant="contained">
                                            <SaveIcon />
                                            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Save</Span>
                                        </Button>
                                    </Box>

                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    {/* <p>My position Library</p>
                                    {listData && listData.length > 0 ?
                                        listData.map((value, index) => {
                                            return (
                                                <Box key={index} sx={{ flexDirection: 'row', backgroundColor: '#E5F1F1', width: 400, height: 40, mb: 1.5 }}>
                                                 
                                                    <div
                                                     
                                                        style={{ padding: '12px 10px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none' }}
                                                    >{value.pName}</div>
                                                </Box>
                                            )
                                        })
                                        : null} */}
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
