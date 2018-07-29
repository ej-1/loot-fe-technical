import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import '../cards/card.css'
import { StyledCard, CardImageContainer, StyledImg, ContentContainerCard, ProgressBar, AmountLimit, BreadcrumbButton, AmountUsed, EndDate, ContentContainerCardDetails } from '../cards/StyledCard'
import { Header1, P1 } from '../cards/StyledText'
import { Button } from '../cards/StyledButton'

const getImageContent = (imageUrl, title) => {
  return (
    <StyledImg>
      <img class="card-image" src={imageUrl} alt="card-image" />
      <p>{title}</p>
    </StyledImg>
  );
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

  return (
    <ContentContainerCard>
      {breadcrumbButton && <BreadcrumbButton>
        <Link to='/details' to={{ pathname: '/details', cardDetails:  { ...cardDetailsClone }}} >...</Link>
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
  description,
  buttonText
) => {

  return (
    <ContentContainerCardDetails>
      <div className="card-details-content-top">
        {getButtonElement(buttonText)}
      </div>
      <div className="card-details-content-middle">
        <div className="card-details-content-left">
          <Header1>{title}</Header1>
          <P1 grey>{description}</P1>
        </div>
        <div className="card-details-content-right">
          <Header1>{amount}</Header1>
          <P1 grey>/ {balance}</P1>
        </div>
      </div>
      <div className="card-details-content-bottom">
        <P1 right>{bottomText}</P1>
      </div>
    </ContentContainerCardDetails>
  );
};

const getProgress = (amount, progress, progressFilledColor) => {
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

const getButtonElement = (text) => {
  return <Button completed>
    {text}
  </Button>
};

const cardStandard = (props) => {
  const {
    title,
    imageUrl,
    status,
    balance,
    amount,
    breadcrumbButton,
    progress,
    progressFilledColor,
    bottomText,
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
    title,
    imageUrl,
    description,
    balance,
    amount,
    progress,
    progressFilledColor,
    bottomText,
    buttonText
  } = props;

  return <StyledCard details>
    <CardImageContainer>
      {getImageContent(imageUrl)}
    </CardImageContainer>

    {getCardDetailsContent(
      balance,
      amount,
      bottomText,
      title,
      description,
      buttonText
    )}
  </StyledCard>
}

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
