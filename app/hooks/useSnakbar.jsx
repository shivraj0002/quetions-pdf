import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useSnackbar = (vertical, horizontal) => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState('');

    const openSnackbar = (newSeverity, newMessage) => {
        setSeverity(newSeverity);
        setMessage(newMessage);
        setOpen(true);
    };

    const closeSnackbar = () => {
        setOpen(false);
    };

    const SnackbarComponent = (
        <Snackbar open={open} autoHideDuration={6000} onClose={closeSnackbar} anchorOrigin={{ vertical: vertical ?? 'top', horizontal: horizontal ?? 'center' }}>
            <Alert onClose={closeSnackbar} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );

    return { openSnackbar, SnackbarComponent };
};

export default useSnackbar;
