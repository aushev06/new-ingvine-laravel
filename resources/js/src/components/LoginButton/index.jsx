import Button from "@mui/material/Button";
import styles from './LoginButton.module.scss';
import {Icon} from "../Icon";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import {ListItem} from "@mui/material";
import clsx from "clsx";
import React, {useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {selectShowLoginModal, setShowLoginModal} from "../../features/loginSlice";
import {LoginForm, RegistrationForm} from "../LoginForm";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema} from "../../schemas/LoginSchema";
import {getCsrf, getMe, login, logout, register} from "@/src/service/auth";
import {selectUser, setUser} from "@/src/features/userSlice";
import {Link} from "@inertiajs/inertia-react";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useAlert} from "@/src/hooks/useAlert";

export default function LoginButton() {
    const isMobile = useMediaQuery('(max-width:768px)');
    const [screen, setScreen] = useState('login');
    const user = useSelector(selectUser);

    const { openAlert } = useAlert()

    const form = useForm({
        mode: "onBlur",
        resolver: yupResolver(LoginSchema),
        defaultValues: {
            phone: '',
            password: '',
        },
    });

    const opened = useSelector(selectShowLoginModal);

    const dispatch = useDispatch();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 440,
        bgcolor: '#fff',
        boxShadow: 24,
        p: 4,
        borderRadius: '30px'

    };

    const onSubmitLogin = async (data) => {
        try {
            await login({...data, remember: true});
            dispatch(setUser(await getMe()));
            dispatch(setShowLoginModal(false));

        } catch (e) {
            console.log(e)
            openAlert('Не удалось войти', 'error')

        }
    }

    const onRegister = async (data) => {
       try {
           await register({...data, remember: true});
           dispatch(setUser(await getMe()));
           dispatch(setShowLoginModal(false));
       } catch (e) {
           for (const field in e.response.data.errors) {
               form.setError(field, { message: e.response.data.errors[field][0] })
           }
       }
    }

    const handleLogout = async () => {
        await logout();
    }

    const title = {
        login: 'Вход в личный кабинет',
        registration: 'Регистрация',
    }

    const modalContent = () => {
        return (
            <FormProvider {...form}>
                <Typography className={styles.title} id="modal-modal-title" variant="h6" component="h2">
                    {title[screen]}
                </Typography>

                <div className={styles.container}>
                    {
                        screen === 'login' ? <LoginForm/> : <RegistrationForm/>
                    }
                </div>

                <Button onClick={form.handleSubmit(screen === 'login' ? onSubmitLogin : onRegister)} className={styles.button}>
                    <span className={styles.btnText}>
                        {screen === 'login' ? 'Войти' : 'Зарегистрироваться'}
                    </span>
                </Button>


                {
                    screen === 'login' ? (
                        <div className={styles.textContainer}>
                            <span>
                                Нет аккаунта?
                            </span>
                            <span onClick={() => setScreen('registration')}>
                                Зарегистрироваться
                            </span>
                        </div>
                    ) : (
                        <div className={styles.textContainer}>
                            <span onClick={() => setScreen('login')}>
                                Войти
                            </span>
                        </div>
                    )
                }

            </FormProvider>
        )
    }

    return (
        <>
            {
                !user ? (
                    <i onClick={() => dispatch(setShowLoginModal(true))} className={styles.root}>
                        <Icon type={'profile'}/>
                    </i>
                ) : (
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <>
                                <i  {...bindTrigger(popupState)} className={styles.root}>
                                    <Icon type={'profile'}/>
                                </i>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>
                                        <Link href={'/profile'}>
                                            Заказы
                                        </Link>
                                    </MenuItem>

                                    <MenuItem className={styles.item} onClick={() => {
                                        handleLogout()
                                        dispatch(setUser(null));
                                        popupState.close()
                                    }}>
                                        Выйти
                                    </MenuItem>

                                </Menu>
                            </>
                        )}
                    </PopupState>
                )
            }


            <Modal
                open={opened}
                onClose={() => dispatch(setShowLoginModal(false))}
            >
                <Box sx={style}>
                    {modalContent()}
                </Box>
            </Modal>
        </>
    )
}
