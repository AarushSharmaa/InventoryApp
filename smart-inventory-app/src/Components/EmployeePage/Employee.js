import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import DisplayEmployee from "./DisplayEmployee";

const Employee = () => {
  return (
    <>
      <DisplayEmployee />

      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="row">
            <div className="col">
              <AddEmployee />
            </div>
            <div className="col">
              <UpdateEmployee />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
