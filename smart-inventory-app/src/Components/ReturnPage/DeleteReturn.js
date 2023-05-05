import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const DeleteReturn = () => {
  // const [showForm, setShowForm] = useState(false);
  const [modal, setModal] = useState(false);

  const [item_id, setItemId] = useState("");

  // sends a DELETE request to the database
  const handleDeleteReturn = async () => {
    try {
      // console.log(firstName, lastName, con, email);
      const response = await fetch(
        `http://10.11.245.169:6543/deletereturn/${parseInt(item_id)}`,
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
    setItemId("");
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
                onClick={handleDeleteReturn}
              >
                Delete
              </button>
            </div>
          </form>
        </ModalHeader>
      </Modal>
      <button className="btn btn-secondary" onClick={() => setModal(!modal)}>
        Delete Returns
      </button>
    </div>
  );
};

export default DeleteReturn;
