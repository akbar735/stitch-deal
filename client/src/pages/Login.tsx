import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography, Button, Link } from '@mui/material';
import styled from '@emotion/styled';

const Caption = styled('div')(() => ({
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center'
       
}))

const AlignVertically = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 'calc(100vh - 115px)'
}))
export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', margin:3, justifyContent: 'center' }}>
        <AlignVertically>
            <div>
                <FormControl sx={{ marginTop: 3, width: '100%' }} variant="outlined">
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
                <Link sx = {{marginBottom:3, display: 'block', float: 'right'}} href="#" variant="body2">
                    Forgot Password?
                </Link>
                <Button sx = {{width: '100%'}} variant = "contained">Login</Button>
            </div>
            <div>
                <Caption>
                    <Typography variant="caption" display="block">
                        Don't Have Account?
                    </Typography>
                    <Button variant= 'contained'>
                        Signup
                    </Button>
                </Caption>
                   
            </div>
        </AlignVertically>
    </Box>
  );
}
