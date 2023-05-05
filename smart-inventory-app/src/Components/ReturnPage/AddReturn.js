import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const AddReturn = () => {
  // const [showForm, setShowForm] = useState(false);
  const [modal, setModal] = useState(false);

  const [item_id, setItemId] = useState("");
  const [item_name, setItemName] = useState("");
  const [item_quantity, setItemQuantity] = useState("");
  const [reason_for_return, setReason] = useState("");

  // sends a POST request to the database
  const handleAddReturn = async () => {
    try {
      // console.log(firstName, lastName, con, email);
      const response = await fetch("http://10.11.245.169:6543/addReturn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_id,
          item_name,
          item_quantity,
          reason_for_return,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    // setShowForm(false);
    setModal(!modal);
    setItemId("");
    setItemName("");
    setItemQuantity("");
    setReason("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
            {/* item_id */}
            <div className="mb-3" style={{ width: "300px" }}>
              <label htmlFor="item_id" className="form-label">
                Item Id
              </label>
              <input
                type="number"
                className="form-control"
                id="item_id"
                value={item_id}
                onChange={(event) => setItemId(event.target.value)}
                required
              />
            </div>

            {/* item_name */}
            <div className="mb-3">
              <label htmlFor="item_name" className="form-label">
                Item Name
              </label>
              <input
                type="text"
                className="form-control"
                id="item_name"
                value={item_name}
                onChange={(event) => setItemName(event.target.value)}
                required
              />
            </div>

            {/* item_quantity */}
            <div className="mb-3">
              <label htmlFor="item_quantity" className="form-label">
                Item Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="item_quantity"
                value={item_quantity}
                onChange={(event) => setItemQuantity(event.target.value)}
                required
              />
            </div>

            {/* reason_for_return */}
            <div className="mb-3">
              <label htmlFor="reason_for_return" className="form-label">
                Reason of return
              </label>
              <input
                type="text"
                className="form-control"
                id="reason_for_return"
                value={reason_for_return}
                onChange={(event) => setReason(event.target.value)}
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
                onClick={handleAddReturn}
              >
                Add
              </button>
            </div>
          </form>
        </ModalHeader>
      </Modal>
      <button className="btn btn-secondary" onClick={() => setModal(!modal)}>
        Add New Return
      </button>
    </div>
  );
};

export default AddReturn;
