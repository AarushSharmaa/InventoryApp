import React from "react";
import { useState, useEffect } from "react";
const DisplayEmployee = () => {
  const [items, setItems] = useState([]);

  // we will fetch data & update the items using setItems
  useEffect(() => {
    // fetch("http://localhost:3030/AuthorisedPersonnel")
    fetch("http://10.25.240.61:6543/")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setItems(
          result.map((exp) => {
            return { ...exp };
          })
        );
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-5">Employee Details</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">ID</th>
                </tr>
              </thead>

              <tbody>
                {items &&
                  items.map((item) => (
                    <tr key={item.empId}>
                      <td>{item.username}</td>
                      <td>{item.empId}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayEmployee;
