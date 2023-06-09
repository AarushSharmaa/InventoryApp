import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddReturn from "./AddReturn";
import UpdateReturn from "./UpdateReturn";
import DeleteReturn from "./DeleteReturn";

const Return = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://10.11.245.169:6543/returns")
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
                  <tr key={item.item_id}>
                    <td>{item.item_id}</td>
                    <td>{item.item_name}</td>
                    <td>{item.item_quantity}</td>
                    <td>{item.reason_for_return}</td>
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
