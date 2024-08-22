import { useState } from "react";
import styles from './modal.module.scss';


const Modal = ({children, isOpen, onClose}) => {
    if(!isOpen) return null;

    return(
        <div className={styles.modalWrapper} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export const ModalDemo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return(
        <div className={styles.demo}>
            <button onClick={toggleModal} className={styles.openButton}>Open Modal</button>

            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <h2>Hello, this is my modal content</h2>
                <p>idk paragraph</p>
            </Modal>
        </div>
    )
}