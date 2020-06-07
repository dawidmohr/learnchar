import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #ffeedd;
  border: 1px #cebdac solid;
  width: auto;
  height: auto;
  border-radius: 12px;
  padding: 8px 16px;
  outline: none;

  ${({ submit }) =>
    submit &&
    css`
      background-color: #ff4444;
    `}
`;

export default Button;
