import React from "react";

function Recent() {
  return (
    <div class="recent" style={{ width: "100%" }}>
      <div class="cardHeader">
        <h2>Recent Transactions</h2>
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>DateTime</td>
            <td>Payment</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class=" status tobepaid">To be Paid </span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status tobepaid">To be Paid </span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status topay">To Pay</span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status tobepaid">To be Paid </span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status paid"> Paid</span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status topay">To Pay</span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status paid"> Paid</span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status tobepaid">To be Paid </span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status topay">To Pay</span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status tobepaid">To be Paid </span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status paid"> Paid</span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status topay">To Pay</span>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>1/1/1 00:00:00</td>
            <td>200</td>
            <td>
              <span class="status paid"> Paid</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Recent;
