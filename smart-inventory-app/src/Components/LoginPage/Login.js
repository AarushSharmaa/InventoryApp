import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

// use push for Routes to move from sign in to admin page
// useNavigate - read about it

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    fetch("http://localhost:3032/AuthorisedPersonnel")
      .then((response) => response.json())
      .then((result) => {
        for (let index = 0; index < result.length; index++) {
          if (
            result[index].name === username &&
            result[index].id === Number(password)
          ) {
            console.log("you are authorised");
          }
        }
      });

    e.preventDefault();
  };

  return (
    <>
      <h5 className="fw-normal mb-3 pb-3" style={{ "letter-spacing": "1px" }}>
        Sign into your account
      </h5>

      <form>
        <div class="container py-5 h-100" style={{ backgroundColor: "#eee" }}>
          {/* take username from the user */}

          <div class="form-outline mb-4">
            <label htmlFor="username">
              Username
              <input
                id="username"
                type="text"
                className="form-control form-control-lg"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
          </div>

          {/* take password from the user */}

          <div className="form-outline mb-4">
            <label htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                className="form-control form-control-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          {/* submit button */}
          <button
            type="sign-in"
            className="btn btn-dark btn-lg btn-block"
            onClick={submitHandler}
          >
            Sign-in
          </button>
        </div>
      </form>
    </>
  );
}
