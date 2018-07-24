import React, { Component, Fragment } from "react";
import "./card.scss";

const getImageContent = (imageUrl, imageText) => {
  return (
    <Fragment>
      <img className="card-image" src={imageUrl} alt="card-image" />
      <p>{imageText}</p>
    </Fragment>
  );
};

const getCardContent = (amountUsed, endDate, getElement, ...getElementArgs) => {
  return (
    <Fragment>
      <div className="details-button"> ...</div>
      <div className="amount-used">{amountUsed}</div>
      {getElement(...getElementArgs)}
      <div className="end-date">{endDate}</div>
    </Fragment>
  );
};

const getProgressBar = (progressBar, amountLimit) => {
  return (
    <Fragment>
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div style={{ width: `${progressBar}%` }} className="progress" />
        </div>
        <div className="amount-limit">{amountLimit}</div>
      </div>
    </Fragment>
  );
};

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      imageText,
      imageUrl,
      amountUsed,
      amountLimit,
      progressBar,
      endDate
    } = {
      imageUrl: "src/components/cards/new_york.jpg",
      imageText: "NEW YORK",
      amountUsed: "£ 600.00",
      amountLimit: "£ 1000.00",
      progressBar: "40",
      endDate: "By 15th June 2018"
    };

    return (
      <div className="card">
        <div className="image-container">
          {getImageContent(imageUrl, imageText)}
        </div>
        <div className="content-container">
          {getCardContent(amountUsed, endDate, getProgressBar, progressBar)}
        </div>
      </div>
    );
  }
}

export default Card;
