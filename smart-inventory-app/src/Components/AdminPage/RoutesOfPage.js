import React from "react";
import Godown from "../GodownPage/Godown";
import Employee from "../EmployeePage/Employee";
import Inwards from "../Inwards/Inwards";
import Return from "../ReturnPage/Return";
import { Routes, Route } from "react-router-dom";
import Login from "../LoginPage/Login";
const RoutesOfPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/godown" element={<Godown />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/inwards" element={<Inwards />} />
        <Route path="/return" element={<Return />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default RoutesOfPage;
