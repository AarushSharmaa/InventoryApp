import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./AddProduct";
import DeleteEmployee from "../EmployeePage/DeleteEmployee";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";

const Godown = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://10.11.245.169:6543/products")
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
    <div className="container mt-5 godown-container">
      <h1 className="text-center mb-5 godown-title">Godown Details</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Item Id</th>
              <th scope="col">Item Name</th>
              <th scope="col">Item Description</th>
              <th scope="col">Supplier Id</th>
            </tr>
          </thead>

          <tbody>
            {items &&
              items.map(
                ({
                  product_id,
                  productName,
                  productDiscription,
                  supplierId,
                }) => (
                  <tr key={product_id}>
                    <td>{product_id}</td>
                    <td>{productName}</td>
                    <td>{productDiscription}</td>
                    <td>{supplierId}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="row">
            <div className="col">
              <AddProduct />
            </div>

            <div className="col">
              <UpdateProduct />
            </div>
            <div className="col">
              <DeleteProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Godown;
