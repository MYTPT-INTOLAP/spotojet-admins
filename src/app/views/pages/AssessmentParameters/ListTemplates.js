import React from 'react'
import { Stack } from '@mui/material';
import { Box, styled, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));


export default function ListTemplates() {

    const columns = [
        {
            name: "tempateName",
            label: "Template Name",
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
            name: "Action",
            label: "Action",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (data, dataIndex, rowIndex) => {
                    return (
                        <Box sx={{ flexDirection: 'row' }}>
                            <Button >
                                <EditIcon />
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
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
        { tempateName: "My Template", positions: 'Main, dsfd, fgdgg' },
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
        rowsPerPage: 10,
        customToolbar: () => (
            <>
                <Button >
                    <AddIcon sx={{ color: 'gray', mr: 1 }} />
                    <p style={{ color: 'gray' }}>Add New Team</p>
                </Button>
                <Button>
                    <CloudUploadIcon sx={{ color: 'gray', mr: 1 }} />
                    <p style={{ color: 'gray' }}>Bulk upload</p>
                </Button>
            </>
        ),
    };


    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'List Templates' }]} />
            </Box>

            <Stack spacing={3}>
                <MUIDataTable
                    title={"Teams List"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </Stack>
        </Container>
    )
}
