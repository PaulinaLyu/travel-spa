import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CataloguePage from "../pages/CataloguePage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalogue" element={<CataloguePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
