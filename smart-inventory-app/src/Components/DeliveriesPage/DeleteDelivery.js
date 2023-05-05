import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const DeleteDelivery = () => {
  // const [showForm, setShowForm] = useState(false);
  const [modal, setModal] = useState(false);

  const [orderid, setOrderId] = useState("");

  // sends a POST request to the database
  const handleDeleteDelivery = async () => {
    try {
      // console.log(firstName, lastName, con, email);
      const response = await fetch(
        `http://10.25.240.112:5432/deleteOrder/${parseInt(orderid)}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    // setShowForm(false);
    setModal(!modal);

    setOrderId("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
            {/* orderid */}
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
                onClick={handleDeleteDelivery}
              >
                Delete
              </button>
            </div>
          </form>
        </ModalHeader>
      </Modal>
      <button className="btn btn-secondary" onClick={() => setModal(!modal)}>
        Delete Delivery
      </button>
    </div>
  );
};

export default DeleteDelivery;
