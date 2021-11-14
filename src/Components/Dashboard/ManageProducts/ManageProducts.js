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

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://safe-tundra-13022.herokuapp.com/drones')
            .then(response => response.json())
            .then(data => setProducts(data))
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
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
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