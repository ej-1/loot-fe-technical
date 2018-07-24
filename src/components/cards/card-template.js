import React, { Component, Fragment } from "react";
import "./card.scss";

const getImageContent = (imageUrl, imageText) => {
  return (
    <Fragment>
      <img className="card-image" src={imageUrl} alt="card-image" />
      <p>{imageText}</p>
      {/* <p>{imageText}</p> ...could be turned into a function */}
    </Fragment>
  );
};

const getCardContent = (
  amountUsed,
  amountLimit,
  endDate,
  showDetailsButton,
  getElement,
  getElementArgs
) => {
  return (
    <Fragment>
      {showDetailsButton && <div className="details-button"> ...</div>}
      <div className="amount-used">{amountUsed}</div>
      {getElement(amountLimit, ...getElementArgs)}
      {/* the mysterious element returned is a progress bar most of the time. */}
      <div className="end-date">{endDate}</div>
    </Fragment>
  );
};

const getProgressBar = (amountLimit, progressBar, progressFilledColor) => {
  return (
    <Fragment>
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            style={{
              width: `${progressBar}%`,
              background: `${progressFilledColor}`
            }}
            className="progress"
          />
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
      showDetailsButton,
      progressBar,
      progressFilledColor,
      endDate
    } = {
      imageUrl: "src/components/cards/new_york.jpg",
      imageText: "NEW YORK",
      amountUsed: "£ 600.00",
      amountLimit: "£ 1000.00",
      showDetailsButton: true,
      progressBar: "40",
      progressFilledColor: "#f6cb47",
      endDate: "By 15th June 2018"
    };

    return (
      <div className="card">
        <div className="image-container">
          {getImageContent(imageUrl, imageText)}
        </div>
        <div className="content-container">
          {getCardContent(
            amountUsed,
            amountLimit,
            endDate,
            showDetailsButton,
            getProgressBar,
            [progressBar, progressFilledColor]
          )}
        </div>
      </div>
    );
  }
}

export default Card;
