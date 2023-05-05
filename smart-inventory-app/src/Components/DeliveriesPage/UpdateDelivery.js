import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const UpdateDelivery = () => {
  // const [showForm, setShowForm] = useState(false);
  const [modal, setModal] = useState(false);

  const [orderid, setOrderId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [billNo, setBillNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [itemName, setItemName] = useState("");
  const [date, setDate] = useState("");

  // sends a PUT request to the database
  const handleUpdateDelivery = async () => {
    console.log(orderid, itemName);
    try {
      // console.log(firstName, lastName, con, email);
      const response = await fetch("http://10.11.245.169:6543/updateOrder", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderid: parseInt(orderid),
          itemName,
          date,
          billNo,
          quantity,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    // setShowForm(false);
    setModal(!modal);
    setOrderId("");
    setCustomerId("");
    setItemName("");
    setDate("");
    setBillNumber("");
    setQuantity("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
            {/* order_id */}
            <div className="mb-3">
              <label htmlFor="orderid" className="form-label">
                Order Id:
              </label>
              <input
                type="number"
                className="form-control"
                id="orderid"
                value={orderid}
                onChange={(event) => setOrderId(event.target.value)}
                required
              />
            </div>

            {/* customerId */}
            <div className="mb-3">
              <label htmlFor="customerId" className="form-label">
                Customer Id:
              </label>
              <input
                type="number"
                className="form-control"
                id="customerId"
                value={customerId}
                onChange={(event) => setCustomerId(event.target.value)}
                required
              />
            </div>

            {/* itemName */}
            <div className="mb-3">
              <label htmlFor="itemName" lassName="form-label">
                Item Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="itemName"
                value={itemName}
                onChange={(event) => setItemName(event.target.value)}
                required
              />
            </div>

            {/* Item Quantity */}
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Item Quantity:
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                required
              />
            </div>

            {/* Date */}
            <div className="mb-3" style={{ width: "300px" }}>
              <label htmlFor="date" className="form-label">
                Date of Delivery:
              </label>
              <input
                type="text"
                className="form-control"
                id="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>

            {/* Bill Number */}
            <div className="mb-3">
              <label htmlFor="billNo" className="form-label">
                Bill Number:
              </label>
              <input
                type="number"
                className="form-control"
                id="billNo"
                value={billNo}
                onChange={(event) => setBillNumber(event.target.value)}
                required
              />
            </div>

            {/* functionality */}
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={() => setModal(!modal)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateDelivery}
              >
                Update
              </button>
            </div>
          </form>
        </ModalHeader>
      </Modal>
      <button className="btn btn-secondary" onClick={() => setModal(!modal)}>
        Update Delivery
      </button>
    </div>
  );
};

export default UpdateDelivery;
