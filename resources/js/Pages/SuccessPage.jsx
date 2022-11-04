import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import { Result } from '@/src/components/Result'
import {MainLayout} from "@/src/layouts/MainLayout";
export default function SuccessPage(props) {
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
