import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const UpdateInwards = () => {
  const [modal, setmodal] = useState(false);
  // const [showForm, setShowForm] = useState(false);
  const [product_id, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [date, setDate] = useState("");
  const [supplierId, setSupplierId] = useState("");

  const handleUpdateProduct = async () => {
    try {
      const response = await fetch("http://10.11.245.169:6543/addProduct", {
        method: "PUT",

        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({
          product_id,
          productName,
          productQuantity,
          date,
          supplierId,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    // setShowForm(false);
    setmodal(!modal);
    setProductId("");
    setProductName("");
    setProductQuantity("");
    setDate("");
    setSupplierId("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
            {/* product_id */}
            <div className="mb-3">
              <label htmlFor="product_id" className="form-label">
                Product Id:
              </label>
              <input
                type="text"
                className="form-control"
                id="product_id"
                value={product_id}
                onChange={(event) => setProductId(event.target.value)}
                required
              />
            </div>
            {/* product_name */}
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
                required
              />
            </div>

            {/* product_quantity */}
            <div className="mb-3">
              <label htmlFor="productQuantity" className="form-label">
                Product Quantity:
              </label>
              <input
                type="number"
                className="form-control"
                id="productQuantity"
                value={productQuantity}
                onChange={(event) => setProductQuantity(event.target.value)}
                required
              />
            </div>
            {/* date of receiving */}
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date of receiving:
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

            {/* supplier_id */}
            <div className="mb-3">
              <label htmlFor="supplierId" className="form-label">
                Supplier Id:
              </label>
              <input
                type="number"
                className="form-control"
                id="supplierId"
                value={supplierId}
                onChange={(event) => setSupplierId(event.target.value)}
                required
              />
            </div>
            {/* functionality  - Cancel & AddProduct */}
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={() => setmodal(!modal)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateProduct}
              >
                Update
              </button>
            </div>
          </form>
        </ModalHeader>
      </Modal>
      <button className="btn btn-secondary" onClick={() => setmodal(true)}>
        Update Inwards
      </button>
    </div>
  );
};

export default UpdateInwards;
