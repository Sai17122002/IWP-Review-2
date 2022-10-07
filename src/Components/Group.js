import React from "react";
import { NavLink } from "react-router-dom";
import "./Group.css";
import Navigation from "./Navigation";
import Image from "../image.png";

function Group() {
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

        <div class="details" style={{ margin: "auto" }}>
          <div class="recent" style={{ width: "100%" }}>
            <div class="cardHeader1">
              <h2>Recent Group Happenings</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Group Name</td>
                  <td>DateTime</td>
                  <td>Activity</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Amazing</td>
                  <td>1/1/1 00:00:00</td>
                  <td>Trekking</td>
                  <td>Created group</td>
                </tr>
                <tr>
                  <td>Amazing</td>
                  <td>1/1/1 00:00:00</td>
                  <td>Trekking</td>
                  <td>Created group</td>
                </tr>
                <tr>
                  <td>Amazing</td>
                  <td>1/1/1 00:00:00</td>
                  <td>Trekking</td>
                  <td>Created group</td>
                </tr>
                <tr>
                  <td>Amazing</td>
                  <td>1/1/1 00:00:00</td>
                  <td>Trekking</td>
                  <td>Created group</td>
                </tr>
                <tr>
                  <td>Amazing</td>
                  <td>1/1/1 00:00:00</td>
                  <td>Trekking</td>
                  <td>Created group</td>
                </tr>
                <tr>
                  <td>Amazing</td>
                  <td>1/1/1 00:00:00</td>
                  <td>Trekking</td>
                  <td>Created group</td>
                </tr>
                <tr>
                  <td>Amazing</td>
                  <td>1/1/1 00:00:00</td>
                  <td>Trekking</td>
                  <td>Created group</td>
                </tr>
                <tr>
                  <td>Amazing</td>
                  <td>1/1/1 00:00:00</td>
                  <td>Trekking</td>
                  <td>Created group</td>
                </tr>
                <tr>
                  <td>Amazing</td>
                  <td>1/1/1 00:00:00</td>
                  <td>Trekking</td>
                  <td>Created group</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="groupactivity">
            <div class="cardHeader">
              <h2>Group Actions</h2>
            </div>
            <ul>
              <li>
                <NavLink to="/creategroup">Create Group</NavLink>
              </li>
              <li>
                <NavLink to="/joingroup">Join Group</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
