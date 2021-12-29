import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ManageOrder from './ManageOrder/ManageOrder';
import spinner from '../../../image/loading.gif';

const ManageOrders = () => {

    // loading state here 
    const [loading, setLoading] = useState(true);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch('https://safe-tundra-13022.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Manage Orders</Typography>
            <TableContainer component={Paper} sx={{ my: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'text.secondary' }}>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Payment</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            loading ? <img style={{ width: '12%', margin: ' 25px auto' }} src={spinner} alt="" /> :
                                orders.map(order => <ManageOrder
                                    key={order._id}
                                    orders={order}
                                />)
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
};

export default ManageOrders;