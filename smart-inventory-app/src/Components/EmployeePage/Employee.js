import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import AddEmployee from "./AddEmployee";

const Employee = () => {
  const [items, setItems] = useState([]);

  // we will fetch data & update the items using setItems
  useEffect(() => {
    // fetch("  http://localhost:3030/AuthorisedPersonnel")
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
      <h1>Employee details</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">username</th>
              <th scope="col">id</th>
            </tr>
          </thead>

          {items &&
            items.map((item) => (
              <tbody>
                <tr key={item.empId}>
                  <td scope="row">{item.username}</td>
                  <td>{item.empId}</td>
                </tr>
              </tbody>
            ))}
        </table>

        <AddEmployee />
      </div>
    </>
  );
};

export default Employee;
