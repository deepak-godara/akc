import React from "react";
import Header from "@components/CommonDashboard/Header";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";
function View() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default View;
