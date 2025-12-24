import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer..jsx";
import { ToastContainer, Slide } from "react-toastify";
import usePosition from "../../hooks/usePosition.jsx";

const MainLayout = () => {
  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}/>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
