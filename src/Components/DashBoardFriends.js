import React from "react";
import Navigation from "./Navigation";
import "./friends.css";
import Image from "../image.png";

function DashBoardFriends() {
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
        <div class="friends">
          <div class="recent">
            <div class="cardHeader">
              <h2>Friends</h2>
              <a href="#" class="btn">
                View All
              </a>
            </div>
            <table>
              <tr>
                <td width="40px">
                  <div class="imagebox">
                    <img src={Image} alt="" />
                  </div>
                </td>
                <td>
                  <h4>Sabarish</h4>
                </td>
              </tr>
              <tr>
                <td width="40px">
                  <div class="imagebox">
                    <img src={Image} alt="" />
                  </div>
                </td>
                <td>
                  <h4>Arnold</h4>
                </td>
              </tr>
              <tr>
                <td width="40px">
                  <div class="imagebox">
                    <img src={Image} alt="" />
                  </div>
                </td>
                <td>
                  <h4>Aravind</h4>
                </td>
              </tr>
              <tr>
                <td width="40px">
                  <div class="imagebox">
                    <img src={Image} alt="" />
                  </div>
                </td>
                <td>
                  <h4>Karthik</h4>
                </td>
              </tr>
            </table>
          </div>
          <div class="invite">
            <div class="cardHeader">
              <h2>Invite Friends</h2>
            </div>
            <div align="center" class="find">
              <label>
                <input type="text" placeholder="User ID" />
              </label>
              <br />
              <div align="center">
                <button class="send-btn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardFriends;
