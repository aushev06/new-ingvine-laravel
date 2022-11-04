import * as yup from 'yup';

export const LoginSchema = yup
    .object()
    .shape({
        email: yup.string().required('Укажите номер телефона'),
        password: yup.string().required('Укажите пароль'),
    })

