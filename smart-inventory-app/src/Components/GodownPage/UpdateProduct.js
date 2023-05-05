import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const UpdateProduct = () => {
  const [modal, setModal] = useState(false);
  const [product_id, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDiscription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [supplierId, setSupplierId] = useState("");

  const handleUpdateProduct = async () => {
    try {
      // console.log(product_id);
      const response = await fetch(`http://10.11.245.169:6543/updateProd`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          product_id,
          productName,
          productDiscription,
          productPrice,
          productQuantity,
          supplierId,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setModal(!modal);
    // setShowForm(false);
    setProductId("");
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductQuantity("");
    setSupplierId("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
            {/* product_id*/}
            <div className="mb-3">
              <label htmlFor="product_id" className="form-label">
                Product ID:
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

            {/* product_description */}
            <div className="mb-3">
              <label htmlFor="productDiscription" className="form-label">
                Product Description :
              </label>
              <input
                type="text"
                className="form-control"
                id="productDiscription"
                value={productDiscription}
                onChange={(event) => setProductDescription(event.target.value)}
                required
              />
            </div>

            {/* product_price */}
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Product Price:
              </label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                value={productPrice}
                onChange={(event) => setProductPrice(event.target.value)}
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

            {/* functionality  - Cancel & AddProduct */}
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
                onClick={handleUpdateProduct}
              >
                Update Product
              </button>
            </div>
          </form>
        </ModalHeader>
      </Modal>

      {/* update button */}
      <button className="btn btn-secondary" onClick={() => setModal(!modal)}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
