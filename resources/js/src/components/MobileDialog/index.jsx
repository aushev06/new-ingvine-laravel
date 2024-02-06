import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Link } from '@mui/material';

const ModalWindow = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Открыть модальное окно
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Информация о мобильном приложении</DialogTitle>
                <DialogContent>
                    <Typography>
                        У нас появилось мобильное приложение! Нажмите на ссылку ниже, чтобы скачать его:
                    </Typography>
                    <Link href="ссылка_на_мобильное_приложение" target="_blank">
                        Скачать приложение
                    </Link>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ModalWindow;
