import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <div className="amount">{this.props.amountUsed}</div>
          <div className="progress-bar">{this.props.progress}</div>
          <div className="amount">{this.props.amountLimit}</div>
          <div className="end-date">{this.props.endDate}</div>
        </div>
      </div>
    );
  }
}

export default Card;
