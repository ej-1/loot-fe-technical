import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import '../cards/card.css'

const getImageContent = (imageUrl, title) => {
  return (
    <Fragment>
      <img className="card-image" src={imageUrl} alt="card-image" />
      <p>{title}</p>
    </Fragment>
  );
};

/* REMOVE THIS PLACEHOLDER*/

const cardDetailsStyle = {
  width: "380px",
  height: "300px"
};

const getCardContent = (
  balance,
  amount,
  bottomText,
  breadcrumbButton,
  getElement,
  getElementArgs,
  ...cardDetails
) => {
  const cardDetailsClone = Object.assign({}, ...cardDetails)
  cardDetailsClone.componentType = 'card-details';
  cardDetailsClone.breadcrumbButton = false;
  cardDetailsClone.cardStyle = cardDetailsStyle;

  return (
    <div className="content-container-card">
      {breadcrumbButton && <div className="details-button">
      <Link to='/details' to={{ pathname: '/details', cardDetails:  { componentTyp: 'card-details', breadcrumbButton: false, cardStyle: cardDetailsStyle, ...cardDetailsClone }}} >...</Link>
      </div>}
      <div className="amount-used">{balance}</div>
      {getElement(amount, ...getElementArgs)}
      {/* the mysterious element returned from getElement is a progress bar most of the time. */}
      <div className="end-date">{bottomText}</div>
    </div>
  );
};

const getCardDetailsContent = (
  balance,
  amount,
  bottomText,
  title,
  description
) => {
  return (
    <div className="content-container-details">
      <div className="card-details-content-top">
        {getButtonElement(buttonArguments)}
      </div>
      <div className="card-details-content-middle">
        <div className="card-details-content-left">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
        <div className="card-details-content-right">
          <p className="amount-used">{amount}</p>
          <p className="amount-limit">/ {balance}</p>
        </div>
      </div>
      <div className="card-details-content-bottom">
        <p className="end-date">{bottomText}</p>
      </div>
    </div>
  );
};

const getProgress = (amount, progress, progressFilledColor) => {
  console.log("getProgress WHAT IS THE COLOR", progressFilledColor)
  return (
    <Fragment>
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            style={{
              width: `${progress}%`,
              background: `${progressFilledColor}`
            }}
            className="progress"
          />
        </div>
        <div className="amount-limit">{amount}</div>
      </div>
    </Fragment>
  );
};

const getButtonElement = () => {
  return <button type="btn" className="button">Release funds</button>
  ;
};

const buttonArguments = {};

class CardTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      componentType,
      title,
      imageUrl,
      description,
      status,
      balance,
      amount,
      breadcrumbButton,
      progress,
      progressFilledColor,
      bottomText,
      cardStyle
    } = this.props;

    return (
      <div className="card" style={cardStyle}>
        <div className="image-container">
          {getImageContent(imageUrl, title)}
        </div>

        {componentType === 'card-details' && getCardDetailsContent(
          balance,
          amount,
          bottomText,
          title,
          description,
          this.props
        )}

        {componentType === 'card' && getCardContent(
          balance,
          amount,
          bottomText,
          breadcrumbButton,
          getProgress,
          [progress, progressFilledColor[status]],
          this.props
        )}
      </div>
    );
  }
}

export default CardTemplate;
