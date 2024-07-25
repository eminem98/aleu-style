"use client";

import React, { useContext } from 'react';
import style from './Services.module.css';
import useIsMobile from '@/hooks/useIsMobile';
import useIsScrolled from '@/hooks/useIsScrolled';
import useOutsideClick from '@/hooks/useOutsideClick';
import { ComponentsStatusContext } from '@/context/componentsStatusContext';

const Services: React.FC = () => {
  const isMobile = useIsMobile();
  const isScrolled = useIsScrolled();
  const { isDrawerOpen, openDrawer, closeDrawer, isModalOpen, openModal, closeModal } = useContext(ComponentsStatusContext);
  const drawerRef = useOutsideClick<HTMLDivElement>(closeDrawer);

  return (
    <section className={style.services} id="services">
      <h1>SERVIZI</h1>
      <p>Servizi</p>

      {/* Example usage of hooks */}
      {isMobile && <p>Sei su un dispositivo mobile!</p>}
      {isScrolled && <p>Hai scollato la pagina!</p>}

      {/* Example usage of context */}
      <button onClick={openDrawer}>Apri Drawer</button>
      {isDrawerOpen && (
        <div ref={drawerRef} className={style.drawer}>
          <p>Contenuto del Drawer</p>
        </div>
      )}
      <button onClick={openModal}>Apri Modal</button>
      {isModalOpen && (
        <div className={style.modal}>
          <p>Contenuto del Modal</p>
          <button onClick={closeModal}>Chiudi Modal</button>
        </div>
      )}
    </section>
  );
};

export default Services;
