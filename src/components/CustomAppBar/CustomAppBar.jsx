import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ContactsIcon from '@mui/icons-material/Contacts';

import Navigation from 'components/Navigation/Navigation';

function CustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <ContactsIcon sx={{ mr: 1 }} />
            Phonebook
          </Typography>
          <Navigation />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;
