import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Reports = () => {
  return (
    <div className="container mt-4">
      <h2>Godown Stats</h2>
      <hr />

      <div className="row">
        <div className="col-md-6">
          <h4>Inventory Report</h4>
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

        <div className="col-md-6">
          <h4>Revenue Report</h4>
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
  );
};

export default Reports;
