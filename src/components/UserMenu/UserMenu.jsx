import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/hooks';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = evt => {
    setAnchorElUser(evt.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    dispatch(logOut());
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Current user">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
          <AccountCircle />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={() => setAnchorElUser(null)}
      >
        <Typography variant="h6" sx={{ p: '0 10px' }}>
          {user.email}
        </Typography>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default UserMenu;
