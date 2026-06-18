import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer..jsx";
import { PositionProvider } from "../../hooks/usePosition.jsx";

const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <PositionProvider>
        <Outlet />
      </PositionProvider>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
