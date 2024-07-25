export interface ComponentsStatusContextType {
  isDrawerOpen: boolean;
  isModalOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  openModal: () => void;
  closeModal: () => void;
}