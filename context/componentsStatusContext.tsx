"use client";

import React from 'react';
import { ComponentsStatusContextType } from '@/types/components-status';

export const ComponentsStatusContext = React.createContext<ComponentsStatusContextType | null>(null);

const ComponentsStatusProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <ComponentsStatusContext.Provider
      value={{ isDrawerOpen, isModalOpen, openDrawer, closeDrawer, openModal, closeModal }}
    >
      {children}
    </ComponentsStatusContext.Provider>
  );
};

export default ComponentsStatusProvider;
