import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import {Pay} from "@/src/pages/Pay";

export default function PayPage(props) {
    return (
        <>
            <Head title={'Оплата'}/>
            <Pay/>
        </>
    );
}
