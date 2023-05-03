// import React, { useState } from "react";
// import { Model, Button } from "bootstrap";

// const AddProduct = () => {
//   const [showForm, setShowForm] = useState(false);
//   // const [showModal, setShowModal] = useState(false);
//   const [productName, setProductName] = useState("");
//   const [productDiscription, setProductDescription] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [productQuantity, setProductQuantity] = useState("");
//   const [supplierId, setSupplierId] = useState("");

//   const handleAddProduct = async () => {
//     try {
//       const response = await fetch("http://10.25.240.112:5432/addProduct", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           productName,
//           productDiscription,
//           productPrice,
//           productQuantity,
//           supplierId,
//         }),
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//     setShowForm(false);
//     // setShowModal(false);
//     setProductName("");
//     setProductDescription("");
//     setProductPrice("");
//     setProductQuantity("");
//     setSupplierId("");
//   };

//   return (
//     <div>
//       <button className="btn btn-secondary" onClick={() => setShowForm(true)}>
//         Add New Product
//       </button>
//       {showForm && (
//         <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
//           {/* product_name */}
//           <div className="mb-3">
//             <label htmlFor="productName" className="form-label">
//               Product Name:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="productName"
//               value={productName}
//               onChange={(event) => setProductName(event.target.value)}
//               required
//             />
//           </div>

//           {/* product_description */}
//           <div className="mb-3">
//             <label htmlFor="productDiscription" className="form-label">
//               Product Description :
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="productDiscription"
//               value={productDiscription}
//               onChange={(event) => setProductDescription(event.target.value)}
//               required
//             />
//           </div>

//           {/* product_price */}
//           <div className="mb-3">
//             <label htmlFor="productPrice" className="form-label">
//               Product Price:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="productPrice"
//               value={productPrice}
//               onChange={(event) => setProductPrice(event.target.value)}
//               required
//             />
//           </div>

//           {/* product_quantity */}
//           <div className="mb-3">
//             <label htmlFor="productQuantity" className="form-label">
//               Product Quantity:
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               id="productQuantity"
//               value={productQuantity}
//               onChange={(event) => setProductQuantity(event.target.value)}
//               required
//             />
//           </div>

//           {/* supplier_id */}
//           <div className="mb-3">
//             <label htmlFor="supplierId" className="form-label">
//               Supplier Id:
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               id="supplierId"
//               value={supplierId}
//               onChange={(event) => setSupplierId(event.target.value)}
//               required
//             />
//           </div>

//           {/* functionality  - Cancel & AddProduct */}
//           <div className="d-flex justify-content-end">
//             <button
//               type="button"
//               className="btn btn-secondary me-2"
//               onClick={() => setShowForm(false)}
//             >
//               Cancel
//             </button>

//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={handleAddProduct}
//             >
//               Add Product
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const AddProduct = () => {
  const [modal, setmodal] = useState(false);
  // const [showForm, setShowForm] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDiscription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [supplierId, setSupplierId] = useState("");

  const handleAddProduct = async () => {
    console.log(productName);
    try {
      const response = await fetch("http://10.25.240.112:5432/addProduct", {
        method: "POST",

        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({
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

    // setShowForm(false);
    setmodal(!modal);
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductQuantity("");
    setSupplierId("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          <form className="mt-3 p-3 border rounded shadow-sm add-employee-form">
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
                Product Description:
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
                type="text"
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
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </form>
        </ModalHeader>
      </Modal>
      <button className="btn btn-secondary" onClick={() => setmodal(true)}>
        Add New Product
      </button>
    </div>
  );
};

export default AddProduct;
