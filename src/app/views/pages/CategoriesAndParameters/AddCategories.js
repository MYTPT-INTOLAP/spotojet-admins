// import * as React from 'react';
import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { UpdateAdmin } from 'store/actions/adminAction';


import { Stack } from '@mui/material';
import { Box, styled, Grid, Card, TextField, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';


import { Span } from "app/components/Typography";
import SaveIcon from '@mui/icons-material/Save';

import { useEffect } from 'react';
import { AddParam, GetAllParam } from "../../../../store/actions/parameterAction"
import { AddCategory, GetAllCat } from "../../../../store/actions/categoryAction"



const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));


export default function AddCategories() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const { categoryErrorMessage, categorySuccessMessage, catData } = store.Category;
  const { paramErrorMessage, paramSuccessMessage, paramData } = store.Parameters;


  
  let cardTypeArr = [];
  if (catData && paramData) {
    catData.map((sReportData) => {
      // cardTypeArr.push(sReportData);
      const x = {
        cardType: sReportData,
        parameters: [],
      }
      paramData.map((sParam) => {
        if (sReportData._id === sParam.cardTypeId) {
          // x.parameters.push(sParam);
          x.parameters = [...new Set([...x.parameters, sParam])]
        }
      })
      cardTypeArr.push(x)
    })
  }
  // console.log(127, cardTypeArr); // why running multiple time??


  const [state, setState] = useState({ date: new Date() });
  const { colorCode, parameter, category } = state;

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  };

  const handleAddNewCategory = () => {
    //category + color 
    const adminId = "64a7f852277cdd655b84098b";
    const data = { adminId, cardType: category, colorCode };
    console.log(data);
    dispatch(AddCategory(data)).then((response) => {
      dispatch(GetAllCat())
      // console.log(response)
      setState("")
    }).catch((error) => {
        console.log(error);
      })
  };

  const handleAddNewParam = (value) => {
    //only param
    const adminId = "64a7f852277cdd655b84098b";
    const creatorId = "64a7f852277cdd655b84098b";
    const cardTypeId = value.cardType._id;
    const data = { creatorId, cardTypeId, parameter, adminId }
    console.log(data)
    dispatch(AddParam(data)).then((response) => {
      dispatch(GetAllParam())
      setState("")
    }).catch((error) => {
      console.log(error);
    })
  };




  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Categories And Parameters' }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Categories And Parameters">
          <Grid container spacing={{ xs: 0, sm: 0, md: 6, lg: 6 }}>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mb: 2 }}>
              <div>
                {cardTypeArr && cardTypeArr.length > 0 ?
                  cardTypeArr.map((value, index) => {
                    let pData = []
                    if (value && value.parameters && value.parameters.length > 0) {
                      pData = [...value.parameters]
                    }
                    return (
                      <Accordion key={index}>

                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{value?.cardType?.cardType || ""}</Typography>
                        </AccordionSummary>

                        <AccordionDetails>

                          {/* <div>
                            <TextField
                              type="text"
                              // name="colorCode"
                              id="standard-basic"
                              sx={{ minWidth: 200, marginBottom: 2 }}

                              errorMessages={["this field is required"]}
                              label="Color code"
                              // validators={["required"]}
                              name='color'
                              value={color || ""}
                              onChange={handleChange}
                            />
                          </div> */}

                          {pData && pData.length > 0 ?
                            pData.map((values, indexs) => {
                              return (
                                <Box key={indexs} sx={{ flexDirection: 'row', backgroundColor: '#E5F1F1', width: 400, p: 1.5, mb: 1 }}>
                                  <input
                                    value={values.parameter}
                                    style={{ padding: '5px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none' }}
                                  />
                                </Box>
                              )
                            })
                            : null}


                          <Box sx={{ flexDirection: 'row', width: 100, mb: 1, mt: 5 }}>
                            <input
                              placeholder="Input your new parameter"
                              style={{ height: '40px', padding: '5px', width: '280px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none', marginRight: 20 }}
                              name='parameter'
                              value={parameter || null || ""}
                              onChange={handleChange}
                            />
                            <Button color="success" variant="contained" sx={{ mt: 1 }} onClick={() => handleAddNewParam(value)}>
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

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mb: 2 }}>

              <Box sx={{ flexDirection: 'row', width: 400, mb: 1 }}>

                <input
                  placeholder="Input your new category"
                  style={{ height: '40px', padding: '5px', width: '280px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none', marginRight: 20 }}
                  name="category"
                  errorMessages={["this field is required"]}
                  validators={["required"]}
                  value={category || ""}
                  onChange={handleChange}
                />

                <input
                  placeholder="Input your color for your category"
                  style={{ height: '40px', padding: '5px', width: '280px', backgroundColor: '#E5F1F1', outline: 'none', border: 'none', marginRight: 20 }}
                  name="colorCode"
                  errorMessages={["this field is required"]}
                  validators={["required"]}
                  value={colorCode || ""}
                  onChange={handleChange}
                />

                <div >

                  <Button color="success" variant="contained"
                    onClick={() => handleAddNewCategory()}
                    sx={{ mt: 1, minWidth: 50 }}
                  >
                    <SaveIcon />
                    <Span sx={{ pl: 1, textTransform: "capitalize" }}>ADD</Span>
                  </Button>
                </div>

              </Box>

            </Grid>

          </Grid>
        </SimpleCard>
      </Stack>
    </Container >
  )
}
