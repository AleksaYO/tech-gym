import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import RegisterBlock from "../Register/Register";
import Footer from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <RegisterBlock />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
