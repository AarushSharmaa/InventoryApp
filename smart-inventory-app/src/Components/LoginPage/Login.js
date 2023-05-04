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

    console.log("login button clicked");
    fetch("http://localhost:3030/AuthorisedPersonnel")
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("user", JSON.stringify({ username, password }));

        for (let index = 0; index < result.length; index++) {
          console.log(
            "Username and password : ",
            result[index].name,
            result[index].id
          );
          if (
            result[index].name === username &&
            result[index].id === Number(password)
          ) {
            console.log("you are authorised");
            navigate("/admin/home");
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
            <div className="card mt-5 shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5
                  className="fw-normal mb-3 pb-3 text-center"
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
                      placeholder="enter your username"
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
                      placeholder="enter your password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block mt-4"
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
