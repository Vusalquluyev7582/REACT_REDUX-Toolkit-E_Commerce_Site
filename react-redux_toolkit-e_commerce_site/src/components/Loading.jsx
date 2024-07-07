import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';


function Loading() {

    const { loading } = useSelector((store) => store.product);

    // const [open, setOpen] = useState(false);

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleOpen = () => {
    //     setOpen(true);
    // };


    return (

        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        //onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>

    );

};

export default Loading