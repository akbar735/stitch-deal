import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {  Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const NarrowDiv = styled('div')(({ theme }) => ({
    width: '30%',
    minWidth: 350,
    [theme.breakpoints.between('sm','md')]: {
        width: '80%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        minWidth: 150,
    }
}))
type AddProductProps = {
    productId?: string
}
export default function AddProduct({productId, ...props}: AddProductProps) {

  return (
    <Box sx={{ display: 'flex', margin:1, justifyContent: 'center' }}>
        <NarrowDiv>
            <div>
                <FormControl sx={{ mt: 3, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-product-name">Product Name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-email"
                        type={'product-name'}
                        label="Product Name"
                    />
                </FormControl>
                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-img-url">Product Image URL</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-img-url"
                        type={'text'}
                        label="Product Image URL"
                    />
                </FormControl>
                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-description">Product Description</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-description"
                        type={'text'}
                        label="Product Description"
                        multiline
                        maxRows={7}
                    />
                </FormControl> 
                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <TextField
                        id="outlined-price"
                        label="Product Price"
                        type="number"
                    />
                </FormControl>
                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <TextField
                        id="outlined-unit"
                        label="Product Unit"
                        type="number"
                    />
                </FormControl>
                <Button  sx = {{width: '100%',mt: 2}} variant = "contained">{productId ? 'Save This Product': 'Add This Product'}</Button>
            </div>
        </NarrowDiv>
    </Box>
  );
}
