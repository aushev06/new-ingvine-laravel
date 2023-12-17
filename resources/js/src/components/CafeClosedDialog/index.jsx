// CafeClosedDialog.js
import React from 'react';
import { Dialog, DialogContent, Typography, Container } from '@mui/material';

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
};

const CafeClosedDialog = ({ open }) => {
    return (
        <Dialog open={open} maxWidth="md" fullWidth>
            <DialogContent>
                <Container sx={styles.container}>
                    <Typography variant="h4">
                        Извините, кафе не работает в воскресенье.
                    </Typography>
                </Container>
            </DialogContent>
        </Dialog>
    );
};

export default CafeClosedDialog;
