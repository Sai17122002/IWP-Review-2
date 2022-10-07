import React from "react";
import Navigation from "./Navigation";
import Recent from "./Recent";

function DashboardTransaction() {
  return (
    <div className="container">
      <Navigation />
      <div class="main dashboardTransaction">
        <div class="details">
          <Recent />
        </div>
      </div>
    </div>
  );
}

export default DashboardTransaction;
