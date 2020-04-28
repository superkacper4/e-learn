import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from 'theme/breakpoints';

const StyledLogo = styled(Link)`
  @import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-family: 'Leckerli One', cursive;
  text-decoration: none;
  color: black;

  @media ${breakpoints.tablet} {
    font-size: 3.5rem;
  }
`;

const Logo = () => {
  return (
    <StyledLogo onClick={() => window.scroll(0, 0)} to="/">
      E-learn
    </StyledLogo>
  );
};

export default Logo;
