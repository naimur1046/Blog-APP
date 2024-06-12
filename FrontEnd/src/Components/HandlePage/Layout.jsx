import React from "react";

import Header from "../AdditionalComponent/Header";
import Footer from "../AdditionalComponent/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
