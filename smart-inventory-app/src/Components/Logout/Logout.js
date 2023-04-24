import React from "react";
import Login from "../LoginPage/Login";
import { NavLink, Routes, Route } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <NavLink to="./logout">Logout</NavLink>{" "}
      <div>
        {" "}
        <Routes>
          <Route path="/logout" element={<Login />} />{" "}
        </Routes>{" "}
      </div>
    </div>
  );
};

export default Logout;
