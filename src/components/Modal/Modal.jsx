import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isModalOpen, onClose, children }) => {
  if (!isModalOpen) return null;
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
