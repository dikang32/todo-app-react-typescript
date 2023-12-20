import { useState } from 'react'
import ModalAddTask from '../../components/home/ModalAddTask'
import ModalDeleteTask from '../../components/home/ModalDeleteTask'
import ModalEditTask from '../../components/home/ModalEditTask'
import styles from './home.module.scss'

export interface IState {
  openAddModal: boolean,
  openEditModal: boolean,
  openDeleteModal: boolean
}

function Home() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  return (
    <>
      {openAddModal && <ModalAddTask openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} ></ModalAddTask>}
      {openEditModal && <ModalEditTask openEditModal={openEditModal} setOpenEditModal={setOpenEditModal}></ModalEditTask>}
      {openDeleteModal && <ModalDeleteTask openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal}></ModalDeleteTask>}
      <header className={styles.header}>
        <h3 className={styles.header__name}>Task List</h3>
        <button className={styles.header__button} onClick={() => setOpenAddModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <g clip-path="url(#clip0_0_91)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99327 0.883379C7.93551 0.38604 7.51284 0 7 0C6.44772 0 6 0.447715 6 1V6H1L0.883379 6.00673C0.38604 6.06449 0 6.48716 0 7C0 7.55228 0.447715 8 1 8H6V13L6.00673 13.1166C6.06449 13.614 6.48716 14 7 14C7.55228 14 8 13.5523 8 13V8H13L13.1166 7.99327C13.614 7.93551 14 7.51284 14 7C14 6.44772 13.5523 6 13 6H8V1L7.99327 0.883379Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_0_91">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className={styles.header__text}>
            Add Task
          </p>
        </button>
      </header>
      <div className={styles.container}>
        <div className={styles.list}>
          <div className={styles.list__item}>
            <div className={styles.list__title}>
              <h5>Task</h5>
              <p>Go to gym</p>
            </div>
            <div className={styles.list__priority}>
              <h5>Priority</h5>
              <p>High</p>
            </div>
            <div className={styles.list__progress}>
              <p>To do</p>
            </div>
            <div className={styles.list__circle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <g clip-path="url(#clip0_374_71)">
                  <path d="M23 12.5C23 6.42487 18.0751 1.5 12 1.5C5.92487 1.5 1 6.42487 1 12.5C1 18.5751 5.92487 23.5 12 23.5C18.0751 23.5 23 18.5751 23 12.5Z" stroke="#91929E" stroke-width="2" />
                </g>
                <defs>
                  <clipPath id="clip0_374_71">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <button className={styles["list__edit-button"]} onClick={() => { setOpenEditModal(true) }}>
              {/* <button className={styles.editButoon}> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <g clip-path="url(#clip0_374_74)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8787 1.37868L6.29289 9.96447C6.10536 10.152 6 10.4064 6 10.6716V14.6716C6 15.2239 6.44772 15.6716 7 15.6716H11C11.2652 15.6716 11.5196 15.5662 11.7071 15.3787L20.2929 6.79289C21.4645 5.62132 21.4645 3.72183 20.2929 2.55025L19.1213 1.37868C17.9497 0.207107 16.0503 0.207107 14.8787 1.37868ZM18.8787 3.96447L18.9619 4.05867C19.2669 4.45096 19.2392 5.0182 18.8787 5.37868L10.584 13.6716H8V11.0856L16.2929 2.79289C16.6834 2.40237 17.3166 2.40237 17.7071 2.79289L18.8787 3.96447ZM10.0308 2.67157C10.0308 2.11929 9.5831 1.67157 9.03081 1.67157H5L4.78311 1.67619C2.12231 1.78975 0 3.98282 0 6.67157V16.6716L0.00461951 16.8885C0.118182 19.5493 2.31125 21.6716 5 21.6716H15L15.2169 21.667C17.8777 21.5534 20 19.3603 20 16.6716V11.7533L19.9933 11.6366C19.9355 11.1393 19.5128 10.7533 19 10.7533C18.4477 10.7533 18 11.201 18 11.7533V16.6716L17.9949 16.8478C17.9037 18.4227 16.5977 19.6716 15 19.6716H5L4.82373 19.6665C3.24892 19.5752 2 18.2693 2 16.6716V6.67157L2.00509 6.4953C2.09634 4.92049 3.40232 3.67157 5 3.67157H9.03081L9.14743 3.66485C9.64477 3.60708 10.0308 3.18441 10.0308 2.67157Z" fill="#0A1629" />
                </g>
                <defs>
                  <clipPath id="clip0_374_74">
                    <rect width="22" height="22" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              {/* </button> */}
            </button>
            <button className={styles["list__delete-button"]} onClick={() => { setOpenDeleteModal(true) }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
                <g clip-path="url(#clip0_374_76)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.5C13.5977 0.5 14.9037 1.74892 14.9949 3.32373L15 3.5V4.5H17H19C19.5523 4.5 20 4.94772 20 5.5C20 6.01284 19.614 6.43551 19.1166 6.49327L19 6.5H18V19.5C18 21.0977 16.7511 22.4037 15.1763 22.4949L15 22.5H5C3.40232 22.5 2.09634 21.2511 2.00509 19.6763L2 19.5V6.5H1C0.447715 6.5 0 6.05228 0 5.5C0 4.98716 0.38604 4.56449 0.883379 4.50673L1 4.5H3H5V3.5C5 1.90232 6.24892 0.596339 7.82373 0.505093L8 0.5H12ZM4 6.5V19.5C4 20.0128 4.38604 20.4355 4.88338 20.4933L5 20.5H15C15.5128 20.5 15.9355 20.114 15.9933 19.6166L16 19.5V6.5H14H6H4ZM13 4.5H7V3.5L7.00673 3.38338C7.06449 2.88604 7.48716 2.5 8 2.5H12L12.1166 2.50673C12.614 2.56449 13 2.98716 13 3.5V4.5ZM8 9.5C8.51284 9.5 8.93551 9.88604 8.99327 10.3834L9 10.5V16.5C9 17.0523 8.55229 17.5 8 17.5C7.48716 17.5 7.06449 17.114 7.00673 16.6166L7 16.5V10.5C7 9.94771 7.44772 9.5 8 9.5ZM12.9933 10.3834C12.9355 9.88604 12.5128 9.5 12 9.5C11.4477 9.5 11 9.94771 11 10.5V16.5L11.0067 16.6166C11.0645 17.114 11.4872 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V10.5L12.9933 10.3834Z" fill="#F65160" />
                </g>
                <defs>
                  <clipPath id="clip0_374_76">
                    <rect width="20" height="22" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home