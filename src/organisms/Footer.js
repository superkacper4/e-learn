import React from 'react';
import styled from 'styled-components';
import Logo from 'molecules/Logo';
import H2 from 'atoms/H2';
import P from 'atoms/P';
import { breakpoints } from 'theme/breakpoints';

const StyledFooter = styled.footer`
  height: 30vh;
  width: 100%;
  background-color: #cf7a7a;
  color: #d6d6d6;
  padding: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.laptop} {
    flex-basis: ${({ learn }) => (learn ? '70%' : '100%')};
    margin-left: ${({ learn }) => (learn ? '30%' : '0')};
  }
`;

const StyledP = styled(P)`
  text-align: center;
  width: 100%;
`;

const Footer = ({ learn }) => {
  return (
    <StyledFooter learn={learn}>
      <H2>Kontakt:</H2>
      <StyledP>ul. Kolejowa xx</StyledP>
      <StyledP>nr tel.: 490 230 53</StyledP>

      <Logo />
    </StyledFooter>
  );
};

export default Footer;
