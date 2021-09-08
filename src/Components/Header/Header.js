import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, AppBar } from '@material-ui/core';
import styles from './Header.module.css';

const Header = () => (
  <AppBar color="default" className={styles.header}>
    <nav className={styles.menu}>
      <NavLink to="/" end className={styles.button}>
        <Button variant="contained" color="primary" size="large">
          Início
        </Button>
      </NavLink>

      <NavLink to="/piadas" className={styles.button}>
        <Button variant="contained" color="default" size="large">
          Piadas
        </Button>
      </NavLink>

      <NavLink to="/sobre">
        <Button variant="contained" color="default" size="large">
          Sobre
        </Button>
      </NavLink>
    </nav>
  </AppBar>
);

export default Header;
