import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Delivery as DeliveryPage } from '../src/pages/Delivery'

export default function Delivery(props) {
    return (
       <>
           <Head title={'Доставка'} />
           <DeliveryPage />
       </>
    );
}
