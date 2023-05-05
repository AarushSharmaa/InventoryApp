import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddInwards from "./AddInwards";
import UpdateInwards from "./UpdateInwards";
import DeleteInwards from "./DeleteInwards";

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
            <th scope="col">Date of receiving</th>
            <th scope="col">Supplier ID</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.itemId}>
              <td scope="row">{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.dateOfReceiving}</td>
              <td>{item.supplierName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="row">
            <div className="col">
              <AddInwards />
            </div>

            <div className="col">
              <UpdateInwards />
            </div>
            <div className="col">
              <DeleteInwards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inwards;
