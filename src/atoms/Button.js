import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  color: ${({ black }) => (black ? 'black' : 'white')};
  border: 2px solid ${({ black }) => (black ? 'black' : 'white')};
  font-size: 2.3rem;
  display: block;
  transition: background-color 0.5s ease, color 0.5s ease;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: ${({ black }) => (black ? 'black' : 'white')};
    color: ${({ black }) => (black ? 'white' : 'black')};
  }
`;

const Button = ({ children, black, fn }) => {
  const buttonFn = (e) => {
    e.preventDefault();
    fn();
  };
  return (
    <StyledButton black={black} fn={fn} onClick={buttonFn}>
      {children}
    </StyledButton>
  );
};

export default Button;
