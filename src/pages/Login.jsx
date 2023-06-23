import { Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        User login
      </Typography>
      <LoginForm />
    </>
  );
}
