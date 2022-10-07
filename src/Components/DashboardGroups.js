import React from "react";
import Navigation from "./Navigation";
import GroupActivity from "./GroupActivity";

function DashboardGroups() {
  return (
    <div class="container">
      <Navigation />

      <div class="group-main main">
        <div class="details">
          <GroupActivity />
        </div>
      </div>
    </div>
  );
}

export default DashboardGroups;
