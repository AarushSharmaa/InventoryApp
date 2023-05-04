import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Deliveries = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3035/Deliveries")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setItems(result.map((exp) => ({ ...exp })));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-5">Delivery Details</h1>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Item Id</th>
            <th scope="col">Item Name</th>
            <th scope="col">Item Quantity</th>
            <th scope="col">Date of delivery</th>
            <th scope="col">Supplier Name</th>
            <th scope="col">Courier Service</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.itemId}>
              <td scope="row">{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.dateOfDelivery}</td>
              <td>{item.supplierName}</td>
              <td>{item.courierService}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deliveries;
