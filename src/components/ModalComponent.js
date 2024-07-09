import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../features/dashboard/dashboardSlice';
import { Box, Card, CardMedia, Modal, Button, Grid, } from '@mui/material'
import UploadButton from './UploadButton';
import Dropdown from './Dropdown';
import idCardImage from '../Assets/images/imagecard.png'

const ModalComponent = () => {

    const toggleModalStatus = useSelector((state) => state.dashboard.modalStatus)
    const idCardsData = useSelector((state)=>state.dashboard.idCards)

    const dispatch = useDispatch()

    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 500,
        maxWidth: 700,
        height: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        display: 'grid',
        borderRadius: '10px'
    };

    return (
        <>
            <Modal
                open={toggleModalStatus}
                onClose={() => dispatch(toggleModal(false))}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card>
                                <CardMedia
                                    image={idCardImage}
                                    component={'img'}
                                    sx={{ maxWidth: '100%', height: 'auto', padding: 0, margin: 0 }}

                                ></CardMedia>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <UploadButton />
                                <Dropdown options={['PDF', 'PNG']} />
                                <Dropdown options={['A4', 'A3', 'A2', 'A1']} />
                                <Button disabled={!idCardsData.length} sx={{ width: '100%' }} variant="contained">Download</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

export default ModalComponent