import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const UpdateDelivery = () => {
  // const [showForm, setShowForm] = useState(false);
  const [modal, setModal] = useState(false);

  const [order_id, setOrderId] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [bill_no, setBillNumber] = useState("");

  // sends a POST request to the database
  const handleUpdateDelivery = async () => {
    try {
      // console.log(firstName, lastName, con, email);
      const response = await fetch("http://10.11.245.169:6543/addEmployee", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          bill_no,
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
    setDate("");
    setBillNumber("");
    setQuantity("");
    setOrderId("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
            {/* order_id */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Order Id:
              </label>
              <input
                type="number"
                className="form-control"
                id="order_id"
                value={order_id}
                onChange={(event) => setOrderId(event.target.value)}
                required
              />
            </div>

            {/* itemName */}
            <div className="mb-3">
              <label htmlFor="itemName" lassName="form-label">
                Item Name:
              </label>
              <input
                type="number"
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
                type="number"
                className="form-control"
                id="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>

            {/* Bill Number */}
            <div className="mb-3">
              <label htmlFor="bill_no" className="form-label">
                Bill Number:
              </label>
              <input
                type="number"
                className="form-control"
                id="bill_no"
                value={bill_no}
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
                onClick={UpdateDelivery}
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
