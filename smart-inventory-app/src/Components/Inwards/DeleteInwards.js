import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const DeleteInwards = () => {
  // const [showForm, setShowForm] = useState(false);
  const [modal, setModal] = useState(false);
  const [product_id, setProductId] = useState("");

  const handleDeleteInwards = async () => {
    try {
      const response = await fetch(
        `http://10.11.245.169:6543/deleteemp/${parseInt(product_id)}`,
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
    setProductId("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
            {/* Item ID*/}
            <div className="mb-3">
              <label htmlFor="product_id" className="form-label">
                Item ID:
              </label>
              <input
                type="number"
                className="form-control"
                id="product_id"
                value={product_id}
                onChange={(event) => setProductId(event.target.value)}
                required
              />
            </div>

            {/* functionality - cancel & delete employee */}
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
                onClick={handleDeleteInwards}
              >
                Delete
              </button>
            </div>
          </form>
        </ModalHeader>
      </Modal>
      <button className="btn btn-secondary" onClick={() => setModal(!modal)}>
        Delete Inwards
      </button>
    </div>
  );
};

export default DeleteInwards;
