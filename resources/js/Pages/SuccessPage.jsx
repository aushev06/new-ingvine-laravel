import React, {useEffect} from 'react';
import {Head} from '@inertiajs/inertia-react';
import { Result } from '@/src/components/Result'
import {MainLayout} from "@/src/layouts/MainLayout";
import {getCartAsync} from "@/src/features/cart/cartSlice";
import {useDispatch} from "react-redux";
export default function SuccessPage(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.setItem('token', (new Date().getTime().toString()));
        dispatch(getCartAsync())
    }, [])

    return (
        <>
            <Head title={'Оплата'}/>
            <MainLayout disableCategories={true}>
                <Result title={'Заказ принят'} status={'success'} subTitle={'Ожидайте звонка'}
                        classes={{root: 'resultRoot'}}/>
            </MainLayout>
        </>
    );
}
