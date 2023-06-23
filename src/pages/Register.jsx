import { Typography } from '@mui/material';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

export default function Register() {
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
        User registration
      </Typography>
      <RegistrationForm />
    </>
  );
}
