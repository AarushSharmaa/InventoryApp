import React from "react";
import Godown from "../GodownPage/Godown";
import Employee from "../EmployeePage/Employee";
import Inwards from "../Inwards/Inwards";
import Return from "../ReturnPage/Return";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../LoginPage/Login";
import Reports from "../ReportPage/Reports";
import Admin from "./Admin";
import Deliveries from "../DeliveriesPage/Deliveries";
import Home from "../HomePage/Home";
const RoutesOfPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/godown" element={<Godown />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/inwards" element={<Inwards />} />
        <Route path="/return" element={<Return />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/delivery" element={<Deliveries />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
};

export default RoutesOfPage;
