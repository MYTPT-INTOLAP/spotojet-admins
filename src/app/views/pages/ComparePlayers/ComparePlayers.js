
import React from 'react'
import { Card, Stack } from '@mui/material';
import { Box, styled, Button, Grid } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));


export default function ComparePlayers() {

    const columns = [
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "positions",
            label: "Positions",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "date",
            label: "Match Date",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "club",
            label: "Club",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "team",
            label: "Team",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "type",
            label: "Type",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "Action",
            label: "Action",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (data, dataIndex, rowIndex) => {
                    return (
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Button >
                                <RemoveRedEyeIcon />
                            </Button>
                            <Button >
                                <DeleteIcon sx={{ color: 'red' }} />
                            </Button>
                        </Box>
                    );
                }
            }

        },
    ];

    const data = [
        { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
        { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
        { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
        { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
        { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
        { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
        { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
        { name: "My Name", positions: 'fgdgg', date: '31-06-2023', club: 'Stars FC', team: 'UI10', type: 'Assesment' },
    ];

    const options = {
        // filterType: 'checkbox',
        filter: true,
        onFilterChange: (changedColumn, filterList) => {
            console.log(changedColumn, filterList);
        },
        selectableRows: 'multiple',
        filterType: 'dropdown',
        responsive: 'horizontal',
        rowsPerPage: 10
    };


    return (
        <Container>

            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'Compare Players' }]} />
            </Box>

            <Stack spacing={3}>
                <MUIDataTable
                    title={'Compare Players'}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </Stack>

            <Stack sx={{ mt: 5 }} spacing={3}>
                <SimpleCard title="">
                    <Grid container spacing={6}>

                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <div style={{ justifyContent: 'center' }}>
                                <h2>{'.'}</h2>
                                <h3>{'.'}</h3>
                                <h2>Total Score</h2>
                                <h2>Technical</h2>
                                <h4>perameter 1</h4>
                                <h2>Tactical</h2>
                                <h4>perameter 1</h4>
                                <h2>Physical</h2>
                                <h4>perameter 1</h4>
                            </div>
                        </Grid>

                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <div style={{ width: '100%', flexDirection: 'column', alignContent: 'center' }}>
                                <h2>Alex Ferguson</h2>
                                <h3>Dec23 Goalkeeper</h3>
                                <Card sx={{ height: 40, width: 80, ml: 4, backgroundColor: '#232A45' }}>
                                    <p style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', marginTop: 5 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 1, backgroundColor: '#343c5c' }}>
                                    <p style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 1 }}>
                                    <p style={{ color: '#0000000', textAlign: 'center', fontSize: 20, marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 3, backgroundColor: '#343c5c' }}>
                                    <p style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 1 }}>
                                    <p style={{ color: '#0000000', textAlign: 'center', fontSize: 20, marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 3, backgroundColor: '#343c5c' }}>
                                    <p style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 1 }}>
                                    <p style={{ color: '#0000000', textAlign: 'center', fontSize: 20, marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                            </div>
                        </Grid>

                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <div style={{ width: '100%', alignContent: 'center' }}>
                                <h2>Alex Ferguson</h2>
                                <h3>Dec23 Goalkeeper</h3>
                                <Card sx={{ height: 40, width: 80, ml: 4, backgroundColor: '#232A45' }}>
                                    <p style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', marginTop: 5 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 1, backgroundColor: '#343c5c' }}>
                                    <p style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 1 }}>
                                    <p style={{ color: '#0000000', textAlign: 'center', fontSize: 20, marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 3, backgroundColor: '#343c5c' }}>
                                    <p style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 1 }}>
                                    <p style={{ color: '#0000000', textAlign: 'center', fontSize: 20, marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 3, backgroundColor: '#343c5c' }}>
                                    <p style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>
                                <Card sx={{ height: 30, width: 80, ml: 4, mt: 1 }}>
                                    <p style={{ color: '#0000000', textAlign: 'center', fontSize: 20, marginTop: 1 }}>
                                        5.2
                                    </p>
                                </Card>

                            </div>
                        </Grid>

                        {/* <Grid item lg={3} md={3} sm={12} xs={12} >
                            <div style={{ width: '100%', flexDirection:'column', alignContent: 'center', justifyContent: 'center' }}>
                                <h2>Alex Ferguson</h2>
                                <h3>Dec23 Goalkeeper</h3>
                                <Card sx={{height: 40, width: 80, ml: 4, backgroundColor: '#232A45' }}>
                                    <p style={{color: '#ffffff', fontSize: 20, textAlign: 'center', marginTop: 5}}>
                                        5.2
                                    </p>
                                </Card>
                            </div>
                        </Grid> */}

                    </Grid>
                </SimpleCard>
            </Stack>

        </Container>
    )
}
