import styled, { css } from "styled-components";

export const Button = styled.button`
  font-family: ${props => props.theme.font};
  font-size: 2rem;
  border-radius: 5px;
  /* background-color: ${props => (props.primary ? "red" : "green")} */
  /* background-color:${props => props.theme.primary} */
  ${props =>
    props.color &&
    css`
      background-color: ${props => props.theme[props.color]};
    `}
  &:hover {
    background-color: blue;
  }
`;
