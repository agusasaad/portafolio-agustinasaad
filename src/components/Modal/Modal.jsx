import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isModalOpen, onClose, children }) => {
  if (!isModalOpen) return null;
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
