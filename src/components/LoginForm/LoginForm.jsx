import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { EmailOutlined, Visibility, VisibilityOff } from '@mui/icons-material';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = evt => {
    evt.preventDefault();
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="on">
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="user-email">Email</InputLabel>
          <OutlinedInput
            id="user-email"
            type="email"
            name="email"
            startAdornment={
              <InputAdornment position="start">
                <EmailOutlined />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="user-password">Password</InputLabel>
          <OutlinedInput
            id="user-password"
            name="password"
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
        <Button type="submit" variant="contained" sx={{ mt: 2, width: 150 }}>
          Log In
        </Button>
      </form>
    </Box>
  );
};
