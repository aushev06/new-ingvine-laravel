import { Home } from '../src/pages/Home'
import {Head} from "@inertiajs/inertia-react";
import React from "react";
export default function Welcome (props) {
    return (
        <>
            <Head title={'Meatpoint - Доставка вкусной еды'} />
            <Home />
        </>
    )
}
