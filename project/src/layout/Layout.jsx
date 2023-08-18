import React from "react";
import Header from "../components/Header/index";
import Navbar from "../components/Navbar/index";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
