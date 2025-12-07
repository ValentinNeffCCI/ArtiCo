import { AdminSidebar } from "../sidebars/AdminSideBar";
import { Outlet } from "react-router-dom";
import styles from "./styles/AdminLayout.module.css";
import { ToastContainer } from "react-toastify";

export const AdminLayout = () => {
  return (
    <div className={styles["admin"]}>
      <AdminSidebar />
      <Outlet />
    </div>
  );
};
