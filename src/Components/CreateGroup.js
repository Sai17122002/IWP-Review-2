import React from "react";
import { NavLink } from "react-router-dom";
import "./Group.css";
import Navigation from "./Navigation";
import Image from "../image.png";

function CreateGroup() {
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

        <div class="details">
          <div class="recent">
            <div class="cardHeader1">
              <h2>Create Group</h2>
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
                  <td>Group Decription</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Minimum Members</td>
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
                <tr>
                  <td>Maiden Activity</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Member 1</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Member 2</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Member 3</td>
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
                <NavLink to="/Dashboard">Create Group</NavLink>
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

export default CreateGroup;
