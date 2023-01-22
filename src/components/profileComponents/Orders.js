import React from "react";

const Orders = () => {
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>ID</th>
            <th>STATUS</th>
            <th>DATE</th>
            <th>TOTAL</th>
          </thead>
          <tbody>
            <tr className={`alert-success`}>
              <td>
                <a href={`/`} className="link">
                  1
                </a>
              </td>
              <td>Paid</td>
              <td>DEC 12 </td>
              <td>$242</td>
            </tr>
            <tr className="alert-danger">
              <td>
                <a href={`/`} className="link">
                  2
                </a>
              </td>
              <td>Not paid</td>
              <td>Dec 12 2022</td>
              <td>$31</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
