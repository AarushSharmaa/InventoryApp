import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Inwards = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3034/Inwards")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setItems(result.map((exp) => ({ ...exp })));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-5">Inward Details</h1>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Item Id</th>
            <th scope="col">Item Name</th>
            <th scope="col">Item Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.itemId}>
              <td scope="row">{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inwards;
