import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLogo = styled(NavLink)`
  @import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');
  margin: 0;
  padding: 0;
  font-size: 5rem;
  z-index: 1;
  font-family: 'Leckerli One', cursive;
  text-decoration: none;
  color: black;
`;

const Logo = () => {
  return <StyledLogo to="/">E-learn</StyledLogo>;
};

export default Logo;
