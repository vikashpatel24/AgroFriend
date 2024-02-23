import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LayoutNew from "./LayoutNew";

const Layout = () => {
  return (
    <div>
    <LayoutNew>

      <Navbar />
      <Outlet />
      <Footer />
    </LayoutNew>
    </div>
  );
};

export default Layout;
