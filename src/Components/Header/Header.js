import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, AppBar, useMediaQuery } from '@material-ui/core';
import styles from './Header.module.css';

const Header = () => {
  const matches = useMediaQuery('(max-width: 23.75rem)');

  return (
    <AppBar color="default" className={styles.header}>
      <nav className={styles.menu}>
        <NavLink to="/" end className={styles.button}>
          <Button variant="contained" size={matches ? 'small' : 'large'}>
            Início
          </Button>
        </NavLink>

        <NavLink to="/extras" className={styles.button}>
          <Button
            variant="contained"
            color="default"
            size={matches ? 'small' : 'large'}
          >
            Extras
          </Button>
        </NavLink>

        <NavLink to="/sobre">
          <Button
            variant="contained"
            color="default"
            size={matches ? 'small' : 'large'}
          >
            Sobre
          </Button>
        </NavLink>
      </nav>
    </AppBar>
  );
};

export default Header;
