import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import '../cards/card.css'
import { StyledCard, CardImageContainer, StyledImg, ContentContainerCard, ProgressBar, AmountLimit, BreadcrumbButton, TextTopLeft, TextBottomCenter, ContentContainerCardDetails } from '../cards/StyledCard'
import { Header1, P1 } from '../cards/StyledText'
import { Button } from '../cards/StyledButton'

const getImageContent = (imageUrl, title) => {
  return (
    <StyledImg>
      {/* Wanted to use a styledcomponent or other solution and pass in url as prop, but could not get it to work for now.
        Also images get stretched. Need to add fix for that on container.
      */}
      <img class="card-image" src={imageUrl} alt="card-image" />
      <p>{title}</p>
    </StyledImg>
  );
};

const getCardStandardContent = (
  getElement,
  getElementArgs,
  ...others
) => {
  const props = Object.assign({}, ...others)
  props.componentType = 'card-details';

  return (
    <ContentContainerCard key={props.id}>
      {props.breadcrumbButton && <BreadcrumbButton>
        <Link to='/details' to={{ pathname: '/details', id:  props.id }} >...</Link>
      </BreadcrumbButton>}
      <TextTopLeft>{props.balance}</TextTopLeft>
      {getElement(props.amount, ...getElementArgs)}
      {/* the mysterious element returned from getElement is a progress bar most of the time. */}
      <TextBottomCenter>{props.bottomText}</TextBottomCenter>
    </ContentContainerCard>
  );
};

const getCardDetailsContent = (getElement, getElementArgs, getElement2, getElementArgs2, props) => {
  const { id,
    balance,
    amount,
    bottomText,
    title,
    description,
    progress} = props;

  return (
    <ContentContainerCardDetails key={id}>
      {getElement2(amount, progress, ...getElementArgs2)} look here
      <div className="card-details-content-top">
        {getElement(getElementArgs)}
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

const getProgressBar = (amount, progress, progressFilledColor, type) => {
  const children =  <div
                      style={{
                        width: `${progress}%`,
                        background: `${progressFilledColor}`,
                      }}
                      className="progress"
                    />

  return (
    <Fragment>
      {type === 'thin' && getProgressBarThin(children)}
      {type === 'medium' && getProgressBarMedium(children)}
      <AmountLimit>{amount}</AmountLimit>
    </Fragment>
  );
};

const getProgressBarMedium = (children) => {
  return <ProgressBar medium>
    {children}
  </ProgressBar>
}

const getProgressBarThin = (children) => {
  return <ProgressBar thin>
    {children}
  </ProgressBar>
}


const getButtonElement = (text) => {
  return <Button completed>
    {text}
  </Button>
};

const cardStandard = (getContent, getElement, getElementArgs, props) => {
  const {
    title,
    imageUrl,
    progress,
  } = props;

  return <StyledCard standard>
    <CardImageContainer>
      {getImageContent(imageUrl, title)}
    </CardImageContainer>

    {getContent(
      getElement,
      [progress, ...getElementArgs],
      props
    )}
  </StyledCard>
}

const cardDetails = (getContent, getElement, getElementArgs, getElement2, getElementArgs2, props) => {
  return <StyledCard details>
    <CardImageContainer>
      {getImageContent(props.imageUrl)}
    </CardImageContainer>

    {getContent(
     getElement,
     getElementArgs,
     getElement2,
     getElementArgs2,
     props
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
          getCardDetailsContent,
          getButtonElement,
          this.props.buttonText,
          getProgressBar,
          [this.props.progressFilledColor[this.props.status], 'thin'],
          this.props
        )}
        {this.props.componentType === 'card' && cardStandard(
          getCardStandardContent,
          getProgressBar,
          [this.props.progressFilledColor[this.props.status], 'medium'],
          this.props
        )}
      </Fragment>
    );
  }
}

export default CardTemplate;
