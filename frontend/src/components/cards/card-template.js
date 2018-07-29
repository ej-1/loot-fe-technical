import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import '../cards/card.css'
import { StyledCard, CardImageContainer, StyledImg, ContentContainerCard, ProgressBar, AmountLimit, BreadcrumbButton, AmountUsed, EndDate } from '../cards/StyledCard'

const getImageContent = (imageUrl, title) => {
  return (
    <StyledImg>
    <img class="card-image" src={imageUrl} alt="card-image" />
      <p>{title}</p>
    </StyledImg>
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
    <ContentContainerCard>
      {breadcrumbButton && <BreadcrumbButton>
        <Link to='/details' to={{ pathname: '/details', cardDetails:  { componentTyp: 'card-details', breadcrumbButton: false, cardStyle: cardDetailsStyle, ...cardDetailsClone }}} >...</Link>
      </BreadcrumbButton>}
      <AmountUsed>{balance}</AmountUsed>
      {getElement(amount, ...getElementArgs)}
      {/* the mysterious element returned from getElement is a progress bar most of the time. */}
      <EndDate>{bottomText}</EndDate>
    </ContentContainerCard>
  );
};

const getCardDetailsContent = (
  balance,
  amount,
  bottomText,
  title,
  description
) => {
  console.log("what is here", description);
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
      <ProgressBar>
        <div
            style={{
              width: `${progress}%`,
              background: `${progressFilledColor}`,
              height: '100%',
              borderRadius: '2px',
            }}
            className="progress"
          />
      </ProgressBar>
      <AmountLimit>{amount}</AmountLimit>
    </Fragment>
  );
};

const getButtonElement = () => {
  return <button type="btn" className="button">Release funds</button>
  ;
};

const cardStandard = (props) => {

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
  } = props;

  return <StyledCard standard>
    <CardImageContainer>
      {getImageContent(imageUrl, title)}
    </CardImageContainer>

    {getCardContent(
      balance,
      amount,
      bottomText,
      breadcrumbButton,
      getProgress,
      [progress, progressFilledColor[status]],
      props
    )}
  </StyledCard>
}

const cardDetails = (props) => {
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
  } = props;

  return <StyledCard details>
    <CardImageContainer>
      {getImageContent(imageUrl, title)}
    </CardImageContainer>

    {getCardDetailsContent(
      balance,
      amount,
      bottomText,
      title,
      description
    )}
  </StyledCard>
}


const buttonArguments = {};

class CardTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {this.props.componentType === 'card-details' && cardDetails(
          this.props
        )}
        {this.props.componentType === 'card' && cardStandard(
          this.props
        )}
      </Fragment>
    );
  }
}

export default CardTemplate;
