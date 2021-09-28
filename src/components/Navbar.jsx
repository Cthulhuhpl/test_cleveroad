import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = ({ history }) => {
  const token = localStorage.getItem('token');
  const logout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={'flex-end'}>
          {token ? (
            <Button onClick={() => logout()} color={'inherit'}>
              Logout
            </Button>
          ) : (
            <NavLink to={'/login'}>
              <Button color={'inherit'}>Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default  withRouter(Navbar);
