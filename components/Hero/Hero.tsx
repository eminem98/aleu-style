"use client";

import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <h1>Benvenuti su Aleu Style</h1>
      <p>Creiamo siti web professionali per far crescere il tuo business.</p>
    </section>
  );
};

export default Hero;
