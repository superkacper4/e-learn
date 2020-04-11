import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid black;
`;

const Input = () => {
  return <StyledInput type="checkbox" />;
};

export default Input;
