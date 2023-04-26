import React, { useState } from "react";

const AddEmployee = () => {
  const [showForm, setShowForm] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [emailId, setEmailId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAddEmployee = async () => {
    try {
      // console.log(firstName, lastName, con, email);
      const response = await fetch("http://10.25.240.61:6543/addEmployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNo,
          address,
          emailId,
          username,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setShowForm(false);
    setEmployeeId("");
    setFirstName("");
    setLastName("");
    setPhoneNo("");
    setAddress("");
    setEmailId("");
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <button className="btn btn-secondary" onClick={() => setShowForm(true)}>
        Add Employee
      </button>
      {showForm && (
        <form className="mt-3 p-3 border rounded shadow-sm">
          {/* First name */}

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          {/* Last name */}
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

          {/* Contact */}
          <div className="mb-3">
            <label htmlFor="phoneNo" className="form-label">
              Contact:
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNo"
              value={phoneNo}
              onChange={(event) => setPhoneNo(event.target.value)}
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="emailId" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="emailId"
              value={emailId}
              onChange={(event) => setEmailId(event.target.value)}
            />
          </div>

          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          {/* Password */}

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {/* functionality */}
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddEmployee}
            >
              Add Employee
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddEmployee;
