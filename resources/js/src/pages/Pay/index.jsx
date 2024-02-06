import Typography from "@mui/material/Typography";
import {MainLayout} from "../../layouts/MainLayout";
import styles from './Pay.module.scss'
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {getCartAsync, selectCart} from "../../features/cart/cartSlice";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import {MuiTelInput} from 'mui-tel-input'

import {
    useForm,
    Controller,
} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {PaySchema} from "../../schemas/PaySchema";
import {selectSelectedCity} from "../../features/city/citySlice";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import {SelectCity} from "../../components/SelectCity";
import React, {useEffect, useState} from "react";
import {cartApi} from "../../service/cart";
import {useAlert} from "../../hooks/useAlert";
import {usePage} from '@inertiajs/inertia-react'
import {axios} from '../../core/axios'
import {selectUser} from "@/src/features/userSlice";
import Autocomplete from "@mui/material/Autocomplete";


const DELIVERY_TYPE_PICKUP = 1;
const DELIVERY_TYPE_COURIER = 2;
const DELIVERY_TYPE_ON_STORE = 4;
const TYPE_CASH = 0;
const isTg = window.location.search.includes('token');
export const Pay = () => {
    const user = useSelector(selectUser);
    const cart = useSelector(selectCart);
    const city = useSelector(selectSelectedCity);
    const dispatch = useDispatch();
    const [isDelivery, setIsDelivery] = useState(true)
    const {openAlert} = useAlert();
    const [sum, setSum] = useState(cart?.total);
    const [isLoading, setIsLoading] = useState(false);

    const [coupon, setCoupon] = useState('');
    const [couponStatus, setCouponStatus] = useState('');
    const [deliveryPrice, setDeliveryPrice] = useState(0);

    const {register, handleSubmit, control, formState, setValue, getValues, setError} = useForm({
        mode: "onBlur",
        resolver: yupResolver(PaySchema),
        defaultValues: {
            name: user?.name,
            phone: '',
            address: '',
            delivery_type: 2,
            pay_type: 1,
            city,
            street: "",
            house: "",
            entrance: "",
            apartment: "",
            coupon: '',
        },
    });

    const [toDelivery, setToDelivery] = useState({});

    const values = getValues();

    useEffect(() => {
        if (user) {
            setValue('name', user.name);
            setValue('phone', user.phone);
        }
    }, [user])


    useEffect(() => {
        setSum(cart?.total);
    }, [cart])

    const handleCheckCoupon = () => {
        cartApi.checkCoupon(coupon).then(response => {
            setSum(response.data.resultSum);
            setValue('coupon', coupon);
            setCouponStatus('success');
        }).catch(() => {
            setCouponStatus('error')
        });
    }

    const checkClientEmptyFields = () => {
        const clientErrors = [];

        if (values.delivery_type === DELIVERY_TYPE_PICKUP || values.delivery_type === DELIVERY_TYPE_ON_STORE) {

            if (!values.name) {
                clientErrors.push('Необходимо указать Имя');
            }
            if (!values.phone) {
                clientErrors.push('Необходимо указать номер телефона');
            }

        } else {

            if (!values.name) {
                clientErrors.push('Необходимо указать Имя');
            }
            if (!values.phone) {
                clientErrors.push('Необходимо указать номер телефона');
            }
            if (!isTg && !city) {
                clientErrors.push('Необходимо выбрать район');
                setError('city', {message: 'Выберите город'})
            }

            if (!values.street) {
                clientErrors.push('Необходимо указать улицу');
                setError('street', {message: 'Укажите улицу'})
            }
            if (!values.house) {
                clientErrors.push('Необходимо указать дом');
                setError('house', {message: 'Укажите дом'})
            }

        }

        if (clientErrors.length > 0) {
            openAlert(clientErrors[0], 'error')
            return false;
        }

        return true;
    };

    const handleSelectAddress = (to) => {
        setValue('street', to?.address || '');

        if (!to) {
            return;
        }
        setToDelivery(to);
        const config = {
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }

        axios
            .get(`/api/taxi/get-delivery-sum?destination_latitude=${to.lat}&destination_longitude=${to.lon}`, {headers: config.headers})
            .then(r => {
                setDeliveryPrice(r.data.sum);
            })

    }

    const onSubmit = async (data) => {
        if (!checkClientEmptyFields()) {
            return;
        }

        data.destination_longitude = toDelivery?.lon;
        data.destination_latitude = toDelivery?.lat;

        try {
            setIsLoading(true);
            const result = await cartApi.save(data);

            if (!data['pay_type']) {
                localStorage.setItem('token', new Date().getTime());
                dispatch(getCartAsync())
                window.location = '/success';
            } else {
                window.location = result.data.redirect_url;
            }

            // navigate('/success')

        } catch (e) {

        } finally {
            setIsLoading(false);
        }

    }

    if (!cart) {
        return null
    }


    return (
        <MainLayout disableCategories={true}>
            <Typography className={styles.title} variant={'h1'}>
                Оформление заказа
            </Typography>

            <div className={styles.container}>
                <div className={styles.form}>
                    <Typography className={styles.formTitle} variant={'h5'}>
                        Доставка
                    </Typography>

                    <FormControl className={styles.formControl}>
                        <TextField
                            {...register("name")}
                            className={styles.input}
                            label={<span className={styles.label}>Имя</span>}
                            variant="filled"
                            InputProps={{disableUnderline: true}}
                            error={!!formState?.errors?.name?.message}
                            helperText={formState?.errors?.name?.message}
                        />
                    </FormControl>

                    <FormControl className={styles.formControl}>
                        <TextField
                            {...register("phone")}
                            className={styles.input}
                            label={<span className={styles.label}>Телефон</span>}
                            variant="filled"
                            InputProps={{disableUnderline: true}}
                            error={!!formState?.errors?.name?.message}
                            helperText={formState?.errors?.name?.message}
                        />
                    </FormControl>
                    <div className={styles.line}>
                        <div>
                            <FormControl className={styles.formControl}>
                                <FormLabel className={styles.radioTitle} id="demo-controlled-radio-buttons-group">Способ
                                    доставки</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={`${values.delivery_type}`}
                                    onChange={(e) => {
                                        setValue('delivery_type', +e.target.value);
                                        setIsDelivery(+e.target.value === 2);
                                    }}
                                >
                                    <FormControlLabel value="2" control={<Radio/>} label="Доставка"/>
                                    <FormControlLabel value="1" control={<Radio/>} label="Самовывоз"/>
                                    <FormControlLabel value="4" control={<Radio/>} label="На месте"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={styles.formControl}>
                                <FormLabel className={styles.radioTitle} id="demo-controlled-radio-buttons-group">Способ
                                    оплаты</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    defaultValue={`${values.pay_type}`}
                                    onChange={(e) => {
                                        setValue('pay_type', +e.target.value);
                                    }}
                                >
                                    <FormControlLabel value="1" control={<Radio/>} label="Онлайн"/>
                                    <FormControlLabel value="0" control={<Radio/>} label="Наличными"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>

                    {isDelivery && (
                        <>
                            <FormControl>
                                <SelectCity/>
                            </FormControl>

                            <div className={styles.line}>
                                <div>
                                    <FormControl className={styles.formControl}>
                                        <SearchBar onSelect={handleSelectAddress} address={values.street}
                                                   error={!!formState?.errors?.street?.message}
                                                   helperText={formState?.errors?.street?.message}/>
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={styles.formControl}>
                                        <TextField
                                            {...register("house")}
                                            error={!!formState?.errors?.house?.message}
                                            helperText={formState?.errors?.house?.message}
                                            className={clsx(styles.input, styles.apartment)}
                                            label={<span className={styles.label}>Дом/Квартира</span>}
                                            variant="filled"
                                            InputProps={{disableUnderline: true}}
                                        />
                                    </FormControl>
                                </div>
                            </div>

                            <FormControl className={styles.formControl}>
                                <TextField
                                    {...register("comment")}
                                    error={!!formState?.errors?.comment?.message}
                                    helperText={formState?.errors?.comment?.message}
                                    className={styles.input}
                                    label={<span className={styles.label}>Комментарий к доставке</span>}
                                    variant="filled"
                                    InputProps={{disableUnderline: true}}
                                />
                            </FormControl>
                        </>
                    )}


                </div>

                <div className={styles.info}>
                    <Typography className={styles.formTitle} variant={'h5'}>
                        Ваш заказ
                    </Typography>

                    <div>
                        <div className={styles.item}>
                            <span>Товары</span>
                            <span>{cart?.total || 0}р</span>
                        </div>

                        <div className={styles.item}>
                            <span>Доставка</span>
                            <span>{deliveryPrice}р</span>
                        </div>

                        <div className={clsx(styles.item, styles.total)}>
                            <span>Итого</span>
                            <span>{sum + deliveryPrice}</span>
                        </div>


                        <FormControl className={clsx(styles.formControl, styles.btnContainer)}>
                            <OutlinedInput
                                onChange={e => setCoupon(e.target.value)}
                                placeholder={'Введике купон'}
                                className={styles.promoCode}
                                variant="filled"
                                endAdornment={<Button onClick={handleCheckCoupon}
                                                      className={styles.btn}>Применить</Button>}
                            />
                            <div className={styles.coupon}>
                                {couponStatus === 'success' && <span className={styles.success}>Купон применен</span>}
                                {couponStatus === 'error' && <span className={styles.error}>Купон не применен</span>}
                            </div>
                        </FormControl>

                        <div className={styles.payContainer}>
                            <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}
                                    className={styles.pay}>Оплатить</Button>
                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>
    )
}


