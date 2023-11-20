import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { LayoutDivContainer } from "../style/Container";


function Layout() {
  return (
    <LayoutDivContainer>
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutDivContainer>
  );
}

export default Layout;
