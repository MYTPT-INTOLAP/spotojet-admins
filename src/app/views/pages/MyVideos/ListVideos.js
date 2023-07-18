import React, {useEffect} from 'react'
import { Stack } from '@mui/material';
import { Box, styled, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { red } from '@mui/material/colors';
import {
  DeleteVideo
} from "../../../../store/actions/videoAction";


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));


export default function ListVideos() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  // console.log(62, store.Players.data)
  console.log(32, store.Videos.data)


 
  const columns = [
    {
      name: "video",
      label: "Video",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "report",
      label: "Report",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "player",
      label: "Player",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "date",
      label: "Date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "comment",
      label: "Comment",
      options: {
        filter: true,
        sort: false,
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
              <Button onClick={() => handleEdit(dataIndex)} >
                <EditIcon />
              </Button>
              <Button onClick={() => handleDelete(dataIndex)}>
                <DeleteIcon sx={{ color: 'red' }} />
              </Button>
            </Box>
          );
        }
      }

    },
  ];

  // const data = [
  //   { video: "https://dfjd.com/fc.mp4", report: 'gfcgfcgcf', player: 'dsfhsgf, dfdfd', date: "26-06-2023", comment: 'sfdsfdf' },
  //   { video: "https://dfjd.com/fc.mp4", report: 'gfcgfcgcf', player: 'dsfhsgf, dfdfd', date: "26-06-2023", comment: 'sfdsfdf' },
  //   { video: "https://dfjd.com/fc.mp4", report: 'gfcgfcgcf', player: 'dsfhsgf, dfdfd', date: "26-06-2023", comment: 'sfdsfdf' },
  //   { video: "https://dfjd.com/fc.mp4", report: 'gfcgfcgcf', player: 'dsfhsgf, dfdfd', date: "26-06-2023", comment: 'sfdsfdf' },
  //   { video: "https://dfjd.com/fc.mp4", report: 'gfcgfcgcf', player: 'dsfhsgf, dfdfd', date: "26-06-2023", comment: 'sfdsfdf' },
  //   { video: "https://dfjd.com/fc.mp4", report: 'gfcgfcgcf', player: 'dsfhsgf, dfdfd', date: "26-06-2023", comment: 'sfdsfdf' },
  //   { video: "https://dfjd.com/fc.mp4", report: 'gfcgfcgcf', player: 'dsfhsgf, dfdfd', date: "26-06-2023", comment: 'sfdsfdf' },
  // ];

  // let data = store.Videos.data
 
  let data = [];
  if (store.Videos.data) {
    let allvideoData = store.Videos.data || null;
    allvideoData.map((sVideoData) => {
      console.log(sVideoData)
       let x = {
        id: sVideoData._id,
        video: sVideoData.video,
        report: sVideoData.report,
        date: sVideoData.createdAt,
        comment: sVideoData.comment,
        players: sVideoData.players
        // player: sVideoData.sVideoData.player.join(", ")
      }
      console.log(x)
      data.push(x)
    })
  }


  const handleDelete = (x) => {

    const adminId = "64a7f852277cdd655b84098b";
    // console.log(data);
    const video = data[x.rowIndex];
    const videoid = video.id;
    // console.log(videoid);

    Swal.fire({
      title: 'You are going To delete the Team.Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(DeleteVideo({ videoid: videoid, adminId: adminId }))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };

  const handleEdit = (x) => {
    console.log("Edit", x);
    const video = data[x.rowIndex];
    console.log(video);
    const videoId = video.id;
    console.log(videoId);
    localStorage.setItem("videoId", videoId);
    localStorage.setItem("video", JSON.stringify(video));
    navigate("/pages/addVideos");
  };

  useEffect(() => {
    console.log(store.Videos.successMessage)
    if (store.Videos.successMessage) {
      /*window alert*/
      // window.alert(store.Players.successMessage)
      window.location.reload()
      // navigate("/pages/listPlayers")
    }
  }, [store])


  const options = {
    // filterType: 'checkbox',
    filter: true,
    selectableRows: 'multiple',
    filterType: 'dropdown',
    responsive: 'horizontal',
    rowsPerPage: 10,
    customToolbar: () => (
      <>
        <Button onClick={() => navigate('/pages/addVideos')}>
          <AddIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{ color: 'gray' }}>Add New Video</p>
        </Button>
        <Button>
          <CloudUploadIcon sx={{ color: 'gray', mr: 1 }} />
          <p style={{ color: 'gray' }}>Bulk upload</p>
        </Button>
      </>
    ),
  };
  // 



  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'List Videos' }]} />
      </Box>

      <Stack spacing={3} sx={{ mb: 15 }}>
        <MUIDataTable
          title={"List Videos"}
          data={data}
          columns={columns}
          options={options}
        />
      </Stack>
    </Container>
  )
}
