import React from "react";
import Godown from "../GodownPage/Godown";
import Employee from "../EmployeePage/Employee";
import Inwards from "../Inwards/Inwards";
import Return from "../ReturnPage/Return";
import { Routes, Route, NavLink } from "react-router-dom";
import Links from "../LinkPage/Links";
import RoutesOfPage from "./RoutesOfPage";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

const Admin = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <h4 className="fw-normal mb-3 pb-3 text-center">Admin Page</h4>
                <Links />
                <RoutesOfPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
