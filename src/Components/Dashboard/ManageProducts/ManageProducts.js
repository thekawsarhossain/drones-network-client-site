import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct/ManageProduct';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import spinner from '../../../image/loading.gif';

const ManageProducts = () => {

    // loading states here 
    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch('https://safe-tundra-13022.herokuapp.com/drones')
            .then(response => response.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Manage Products</Typography>
            <TableContainer component={Paper} sx={{ my: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'text.secondary' }}>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Added By</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            loading ? <img style={{ width: '12%', margin: ' 25px auto' }} src={spinner} alt="" /> :
                                products.map(product => <ManageProduct
                                    key={product._id}
                                    products={product}
                                />)
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
};

export default ManageProducts;