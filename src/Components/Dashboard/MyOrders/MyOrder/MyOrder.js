import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';
import swal from 'sweetalert';

const MyOrder = ({ orderData }) => {
    const { name, number, address, productPrice, productName, date, status, _id } = orderData;
    console.log(orderData)

    //handle order to delete oreder 
    const handleOrder = id => {
        const proceed = window.confirm('Are you sure you want DELETE');
        if (proceed) {
            fetch(`https://safe-tundra-13022.herokuapp.com/order/${id}`, {
                method: 'DELETE',
                haeders: { 'content-type': 'application/json' }
            })
                .then(response => response.json())
                .then(result => {
                    if (result.deletedCount) {
                        swal({
                            title: 'Order Deleted!',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                    setTimeout(() => {
                        window.location.reload();
                    }, 1200);
                })
        }
    }

    return (
        <>
            {orderData ? <TableRow>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{number}</TableCell>
                <TableCell align="left">{address}</TableCell>
                <TableCell align="left">{productName}</TableCell>
                <TableCell align="left">{productPrice}$</TableCell>
                <TableCell align="left">{date}</TableCell>
                <TableCell align="left">{status}</TableCell>
                <TableCell align="left"><Button onClick={() => handleOrder(_id)} sx={{ color: 'error.main' }}><DeleteIcon /> </Button></TableCell>
            </TableRow> : <h2>You have no orders</h2>}

        </>
    );
};

export default MyOrder;