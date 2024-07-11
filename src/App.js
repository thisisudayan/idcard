import React from 'react';
import './App.css';
// import Dashboard from './features/dashboard/dashboard';
import ModalComponent from './components/ModalComponent';
import { Box, CardMedia, CardActions, IconButton, Card } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import idCard from './Assets/images/imagecard.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from './features/dashboard/dashboardSlice';
import Konvatest from './components/konva';

function App() {
  const idCards = useSelector((state)=>state.dashboard.idCards)
  const dispatch = useDispatch()
  // console.log(idCards)

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', borderRadius: '10px' }}>
        <Card sx={{ maxWidth: 250, position: 'relative' }}>
          <CardMedia
            component="img"
            // height="400"
            // width="500"
            image={idCard}
            alt="Paella dish"
          />
          <CardActions sx={{ position: 'absolute', top: '45%', left: '35%' }}>
            <IconButton color="white" aria-label="add to shopping cart" size='large' onClick={() => dispatch(toggleModal(true))} >
              <AddCircle sx={{ width: 50, height: 50 }} />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      {/* <Konvatest/> */}
      <ModalComponent />
    </Box>
  );
}

export default App;
