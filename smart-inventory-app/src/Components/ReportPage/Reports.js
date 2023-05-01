import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Reports.css";

const Reports = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Reports</h2>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header bg-secondary text-white">
                  <h4 className="mb-0">Inventory Report</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Item Name</th>
                          <th scope="col">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Item 1</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td>Item 2</td>
                          <td>50</td>
                        </tr>
                        <tr>
                          <td>Item 3</td>
                          <td>200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header bg-secondary text-white">
                  <h4 className="mb-0">Revenue Report</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Month</th>
                          <th scope="col">Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>January</td>
                          <td>$1000</td>
                        </tr>
                        <tr>
                          <td>February</td>
                          <td>$1500</td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>$2000</td>
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
