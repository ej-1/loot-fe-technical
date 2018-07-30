import styled from "styled-components";

const Button = styled.div`
  color: #fff;
  border: 0;
  border-radius: 2px;
  background: #00bbc6;
  width: 90px;
  font-size: 10px;
  padding: 5px 15px 5px 15px;
  text-align: center;
  background: #54b8c3;
  display: inline;
  ${props => props.completed && "background: #54b8c3;"};
`;

export { Button };
