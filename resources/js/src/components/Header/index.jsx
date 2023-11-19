import clsx from 'clsx';
import React, {useState, Suspense} from 'react';
import styles from './Header.module.scss';
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {NavigationDrawer} from "../NavigationDrawer";
import {SelectCity} from "../SelectCity";
import {Link} from "@inertiajs/inertia-react";
import NavLink from "@/Components/NavLink";

const CartButton = React.lazy(() => import('../CartButton'));

const LoginButton = React.lazy(() => import('../LoginButton'));


export const Header = React.memo(function Header({className, onMenuClick}) {
    const isMobile = useMediaQuery('(max-width:768px)');
    const [opened, setIsOpened] = useState(false);

    if (isMobile) {
        return (
            <>
                <header className={styles.header}>
                    <div>
                        <Link href={'/'}>
                            <img className={styles.mobileLogo} src="/logo.png" alt=""/>
                        </Link>
                    </div>

                    <div>
                        <img onClick={() => setIsOpened(true)} src="/burger.svg" alt=""/>
                    </div>
                </header>

                <NavigationDrawer menuOpened={opened} onClose={() => setIsOpened(false)}/>

                <div style={{display: 'none'}}>
                    <SelectCity/>
                </div>

            </>
        )
    }

    return (
        <header className={clsx(styles.header, 'layout')}>
            <div className={styles.left}>
                <Link href={'/'} className={styles.logo}>
                    <i>
                        <img src="/logo.png" alt=""/>
                    </i>
                </Link>
            </div>
            <div className={styles.right}>
                <List className={styles.list}>
                    <ListItem>
                        <Link className={window.location.pathname == '/' ? styles.active : ''}
                              href={'/'}>Главная</Link>
                    </ListItem>

                    <ListItem>
                        <Link className={window.location.pathname == '/delivery' ? styles.active : ''}
                              href={'/delivery'}>Доставка</Link>
                    </ListItem>

                    <ListItem>
                        <Link className={window.location.pathname == '/about' ? styles.active : ''}
                              href={'/about'}>О нас</Link>
                    </ListItem>
                </List>

                <Suspense fallback={null}>
                    <div className={styles.btns}>
                        <SelectCity/>
                        <div>
                            <CartButton/>
                        </div>

                        <div>
                            <LoginButton/>
                        </div>
                    </div>
                </Suspense>

            </div>

        </header>
    );
});
