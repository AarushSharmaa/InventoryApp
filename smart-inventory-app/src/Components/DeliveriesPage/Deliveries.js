// this will display the entire stock available in a godown

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect } from "react";

const Deliveries = () => {
  const [items, setItems] = useState([]);

  // we will fetch data & update the items using setItems
  useEffect(() => {
    fetch("http://localhost:3035/Deliveries")
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
    <>
      <h1>Godown details</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item Id</th>
              <th scope="col">Item Name</th>
              <th scope="col">Item Quantity</th>
            </tr>
          </thead>

          {items &&
            items.map((item) => (
              <tbody>
                <tr key={item.itemId}>
                  <td scope="row">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
};

export default Deliveries;
