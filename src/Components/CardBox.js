import React from "react";

function CardBox() {
  return (
    <div class="cardbox">
      <div class="card">
        <div>
          <div class="numbers">1,504</div>
          <div class="cardName">Recent Pending</div>
        </div>
        <div class="iconBox">
          <ion-icon name="quote"></ion-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="numbers">532</div>
          <div class="cardName">Recent Recieved</div>
        </div>
        <div class="iconBox">
          <ion-icon name="quote"></ion-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="numbers">4</div>
          <div class="cardName">Groups</div>
        </div>
        <div class="iconBox">
          <ion-icon name="quote"></ion-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="numbers">3</div>
          <div class="cardName">Pending Payments</div>
        </div>
        <div class="iconBox">
          <ion-icon name="quote"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default CardBox;
