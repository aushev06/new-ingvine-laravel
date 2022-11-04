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
import {useLoginMutation} from "../../redux/api/auth";
import {getMe} from "@/src/service/auth";
import {selectUser} from "@/src/features/userSlice";
import {Link} from "@inertiajs/inertia-react";

export const LoginButton = () => {
    const isMobile = useMediaQuery('(max-width:768px)');
    const [screen, setScreen] = useState('login');
    const [login] = useLoginMutation()
    const user = useSelector(selectUser);

    const form = useForm({
        mode: "onBlur",
        resolver: yupResolver(LoginSchema),
        defaultValues: {
            email: '',
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
        console.log(data)
        await login(data);
        await getMe();
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

                <Button onClick={form.handleSubmit(onSubmitLogin)} className={styles.button}>
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
                    <Link href={'/profile'}  className={styles.root}>
                        <Icon type={'profile'}/>
                    </Link>
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
