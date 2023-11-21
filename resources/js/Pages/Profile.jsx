import {Head} from "@inertiajs/inertia-react";
import {MainLayout} from "@/src/layouts/MainLayout";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useState} from "react";

/**
 * [
 *     {
 *         "id": 1,
 *         "name": "Admin",
 *         "phone": "23123",
 *         "address": null,
 *         "city": null,
 *         "home": null,
 *         "floor": null,
 *         "porch": null,
 *         "time_delivery": "19:44:09",
 *         "date_delivery": "2021-10-23",
 *         "delivery_type": "Самовывоз",
 *         "organization": null,
 *         "pay_type": "Наличными",
 *         "total": 159,
 *         "comment": null,
 *         "status": "Не оплачен",
 *         "house": null,
 *         "apartment": null,
 *         "entrance": null,
 *         "intercom": null,
 *         "building": null,
 *         "street": null,
 *         "user": "Movsar",
 *         "delivery_cost": 0,
 *         "coupon": "",
 *         "foodProperties": [
 *             {
 *                 "id": 7,
 *                 "name": "Чечевичный Крем суп",
 *                 "full": null,
 *                 "price": 159,
 *                 "img": "http://localhost/storage/foods/XPxcn347DqvwIgpWNJqu5ijal49iccN9bM7FETtq.png",
 *                 "quantity": 1,
 *                 "sum": 159,
 *                 "food_id": 2,
 *                 "foodPropertyId": 2,
 *                 "options": []
 *             }
 *         ]
 *     },
 *     {
 *         "id": 2,
 *         "name": "Admin",
 *         "phone": "ewf",
 *         "address": null,
 *         "city": null,
 *         "home": null,
 *         "floor": null,
 *         "porch": null,
 *         "time_delivery": "19:45:27",
 *         "date_delivery": "2021-10-23",
 *         "delivery_type": "Самовывоз",
 *         "organization": null,
 *         "pay_type": "Наличными",
 *         "total": 190,
 *         "comment": null,
 *         "status": "Не оплачен",
 *         "house": null,
 *         "apartment": null,
 *         "entrance": null,
 *         "intercom": null,
 *         "building": null,
 *         "street": null,
 *         "user": "Movsar",
 *         "delivery_cost": 0,
 *         "coupon": "",
 *         "foodProperties": [
 *             {
 *                 "id": 8,
 *                 "name": "Маргарита (Маленькая)",
 *                 "full": null,
 *                 "price": 190,
 *                 "img": "http://localhost/storage/foods/WTy3alBv7rcwVLp64ZGqLqCenAaAixDrtwXaygMy.png",
 *                 "quantity": 1,
 *                 "sum": 190,
 *                 "food_id": 23,
 *                 "foodPropertyId": 29,
 *                 "options": []
 *             }
 *         ]
 *     },
 *     {
 *         "id": 3,
 *         "name": "Admin",
 *         "phone": "ewf",
 *         "address": null,
 *         "city": null,
 *         "home": null,
 *         "floor": null,
 *         "porch": null,
 *         "time_delivery": "19:47:24",
 *         "date_delivery": "2021-10-23",
 *         "delivery_type": "Самовывоз",
 *         "organization": null,
 *         "pay_type": "Наличными",
 *         "total": 190,
 *         "comment": null,
 *         "status": "Не оплачен",
 *         "house": null,
 *         "apartment": null,
 *         "entrance": null,
 *         "intercom": null,
 *         "building": null,
 *         "street": null,
 *         "user": "Movsar",
 *         "delivery_cost": 0,
 *         "coupon": "",
 *         "foodProperties": [
 *             {
 *                 "id": 9,
 *                 "name": "Маргарита (Маленькая)",
 *                 "full": null,
 *                 "price": 190,
 *                 "img": "http://localhost/storage/foods/WTy3alBv7rcwVLp64ZGqLqCenAaAixDrtwXaygMy.png",
 *                 "quantity": 1,
 *                 "sum": 190,
 *                 "food_id": 23,
 *                 "foodPropertyId": 29,
 *                 "options": []
 *             }
 *         ]
 *     }
 * ]
 * @param orders
 * @returns {JSX.Element}
 * @constructor
 */

function Row({ row }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.date_delivery}
                </TableCell>

                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">{row.delivery_type}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>

                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Название</TableCell>
                                        <TableCell>Кол-во</TableCell>
                                        <TableCell align="right">Цена</TableCell>
                                        <TableCell align="right">Сумма</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.foodProperties.map((historyRow) => (
                                        <TableRow key={historyRow.id}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.name}
                                            </TableCell>
                                            <TableCell>{historyRow.quantity}</TableCell>
                                            <TableCell align="right">{historyRow.price}</TableCell>
                                            <TableCell align="right">
                                                {historyRow.sum}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function Profile({ orders }) {
    console.log({ orders })

    return (
        <>
            <Head title={'Мой профиль'}/>
            <MainLayout disableCategories={true}>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Дата</TableCell>
                                <TableCell align="right">Сумма</TableCell>
                                <TableCell align="right">Способ доставки</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </MainLayout>
        </>
    )
}
