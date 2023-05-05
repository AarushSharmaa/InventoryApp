import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddDelivery from "./AddDelivery";
import UpdateDelivery from "./UpdateDelivery";
import DeleteDelivery from "./DeleteDelivery";

const Deliveries = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://10.25.240.112:5432/orders")
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
    <div className="container">
      <h1 className="text-center my-5">Delivery Details</h1>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Item Name</th>
            <th scope="col">Item Quantity</th>
            <th scope="col">Date of delivery</th>
            <th scope="col">Invoice Number</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => (
              <tr key={item.orderid}>
                <td scope="row">{item.orderid}</td>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.Date}</td>
                <td>{item.billNo}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="row">
            <div className="col">
              <AddDelivery />
            </div>

            <div className="col">
              <UpdateDelivery />
            </div>
            <div className="col">
              <DeleteDelivery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;
