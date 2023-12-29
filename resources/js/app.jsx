import './src/styles/app.scss'


import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/inertia-react';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {Provider, useDispatch} from "react-redux";
import {store} from "@/src/app/store";
import {getCartAsync} from "@/src/features/cart/cartSlice";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import {BottomNav} from "@/src/components/BottomNav";
import {AlertContext} from "@/src/hooks/useAlert";
import {setUser} from "@/src/features/userSlice";
import CafeClosedDialog from "@/src/components/CafeClosedDialog";

const Component = function Component(props) {
    const dispatch = useDispatch();
    const settings = props.children.props.initialPage.props.site_settings;
    const [isSunday] = useState(new Date().getDay() === 0);
    const [dialogOpen, setDialogOpen] = useState(settings?.site_disabled == 'true');

    const handleDialogClose = () => {
        // Оставляем этот обработчик пустым, чтобы модальное окно не могло быть закрыто.
    };

    const [alertInfo, setAlertInfo] = useState({
        text: '',
        status: 'info',
        opened: false,
    });

    const openAlert = (text, status) => {
        setAlertInfo({
            text,
            status,
            opened: true,
        });
    };

    const closeAlert = () => {
        setAlertInfo((prev) => ({
            ...prev,
            opened: false,
        }));
    };


    useEffect(() => {
        dispatch(setUser(props.children.props.initialPage.props.auth.user));
        if (!localStorage.getItem('token')) {
            localStorage.setItem('token', (new Date().getTime().toString()))
        }

        dispatch(getCartAsync());

    }, [])
    return (
        <AlertContext.Provider value={{closeAlert, openAlert}}>

            <Snackbar
                TransitionComponent={Slide}
                key={Slide.name}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={alertInfo.opened}
                autoHideDuration={4500}
                onClose={closeAlert}
            >
                <Alert severity={alertInfo.status}>{alertInfo.text}</Alert>
            </Snackbar>
            <CafeClosedDialog open={dialogOpen} onClose={handleDialogClose} />

            {props.children}
            <BottomNav/>
        </AlertContext.Provider>
    )
}

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <Component>
                    <App {...props} />
                </Component>
            </Provider>
        );
    },
});

InertiaProgress.init({color: '#4B5563'});
