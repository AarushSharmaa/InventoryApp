import React, { useState } from "react";

const DeleteEmployee = () => {
  const [showForm, setShowForm] = useState(false);
  const [empId, setEmpId] = useState("");

  const handleDeleteEmployee = async () => {
    try {
      const response = await fetch(
        `http://10.25.240.61:6543/deleteemp/${parseInt(empId)}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setShowForm(false);
    setEmpId("");
  };

  return (
    <div>
      <button className="btn btn-secondary" onClick={() => setShowForm(true)}>
        Delete Employee
      </button>
      {showForm && (
        <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
          {/* Employee ID*/}
          <div className="mb-3">
            <label htmlFor="empId" className="form-label">
              Employee ID:
            </label>
            <input
              type="number"
              className="form-control"
              id="empId"
              value={empId}
              onChange={(event) => setEmpId(event.target.value)}
              required
            />
          </div>

          {/* functionality - cancel & delete employee */}
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
              onClick={handleDeleteEmployee}
            >
              Delete Employee
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DeleteEmployee;
