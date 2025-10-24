import { AdminSidebar } from '../sidebars/AdminSideBar'
import { Outlet } from 'react-router-dom'
import styles from './styles/AdminLayout.module.css'

export const AdminLayout = () => {

    return (
      <div className={styles['admin']}>
        <AdminSidebar/>
        <Outlet/>
      </div>
    )
}
