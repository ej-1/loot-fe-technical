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
    console.log(this.props);
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
      endDate,
      cardStyle
    } = this.props;

    return (
      <div className="card" style={cardStyle}>
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
