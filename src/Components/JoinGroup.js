import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function JoinGroup() {
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
            <img src="image.png" alt="" />
          </div>
        </div>

        <div class="details">
          <div class="recent">
            <div class="cardHeader1">
              <h2>Join Group</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Setting</td>
                  <td>Value</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Group Name</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Group Leader Username</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="groupactivity">
            <div class="cardHeader">
              <h2>Actions</h2>
            </div>
            <ul>
              <li>
                <NavLink to="/Dashboard">Join Group</NavLink>
              </li>
              <li>
                <NavLink to="/group">Return</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinGroup;
