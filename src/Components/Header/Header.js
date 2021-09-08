import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, AppBar } from '@material-ui/core';
import styles from './Header.module.css';

const Header = () => (
  <AppBar color="default" className={styles.header}>
    <nav className={styles.menu}>
      <Button variant="contained" color="primary">
        <NavLink to="/" end>
          Início
        </NavLink>
      </Button>

      <Button variant="contained" color="default">
        <NavLink to="/piadas">Piadas</NavLink>
      </Button>

      <Button variant="contained" color="default">
        <NavLink to="/sobre">Sobre</NavLink>
      </Button>
    </nav>
  </AppBar>
);

export default Header;
