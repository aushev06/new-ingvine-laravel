import Drawer from "@mui/material/Drawer";
import styles from './NavigationDrawer.module.scss'
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import {SelectCity} from "../SelectCity";
import {CartButton} from "../CartButton";
import React from "react";
import NavLink from "@/Components/NavLink";

export const NavigationDrawer = ({menuOpened, onClose}) => {
    return (
        <Drawer
            anchor={'left'}
            classes={{paper: styles.paper}}
            open={menuOpened}
            onClose={onClose}
        >
            <button type="button" className={styles.closeButton} onClick={onClose}>
                <span className={styles.closeIcon}/>
            </button>

            <nav className={styles.root}>
                <ul className={styles.mainList}>
                    <MenuItem className={styles.item}>
                        <NavLink href={'/'}>
                            <Typography className={styles.mainItemBoldText} variant="body1">
                                Главная
                            </Typography>
                        </NavLink>
                    </MenuItem>

                    <MenuItem className={styles.item}>
                        <NavLink href={'/delivery'}>
                            <Typography className={styles.mainItemBoldText} variant="body1">
                                Доставка
                            </Typography>
                        </NavLink>
                    </MenuItem>
                </ul>
            </nav>

            <div className={styles.btns}>
                <SelectCity/>
                <div>
                    <CartButton/>
                </div>
            </div>

        </Drawer>
    )
}
