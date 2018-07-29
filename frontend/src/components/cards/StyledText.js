import styled from 'styled-components';

const fontStack = '"Lato", sans-serif;'

const Header1 = styled.div`
  font-size: 15px;
  font-family: ${fontStack};

  ${props => props.right && `
  text-align: right;
  `}

  ${props => props.left && `
  text-align: left;
  `}

  ${props => props.grey && 'color: #717171;'}
`

const P1 = styled.div`
  font-size: 12px;
  font-family: ${fontStack};

  ${props => props.right && `
  text-align: right;
  `}

  ${props => props.left && `
  text-align: left;
  `}

  ${props => props.grey && 'color: #717171;'}
`

export { Header1, P1 }