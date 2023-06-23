import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import { useAuth } from 'redux/hooks';
import UserMenu from 'components/UserMenu/UserMenu';

function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <Toolbar>
      {isLoggedIn ? (
        <>
          <Button component={Link} to="/contacts" color="inherit">
            Contacts
          </Button>
          <UserMenu />
        </>
      ) : (
        <nav>
          <Button component={Link} to="/register" color="inherit">
            Register
          </Button>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        </nav>
      )}
    </Toolbar>
  );
}

export default Navigation;
