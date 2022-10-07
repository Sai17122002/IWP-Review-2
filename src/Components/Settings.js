import React from "react";
import Navigation from "./Navigation";
import Image from "../image.png";

function Settings() {
  return (
    <div class="container">
      <Navigation />
      <div class="main">
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
        <div class="settings">
          <div class="recent">
            <div class="cardHeader">
              <h2>Settings</h2>
            </div>
            <ul>
              <li>
                <a>
                  <span class="icon">
                    <ion-icon name="key-outline"></ion-icon>
                  </span>
                  <span class="title">Change password</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <ion-icon name="people-circle-outline"></ion-icon>
                  </span>
                  <span class="title">Change profile picture</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <ion-icon name="at-outline"></ion-icon>
                  </span>
                  <span class="title">Change UserID</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
