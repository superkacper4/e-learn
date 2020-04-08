import React from 'react';
import styled from 'styled-components';
import Logo from 'molecules/Logo';
import H2 from 'atoms/H2';
import P from 'atoms/P';

const StyledFooter = styled.footer`
  /* height: 150px; */
  width: 100%;
  background-color: #cf7a7a;
  color: #d6d6d6;
  padding: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <H2>Kontakt:</H2>
      <P>ul. Kolejowa xx</P>
      <P>nr tel.: 490 230 53</P>

      <Logo />
    </StyledFooter>
  );
};

export default Footer;
