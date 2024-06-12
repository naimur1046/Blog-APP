import React from "react";

import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";

import About from "../../MainPages/About";
import Project from "../../MainPages/Project";
import DashBoard from "../../MainPages/DashBoard";
import HomePage from "../../MainPages/Home/HomePage";

const HandlePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default HandlePage;
