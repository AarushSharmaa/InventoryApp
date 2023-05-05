import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddReturn from "./AddReturn";
import UpdateReturn from "./UpdateReturn";
import DeleteReturn from "./DeleteReturn";

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
      <div className="container mt-5 ">
        <h1 className="text-center mb-5  ">Return Details</h1>

        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Quantity</th>
                <th scope="col">Reason of return</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item) => (
                  <tr key={item.itemId}>
                    <td>{item.itemId}</td>
                    <td>{item.itemName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.itemDescription}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col">
                <AddReturn />
              </div>

              <div className="col">
                <UpdateReturn />
              </div>
              <div className="col">
                <DeleteReturn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Return;
