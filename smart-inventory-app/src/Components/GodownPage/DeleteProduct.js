import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const DeleteProduct = () => {
  const [modal, setModal] = useState(false);
  const [product_id, setProductId] = useState("");

  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(
        `http://10.25.240.112:5432/deleteProd/${parseInt(product_id)}`,
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
    setModal(!modal);
    setProductId("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
            {/* Product ID*/}
            <div className="mb-3">
              <label htmlFor="product_Id" className="form-label">
                Product Id :
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
                onClick={handleDeleteProduct}
              >
                Delete Product
              </button>
            </div>
          </form>
        </ModalHeader>
      </Modal>

      <button className="btn btn-secondary" onClick={() => setModal(!modal)}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
