"use client";

import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Aleu Style</h1>
      <nav className={styles.nav}>
        <a href="#hero">Home</a>
        <a href="#services">Servizi</a>
        <a href="#about">Chi Siamo</a>
        <a href="#contact">Contatti</a>
      </nav>
    </header>
  );
};

export default Header;
