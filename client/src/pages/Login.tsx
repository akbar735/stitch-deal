import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {  Button, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";
import FlexContainer, { FlexCentered } from '../components/FlexContainer';
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
export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate()
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', margin:1, justifyContent: 'center' }}>
        <NarrowDiv>
            <FlexCentered>
                <div>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                        </Avatar>
                    <Typography sx = {{ display: 'inline'}} component="h1" variant="h5">
                        Sign in
                    </Typography>
                </div>
            </FlexCentered>
            <div>
                <FormControl sx={{ mt: 3, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-email"
                    type={'email'}
                    label="Email"
                />
                </FormControl>
                <FormControl sx={{ mt: 3, mb: 1, width: '100%' }} variant="outlined">
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
                <FlexContainer sx = {{ mt:1, mb:3 }}>
                    <Link sx = {{ cursor: 'pointer'}} onClick={() => {
                    // navigate('/register')
                        }}  variant= "body2">
                        Forgot Password?
                    </Link>
                    <Link sx = {{ cursor: 'pointer'}} onClick={() =>  navigate('/register') } variant= "body2">
                        Don't Have Account? SignUp
                    </Link>
                </FlexContainer>
                <Button  sx = {{width: '100%'}} variant = "contained">Login</Button>
            </div>
        </NarrowDiv>
    </Box>
  );
}
