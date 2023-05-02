import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AddProduct from "./AddProduct";
import DeleteEmployee from "../EmployeePage/DeleteEmployee";
import DeleteProduct from "./DeleteProduct";

const Godown = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://10.25.240.112:5432/products")
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
              <th scope="col">ID</th>
              <th scope="col">Item Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>

          <tbody>
            {items &&
              items.map(({ product_id, productName, productDiscription }) => (
                <tr key={product_id}>
                  {/* {console.log(productName)} */}
                  <td>{product_id}</td>
                  <td>{productName}</td>
                  <td>{productDiscription}</td>
                </tr>
              ))}
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
              <DeleteProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Godown;
