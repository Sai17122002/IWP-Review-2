import React from "react";
import Header from "./Header";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="parent-homepage">
      <Header />
      <section class="home">
        <h1 class="heading">
          <span>Home</span>
        </h1>
      </section>
      <div class="boxes">
        <div>
          <h1>
            <span>Bill Splitter</span>
          </h1>
          <p class="boxes-heading">
            <span>
              Not everyone wants to spend the same amount on a single evening or
              has the same budget. We want to ensure that costs are distributed
              fairly and that everyone is fully aware of their respective
              obligations.
            </span>
          </p>
        </div>
        <div>
          <h1>
            <span>Manage debts between friends judiciously</span>
          </h1>
          <p class="boxes-heading">
            <span>
              Sharing bills with friends is made simple, with our website. Free
              of charge, no registration required.
            </span>
          </p>
        </div>
        <div>
          <h1>
            <span>Making a pact</span>
          </h1>
          <p class="boxes-heading">
            <span>
              Then, everyone can see what they owe and to whom they owe it. They
              can resolve their differences and resume enjoying life.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
