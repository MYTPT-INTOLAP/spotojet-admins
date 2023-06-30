import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import { Stack } from '@mui/material';
import { Box, styled, Grid, Card, TextField, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';


import { Span } from "app/components/Typography";
import SaveIcon from '@mui/icons-material/Save';


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));


export default function AddCategories() {

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

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Categories And Parameters' }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Categories And Parameters">
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
                          <div>
                            <TextField
                              type="text"
                              name="colorCode"
                              id="standard-basic"
                              sx={{ minWidth: 400, marginBottom: 2 }}
                              value={ ""}
    
                              errorMessages={["this field is required"]}
                              label="Color code"
                              validators={["required"]}
                            />
                          </div>
                          {value.perameters && value.perameters.length > 0 ?
                            value.perameters.map((values, indexs) => {
                              return (
                                <Box key={index} sx={{ flexDirection: 'row', backgroundColor: '#E5F1F1', width: 400, p: 1.5, mb: 1 }}>
                                  <input
                                    value={values.title}
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
        </SimpleCard>
      </Stack>
    </Container >
  )
}
