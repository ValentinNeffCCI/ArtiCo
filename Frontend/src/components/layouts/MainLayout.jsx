import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer..jsx";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <Fragment>
      <ToastContainer/>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
