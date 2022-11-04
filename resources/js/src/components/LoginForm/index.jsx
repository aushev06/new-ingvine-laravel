import {Controller, useFormContext} from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import styles from "./Login.module.scss"
import {MuiTelInput} from "mui-tel-input";
import {FormField} from "../FormField";

export const LoginForm = () => {
    const {control, register, formState, getValues} = useFormContext();
    return (
        <div className={styles.formControl}>
            <FormControl className={styles.formControl}>
                <FormField showError={true} error={formState.errors?.email?.message} autocomplete={false} register={register} placeholder={"+7 ___ ___ __ __"} name={'phone'}/>
                <FormField error={formState.errors?.password?.message} register={register} placeholder={'Пароль'} name={'password'} type={'password'}/>


            </FormControl>

        </div>
    )
}


export const RegistrationForm = () => {
    const {register, formState} = useFormContext();

    return (
        <div className={styles.formControl}>
            <FormControl className={styles.formControl}>
                <FormField error={formState.errors?.name?.message} autocomplete={false} register={register} placeholder={'Имя'} name={'name'}/>
                <FormField error={formState.errors?.phone?.message} register={register} placeholder={"+7 ___ ___ __ __"} name={'phone'}/>
                <FormField error={formState.errors?.password?.message} register={register} placeholder={'Пароль'} name={'password'} type={'password'}/>
                <FormField error={formState.errors?.password_confirmation?.message} register={register} placeholder={'Подтвердите пароль'} name={'password_confirmation'} type={'password'}/>

                <FormField error={formState.errors?.birthday?.message} register={register} type={'date'} placeholder={'Дата рождения'} name={'birthday'}/>

            </FormControl>

        </div>
    )
}
