import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'theme/breakpoints';

const StyledLabel = styled.label`
  font-size: 1.8rem;
  flex-basis: 100%;
  border-bottom: solid 1px black;
  padding: 10px;
  background-color: ${({ green }) => (green ? '#8bc95b' : 'transparent')};

  @media ${breakpoints.mobileL} {
    font-size: 2.3rem;
  }
`;

const Label = ({ children, green }) => {
  return <StyledLabel green={green}>{children}</StyledLabel>;
};
export default Label;
