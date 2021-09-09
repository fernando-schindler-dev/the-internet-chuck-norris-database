import React from 'react';
import { AppBar } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './Footer.module.css';

const Footer = () => (
  <AppBar color="default" className={styles.footer} position="fixed">
    <div className={styles.information}>
      <p>Fernando Schindler © 2021</p>
      <p>Alguns direitos reservados</p>
    </div>

    <div className={styles.socialNetworks}>
      <a href="https://www.linkedin.com/in/fernando-schindler/" target="_blank">
        <LinkedInIcon className={styles.linkedIn} />
      </a>
      <a href="https://github.com/fernando-schindler-dev" target="_blank">
        <GitHubIcon className={styles.gitHub} />
      </a>
    </div>
  </AppBar>
);
export default Footer;
