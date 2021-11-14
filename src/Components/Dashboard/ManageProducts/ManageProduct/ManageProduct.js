import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';
import swal from 'sweetalert';

const ManageProduct = ({ products }) => {

    const { name, img, price, _id } = products;

    const handleProduct = id => {
        const procced = window.confirm('Are you sure you want DELETE ?')

        if (procced) {
            fetch(`http://localhost:5000/drone/${id}`, {
                method: 'DELETE',
                header: { 'content-type': 'application/json' }
            })
                .then(response => response.json())
                .then(result => {
                    if (result.deletedCount) {
                        swal({
                            title: 'Order Deleted!',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        setTimeout(() => {
                            window.location.reload();
                        }, 1200);
                    }
                })
        }
    }

    return (
        <>
            <TableRow>
                <TableCell style={{ width: '25%' }} align="left"> <img style={{ width: '50%' }} src={img} alt="" /> </TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{price}</TableCell>
                <TableCell align="left"> <Button sx={{ color: 'error.main', bgcolor: 'text.primary' }} onClick={() => handleProduct(_id)}><DeleteIcon /> </Button> </TableCell>
            </TableRow >
        </>
    );
};

export default ManageProduct;