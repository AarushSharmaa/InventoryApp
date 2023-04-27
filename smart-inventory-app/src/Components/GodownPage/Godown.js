import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const Godown = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3032/Godown")
      .then((response) => response.json())
      .then((result) => {
        setItems(
          result.map((exp) => {
            return { ...exp };
          })
        );
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Godown Details</h1>
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
              items.map((item, index) => (
                <tr key={item.itemId}>
                  <td scope="row">{index + 1}</td>
                  <td>{item.itemName}</td>
                  <td>{item.itemDescription}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Godown;
