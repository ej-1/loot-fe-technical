import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { amountUsed, amountLimit, progressBar, endDate } = {
      amountUsed: 600,
      amountLimit: 1000,
      progressBar: 0.3,
      endDate: "2018-09-01"
    };
    return (
      <div className="card">
        <div className="image-container">
          CARD!
          <img
            className="card-image"
            src="src/components/cards/new_york.jpg"
            alt="Smiley face"
          />
        </div>
        <div className="content-container">
          <div className="amount">{amountUsed}</div>
          <div className="progress-bar">{progressBar}</div>
          <div className="amount">{amountLimit}</div>
          <div className="end-date">{endDate}</div>
        </div>
      </div>
    );
  }
}

export default Card;
