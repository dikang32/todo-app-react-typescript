import clsx from 'clsx'
import styles from './edit_task_modal.module.scss'

import { IState as Props } from '../../../pages/Home'
interface IProps {
    openEditModal: Props['openEditModal'],
    setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>
}
function ModalEditTask({openEditModal, setOpenEditModal}:IProps) {
    return (
        <div className={styles.container}>
            <div className={styles.overlay} onClick={()=>setOpenEditModal(false)}></div>
            <section className={styles.modal}>
                <div className={styles.modal__header}>
                    <h3 className={styles.modal__name}>Edit Task</h3>
                    <button className={styles['modal__button-cancel']} onClick={()=>setOpenEditModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.41 11.9999L17.71 7.70994C17.8983 7.52164 18.0041 7.26624 18.0041 6.99994C18.0041 6.73364 17.8983 6.47825 17.71 6.28994C17.5217 6.10164 17.2663 5.99585 17 5.99585C16.7337 5.99585 16.4783 6.10164 16.29 6.28994L12 10.5899L7.71 6.28994C7.5217 6.10164 7.2663 5.99585 7 5.99585C6.7337 5.99585 6.4783 6.10164 6.29 6.28994C6.1017 6.47825 5.99591 6.73364 5.99591 6.99994C5.99591 7.26624 6.1017 7.52164 6.29 7.70994L10.59 11.9999L6.29 16.2899C6.19627 16.3829 6.12188 16.4935 6.07111 16.6154C6.02034 16.7372 5.9942 16.8679 5.9942 16.9999C5.9942 17.132 6.02034 17.2627 6.07111 17.3845C6.12188 17.5064 6.19627 17.617 6.29 17.7099C6.38296 17.8037 6.49356 17.8781 6.61542 17.9288C6.73728 17.9796 6.86799 18.0057 7 18.0057C7.13201 18.0057 7.26272 17.9796 7.38458 17.9288C7.50644 17.8781 7.61704 17.8037 7.71 17.7099L12 13.4099L16.29 17.7099C16.383 17.8037 16.4936 17.8781 16.6154 17.9288C16.7373 17.9796 16.868 18.0057 17 18.0057C17.132 18.0057 17.2627 17.9796 17.3846 17.9288C17.5064 17.8781 17.617 17.8037 17.71 17.7099C17.8037 17.617 17.8781 17.5064 17.9289 17.3845C17.9797 17.2627 18.0058 17.132 18.0058 16.9999C18.0058 16.8679 17.9797 16.7372 17.9289 16.6154C17.8781 16.4935 17.8037 16.3829 17.71 16.2899L13.41 11.9999Z" fill="black" />
                    </svg>
                    </button>
                </div>
                <div className={styles.modal__input}>
                    <h5 className={styles.modal__text}>Task</h5>
                    <input type="text" placeholder='Task name'/>
                </div>
                <div className={styles.modal__priority}>
                    <h5 className={styles.modal__text}>Priority</h5>
                    <div className={styles["modal__group-button"]}>
                        <button className={clsx(styles.modal__button, styles["modal__button--high"])}>High</button>
                        <button className={clsx(styles.modal__button, styles["modal__button--medium"])}>Medium</button>
                        <button className={clsx(styles.modal__button, styles["modal__button--low"])}>Low</button>
                    </div>
                </div>
                <div className={styles.modal__output}>
                    <button className={styles.modal__primary}>Edit</button>
                    <button className={styles.modal__secondary} onClick={()=>setOpenEditModal(false)}>Cancel</button>
                </div>
            </section>
        </div>

    )
}

export default ModalEditTask