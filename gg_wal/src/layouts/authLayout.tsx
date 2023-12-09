import React, { useEffect } from "react";
import CustomAppbar from "../components/CustomAppbar";
import { Outlet } from "react-router-dom";
import { web3AuthInstance } from "../lib/utils";

export const AuthLayout = () => {
  useEffect(() => {
    async function init() {
      await web3AuthInstance.init();
    }
    init();
  }, []);
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      <CustomAppbar />
      <Outlet />
    </div>
  );
};
