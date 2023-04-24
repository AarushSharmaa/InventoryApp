// this is the entry page just after the login page
import React from "react";
import Godown from "../GodownPage/Godown";
import Employee from "../EmployeePage/Employee";
import Inwards from "../Inwards/Inwards";
import Return from "../ReturnPage/Return";
import { Routes, Route, NavLink } from "react-router-dom";
import Links from "../LinkPage/Links";
import RoutesOfPage from "./RoutesOfPage";

const Admin = () => {
  return (
    <>
      <h4> admin page</h4>
      <small>
        this page will come after the sign in page. all the components will be
        navigated from here for the godown employee.
      </small>

      <Links />
      <RoutesOfPage />
    </>
  );
};

export default Admin;
