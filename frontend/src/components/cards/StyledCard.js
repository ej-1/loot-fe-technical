import styled from 'styled-components';

const StyledCard = styled.div`
  font-family: Arial;
  border-radius: 50px;

  ${props => props.standard && `
  width: 180px;
  height: 250px;
  `}

  ${props => props.details && `
  width: 380px;
  height: 300px;
`}
`

const CardImageContainer = styled.div`
  height: 50%;
  position: relative;
  text-align: center;
  border-radius: 5px;
`

/* rename later*/
  const StyledImg = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  filter: brightness(80%);
  `

  const ContentContainerCard = styled.div`
  height: 42%;
  position: relative;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  color: #d6d6d6;
  `

/*
const CardContentContainer = styled.div`

`}

const CardDetailsContentContainer = styled.div`

`}
*/

const ProgressBar = styled.div`
  position: absolute;
  top: 40px;
  border: 0.5px solid #f3f3f3;
  border-radius: 2px;
  background: #f7f7f7;
  height: 7px;
  right: 5%;
  left: 5%;
`

const AmountLimit = styled.div`
  font-size: 8px;
  position: absolute;
  top: 55px;
  right: 5%;
  color: #5d5d5d;
`

const BreadcrumbButton = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: #f6cb47;
  color: #fff;
  z-index: 1;
  right: 20px;
  top: -10px;
  border-radius: 5px;
  width: 22px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  text-align: center;
`

/* for details text-align: right;*/
const AmountUsed = styled.div`
  position: absolute;
  top: 15%;
  left: 7%;
  font-family: "Lato",sans-serif;
  color: #5d5d5d;
  font-size: 15px;
`


const EndDate = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 11px;
  font-family: $font-stack;
`





export { StyledCard, CardImageContainer, StyledImg, ContentContainerCard, ProgressBar, AmountLimit, BreadcrumbButton, AmountUsed, EndDate }