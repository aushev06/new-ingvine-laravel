import React, {useEffect, useState} from 'react';
import {Head} from '@inertiajs/inertia-react';
import {Result} from '@/src/components/Result'
import {MainLayout} from "@/src/layouts/MainLayout";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {useAlert} from "@/src/hooks/useAlert";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import styles from "@/src/pages/Pay/Pay.module.scss";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Taxi(props) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [coast, setCoast] = React.useState(null);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {openAlert} = useAlert();

    const address = `${props.model.street} ${props.model.house}`;
    const [phone, setPhone] = React.useState(localStorage.getItem('phone') || '')

    const from = {
        "lat": 43.171146,
        "lon": 44.805809,
        "kind": "point",
        "city": "",
        "address": "AlikeHome (МАГАС)",
        "value": "AlikeHome (МАГАС)"
    };
    const [to, setTo] = useState(null);


    useEffect(() => {
        orderCoast();
    }, [from, to])


    const handleSelectTo = (item) => {
        setTo(item);
    }

    const createOrder = () => {
        const formData = new FormData;
        formData.append('test_field1', from.address)
        formData.append('source_lat', from.lat)
        formData.append('source_lon', from.lon)
        formData.append('test_field2', to.address)
        formData.append('destination_lat', to.lat)
        formData.append('destination_lon', to.lon)
        // formData.append('source_time', '24.03.2020 17:40')
        formData.append('source_time_iso8601', new Date().toISOString())
        formData.append('phone', phone)
        formData.append('test_field3', '')
        formData.append('comment', 'Курьерская доставка')
        formData.append('address_source', from.address)
        formData.append('address_destination', to.address)
        formData.append('name', 'Ингвайн кафе')
        formData.append('auth_token', props.settings.taxi_token)

        //
        axios.post("https://websites.platform.taximaster.ru/v2/order", formData, {
            "headers": {
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mod": "cors",
                "Sec-Fetch-Site": "same-origin",
                "X-Site-VtmId": "134",
                "X-Site-VtmGroupId": "56",
                "Accept": "*/*"
            },
        })
            .then(response => {

                localStorage.setItem('phone', phone);
                handleClose();
                openAlert('Заказ создан');

            })
            .catch(error => {
                if (error.response) {
                    Object.values(error.response.data.errors).map(errorField => {
                        Object.values(errorField).map(errors => {
                            alert(errors.join('\n'))
                        })
                    })
                }

            })
    }

    const orderCoast = () => {
        if (true === (from === null || to === null)) {
            return
        }
        const formData = new FormData;
        formData.append('source_lat', from.lat)
        formData.append('source_lon', from.lon)
        formData.append('destination_lat', to.lat)
        formData.append('destination_lon', to.lon)
        formData.append('source_time_iso8601', new Date().toISOString())
        axios.defaults.withCredentials = false;
        axios.post("https://websites.platform.taximaster.ru/v2/calc_order_cost", formData, {
            "headers": {
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mod": "cors",
                "Sec-Fetch-Site": "same-origin",
                "X-Site-VtmId": "134",
                "X-Site-VtmGroupId": "56",
                "Accept": "*/*"
            },
        })
            .then(response => {

                setCoast(response.data)
            })
    };

    return (
        <>
            <Head title={'Оплата'}/>
            <MainLayout disableCategories={true}>
                <div style={{marginBottom: 10}}>
                    <FormControl className={styles.formControl}>
                        <TextField
                            onChange={e => setPhone(e.target.value)}
                            placeholder={'+7(___)___-____'}
                            defaultValue={phone}
                            className={styles.input}
                            label={<span className={styles.label}>Телефон</span>}
                            variant="filled"
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>
                </div>

                <SearchBar address={address} onSelect={handleSelectTo}/>
                <br/>
                <Button style={{backgroundColor: '#EB3800'}} onClick={handleClickOpen} variant="contained"
                        color="secondary">
                    Создать заказ
                </Button>

                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        Вы действительно хотите создать заказ?
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div>
                                Откуда: {from?.value}
                            </div>

                            <div>
                                Куда: {to?.value}
                            </div>

                            <div>
                                Ваш номер телефона: {phone}
                            </div>

                            <div>
                                Примерная стоимость: {coast}
                            </div>


                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Отменить
                        </Button>
                        <Button onClick={createOrder} autoFocus>
                            Да, создать
                        </Button>
                    </DialogActions>
                </Dialog>

            </MainLayout>
        </>
    );
}


function SearchBar({onSelect, address}) {
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
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mod": "cors",
                    "Sec-Fetch-Site": "same-origin",
                    "X-Site-VtmId": "134",
                    "X-Site-VtmGroupId": "56",
                    "Accept": "*/*"
                },
            }
            axios.defaults.withCredentials = false;
            axios.get('https://websites.platform.taximaster.ru/v2/find_address?needle=' + text, {headers: config.headers})
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
            renderInput={(params) => <TextField {...params} label="Куда доставить" variant="outlined"/>}
        />
    );
}
