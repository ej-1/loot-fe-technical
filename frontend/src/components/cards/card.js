import React, { Component } from "react";
import "./card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      imageText,
      amountUsed,
      amountLimit,
      progressBar,
      progressFilledColor,
      endDate
    } = {
      imageText: "NEW YORK",
      amountUsed: "£ 600.00",
      amountLimit: "£ 1000.00",
      progressBar: "40",
      progressFilledColor: "#f6cb47",
      endDate: "By 15th June 2018"
    };
    return (
      <div className="card">
        <div className="image-container">
          <img
            className="card-image"
            src="src/components/cards/new_york.jpg"
            alt="card-image"
          />
          <p>{imageText}</p>
        </div>
        <div className="content-container">
          <div className="details-button"> ...</div>
          <div className="amount-used">{amountUsed}</div>
          <div className="progress-bar-container">
            <Progress progressFilledColor progress />
            <div className="progress-bar">
              <div
                style={{
                  background: "#f6cb47"
                }}
                className="progress"
              />
            </div>
            <div className="amount-limit">{amountLimit}</div>
          </div>

          <div className="end-date">{endDate}</div>
        </div>
      </div>
    );
  }
}

export default Card;
