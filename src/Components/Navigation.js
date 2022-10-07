import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div class="navigation">
      <ul>
        <li>
          <a>
            <span class="icon">
              <ion-icon name="cash"></ion-icon>
            </span>
            <span class="title">Bill Split</span>
          </a>
        </li>
        <li>
          <NavLink to="/dashboard">
            <span class="icon">
              <ion-icon name="home"></ion-icon>
            </span>
            <span class="title">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardFriends">
            <span class="icon">
              <ion-icon name="contacts"></ion-icon>
            </span>
            <span class="title">Friends</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardTransaction">
            <span class="icon">
              <ion-icon name="wallet"></ion-icon>
            </span>
            <span class="title">Transactions</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/group">
            <span class="icon">
              <ion-icon name="person-add"></ion-icon>
            </span>
            <span class="title">Groups</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Settings">
            <span class="icon">
              <ion-icon name="settings"></ion-icon>
            </span>
            <span class="title">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span class="icon">
              <ion-icon name="log-out"></ion-icon>
            </span>
            <span class="title">Sign Out</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
