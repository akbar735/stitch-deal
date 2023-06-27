import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {  Button } from '@mui/material';
import  MenuItem  from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const NarrowDiv = styled('div')(({ theme }) => ({
    width: '30%',
    [theme.breakpoints.between('sm','md')]: {
        width: '80%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
}))
export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [role, setRole] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', margin:1, justifyContent: 'center' }}>
            <NarrowDiv>
                <FormControl sx={{ marginTop: 3, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-name">Full Name</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={'text'}
                    label="Full Name"
                    />
                </FormControl>
                <FormControl sx={{ marginTop: 3, marginBottom: 1, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'email'}
                        label="Email"
                    />
                </FormControl>
                <FormControl sx={{ marginTop: 3, marginBottom: 1, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>

                <FormControl sx={{ marginTop: 3, marginBottom: 1, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="confirm-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    label="Confirm Password"
                />
                </FormControl>
                <FormControl  sx={{ marginTop: 3, marginBottom: 3, width: '100%' }}>
                    <InputLabel id="demo-simple-select-role">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-role"
                            id="demo-simple-select-role"
                            value={role}
                            label="Role"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Seller</MenuItem>
                            <MenuItem value={20}>Buyer</MenuItem>
                        </Select>
                    </FormControl>
                <Button sx = {{width: '100%'}} variant = "contained">SignUp</Button>
            </NarrowDiv>
    </Box>
  );
}
