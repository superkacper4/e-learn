import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from 'molecules/Logo';
import { breakpoints } from 'theme/breakpoints';

const StyledNav = styled.nav`
  background-color: #cf7a7a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 5;
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 2rem;
  text-decoration: none;
  padding: 10px;

  &.active {
    color: #d6d6d6;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.5rem;
  }
`;

const StyledLogo = styled(Logo)`
  flex-basis: 50%;
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledLogo />
      <div>
        <StyledNavLink onClick={() => window.scroll(0, 0)} exact to="/">
          Start
        </StyledNavLink>
        <StyledNavLink onClick={() => window.scroll(0, 0)} to="/learn">
          Learn
        </StyledNavLink>
      </div>
    </StyledNav>
  );
};
export default Nav;
