import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import { Typography } from '@mui/material';
import spinner from '../../../image/loading.gif';


const MyOrders = () => {

    // loading states here
    const [loading, setLoading] = useState(true);

    const { user } = useAuth();

    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch(`https://safe-tundra-13022.herokuapp.com/orders/${user.email}`)
            .then(response => response.json())
            .then(data => setOrderData(data))
            .finally(() => setLoading(false))
    }, [user.email])

    return (
        <>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Booked Orders</Typography>
            <TableContainer component={Paper} sx={{ my: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'text.secondary' }}>
                            <TableCell>Name</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            loading ? <img style={{ width: '12%', margin: ' 25px auto' }} src={spinner} alt="" /> :
                                orderData.map(singleData => <MyOrder
                                    key={singleData._id}
                                    orderData={singleData}
                                />)
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
};

export default MyOrders;