function SearchBar({onSelect, address, error, helperText}) {
    const [data, setData] = useState([]);
    const [myTimeout, setMyTimeout] = useState(null);

    const handleSelect = option => {
        const item = data.find(item => item.value === option)
        onSelect(item);
    }

    useEffect(() => {
        get(address);
    }, [address])

    const get = (text) => {
        if (myTimeout) {
            clearTimeout(myTimeout);
        }
        const temp = setTimeout(() => {
            setData([]);
            const config = {
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
            axios.get('/api/taxi/find-addresses?address=' + text, {headers: config.headers})
                .then(response => {
                    const items = []

                    response.data.map((responseItem, idx) => {
                        if (idx <= 9) {
                            items.push(responseItem)
                        }

                    })

                    setData(items);
                })
                .catch(error => {
                    console.log(error.response)
                })
                .finally(() => {
                })
        }, 500)

        setMyTimeout(temp)
    }

    return (
        <Autocomplete
            onChange={(event, value) => {
                onSelect(value); // `value` содержит выбранную опцию
            }}
            options={data}
            getOptionLabel={(option) => {
                return option.value
            }}
            onInputChange={(event, newInputValue) => {
                get(newInputValue);
            }}
            renderInput={(params) => <TextField {...params} label={<span className={styles.label}>Улица</span>}
                                                variant="outlined" className={styles.input} error={error}
                                                helperText={helperText}/>}
        />
    );
}
