import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Return = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/Return")
      .then((response) => response.json())
      .then((result) => {
        setItems(result.map((exp) => ({ ...exp })));
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5">Return Details</h1>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item) => (
                  <tr key={item.itemId}>
                    <td>{item.itemId}</td>
                    <td>{item.itemName}</td>
                    <td>{item.itemDescription}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Return;
