import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'theme/breakpoints';

const StyledLabel = styled.label`
  font-size: 1.8rem;
  flex-basis: 100%;
  border-bottom: solid 1px black;
  padding: 10px;
  background-color: ${({ green }) => (green ? '#8bc95b' : 'transparent')};
  transition: background-color 0.5s;

  @media ${breakpoints.mobileL} {
    font-size: 2.3rem;
  }

  @media ${breakpoints.laptop} {
    cursor: pointer;
    &:hover {
      background-color: #e3d1d1;
    }
  }
`;

const Label = ({ children, green }) => {
  return <StyledLabel green={green}>{children}</StyledLabel>;
};
export default Label;
