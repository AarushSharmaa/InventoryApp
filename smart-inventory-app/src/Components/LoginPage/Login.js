import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import RoutesOfPage from "../AdminPage/RoutesOfPage";
import "./Login.css";

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:3030/AuthorisedPersonnel")
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("user", JSON.stringify({ username, password }));

        for (let index = 0; index < result.length; index++) {
          if (
            result[index].name === username &&
            result[index].id === Number(password)
          ) {
            console.log(`${username} : you are authorised`);
            navigate("/admin");
          }
        }
      });
  };

  return (
    <>
      <div className="container-fluid bg-dark text-light py-3">
        <h3 className="text-center mb-0">Smart Inventory Management App</h3>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h5
                  className="fw-normal mb-3 pb-3"
                  style={{ "letter-spacing": "1px" }}
                >
                  Sign into your account
                </h5>

                <form>
                  <div className="form-outline mb-4">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    onClick={submitHandler}
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
