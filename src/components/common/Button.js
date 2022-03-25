import styled, { css } from "styled-components";

const sizeStyle = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }
};

const Button = styled.button`
  color: white;
  background: ${(p) => (p.secondary ? p.theme.secondaryColor : p.theme.primaryColor)};
  font-weight: bold;
  ${sizeStyle}
  box-shadow: none;
  border-radius: 4px;
  width: 100%;
  display: block;
  white-space: none;
  padding: 8px;
  margin: 8px;
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
