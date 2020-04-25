import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled(Link)`
  @import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-family: 'Leckerli One', cursive;
  text-decoration: none;
  color: black;
`;

const Logo = () => {
  return (
    <StyledLogo onClick={() => window.scroll(0, 0)} to="/">
      E-learn
    </StyledLogo>
  );
};

export default Logo;
