import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Reports.css";

const Reports = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h2 className="mb-2">Reports</h2>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <h4 className="mb-0">Inventory Report</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive animate__animated ">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Item Name</th>
                          <th scope="col">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Water Bottle</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td>Dining Table Set</td>
                          <td>50</td>
                        </tr>
                        <tr>
                          <td>Laptop</td>
                          <td>200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <h4 className="mb-0">Transaction Report</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive animate__animated animate__fadeInUp">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Inwards</th>
                          <th scope="col">Outwards</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1001</td>
                          <td>998</td>
                        </tr>
                        <tr>
                          <td>1003</td>
                          <td>879</td>
                        </tr>
                        <tr>
                          <td>193</td>
                          <td>122</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
