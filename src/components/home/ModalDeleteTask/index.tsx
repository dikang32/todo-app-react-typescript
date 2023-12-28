import styles from './delete_task_modal.module.scss'

import { IState as Props } from '../../../pages/Home'
interface IProps {
  openDeleteModal: Props['openDeleteModal'],
  setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
  // handleConfirmDelete: Props['handleConfirmDelete']
  selectTaskIndex: Props['selectTaskIndex']
  setSelectTaskIndex: React.Dispatch<React.SetStateAction<number | null>>
  taskList: Props['taskList']
  setTaskList: React.Dispatch<React.SetStateAction<Props['taskList']>>
}

function ModalDeleteTask({ openDeleteModal, setOpenDeleteModal, selectTaskIndex, setSelectTaskIndex, taskList, setTaskList }: IProps) {
  const handleConfirmDelete = () => {
    if (selectTaskIndex !== null) {
      const newArray = taskList.filter((task, index) => index !== selectTaskIndex);
      setTaskList(newArray);
      setOpenDeleteModal(false);
      setSelectTaskIndex(null);
      return
    }
  }
  return (

    <div className={styles.container}>
      <div className={styles.overlay} onClick={() => { setOpenDeleteModal(false) }}></div>
      <section className={styles.modal}>
        <p className={styles.modal__text}>Are you sure you want to delete this task?</p>
        <div className={styles.modal__output}>
          <button className={styles.modal__primary} onClick={handleConfirmDelete}>Delete</button>
          <button className={styles.modal__secondary} onClick={() => { setOpenDeleteModal(false) }}>Cancel</button>
        </div>
      </section>
    </div>
  )
}

export default ModalDeleteTask