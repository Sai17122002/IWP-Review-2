import React from "react";
import "./DashBoard.css";
import Navigation from "./Navigation";
import TopBar from "./TopBar";
import CardBox from "./CardBox";
import GroupActivity from "./GroupActivity";
import Recent from "./Recent";

function DashBoard() {
  return (
    <div class="container">
      <Navigation />

      <div class="main">
        <TopBar />
        <CardBox />

        <div class="details" style={{ margin: "auto" }}>
          <Recent />
          <GroupActivity />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
