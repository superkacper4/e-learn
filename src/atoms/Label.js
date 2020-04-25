import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 1.8rem;
  flex-basis: 100%;
  border-bottom: solid 1px black;
  margin: 10px 0;
  padding: 0 10px;
  background-color: ${({ green }) => (green ? '#8bc95b' : 'transparent')};
`;

const Label = ({ children, green }) => {
  return <StyledLabel green={green}>{children}</StyledLabel>;
};
export default Label;
