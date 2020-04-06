import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from 'molecules/Logo';

const StyledNav = styled.nav`
  background-color: #cf7a7a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 5;
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 3.5rem;
  text-decoration: none;
  padding: 10px;
`;

const StyledLogo = styled(Logo)`
  flex-basis: 50%;
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledLogo />
      <div>
        <StyledNavLink to="/">Start</StyledNavLink>
        <StyledNavLink to="/learn">Learn</StyledNavLink>
      </div>
    </StyledNav>
  );
};

export default Nav;
