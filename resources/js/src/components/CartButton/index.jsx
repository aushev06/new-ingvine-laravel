import {CartDrawer} from "../CartDrawer";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectCart} from "../../features/cart/cartSlice";
import {IconButton} from "../IconButton";

export default function CartButton() {
    const isRoot = window.location.pathname;
    const [totalCount] = useState(0)
    const [cartOpened, setCartOpened] = useState(isRoot && window.location.search.includes('token'));
    const cart = useSelector(selectCart);

    return (
        <>
            <IconButton onClick={() => setCartOpened(true)} text={`${cart?.total || 0} ₽`} iconType={'bottomCart'}/>
            <CartDrawer
                totalCount={totalCount}
                totalPrice={cart?.total}
                opened={cartOpened}
                onClose={() => setCartOpened(false)}
                items={cart?.cartProperties || []}
            />

        </>
    )
}
