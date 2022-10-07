import React from "react";
import Image from "../image.png";

function TopBar() {
  return (
    <div class="topbar">
      <div class=" toggle">
        <ion-icon name="menu"></ion-icon>
      </div>
      <div class="search">
        <label>
          <input type="text" placeholder="Search" />
          <ion-icon name="search"></ion-icon>
        </label>
      </div>
      <div class="user">
        <img src={Image} alt="" />
      </div>
    </div>
  );
}

export default TopBar;
