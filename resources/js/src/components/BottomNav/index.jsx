import React, {useState, Suspense} from "react";

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import styles from "./BottomNav.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectCart, setOpen} from "../../features/cart/cartSlice";
import {selectUser} from "@/src/features/userSlice";

const CartButton = React.lazy(() => import('../CartButton'));
const LoginButton = React.lazy(() => import('../LoginButton'));


export const BottomNav = () => {
    const dispatch = useDispatch();
    const [openedMenu, setOpenedMenu] = React.useState('home');
    const user = useSelector(selectUser);

    const [totalCount] = useState(0)
    const [cartOpened, setCartOpened] = useState(false);
    const cart = useSelector(selectCart);

    const onClickLogin = () => {
        const el = document.querySelector("#login-btn");
        if (el) {
            // @ts-ignore
            el.click();
        }
    };

    return (
        <>
            <Paper
                className={styles.paper}
                sx={{position: "fixed", bottom: 0, left: 0, right: 0}}
            >
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        onClick={() => {
                            setOpenedMenu('home')
                        }}
                        icon={<HomeOutlinedIcon
                            style={{fontSize: 28, color: openedMenu === 'home' ? '#EB3800' : '#6F6F6F'}}/>}
                    />
                    <Suspense>
                        <BottomNavigationAction
                            onClick={() => dispatch(setOpen(true))}
                            icon={<CartButton />}
                        />
                        <BottomNavigationAction
                            onClick={onClickLogin}
                            icon={
                                <LoginButton />
                            }
                        />
                    </Suspense>
                </BottomNavigation>
            </Paper>
        </>
    );
};
