import React from 'react';
import styled from 'styled-components';
import Wrapper from 'atoms/Wrapper';
import startImg from 'assets/start.jpg';
import H2 from 'atoms/H2';
import Button from 'atoms/Button';

const StyledWrapper = styled(Wrapper)`
  background: url(${startImg}) no-repeat center center;
  background-size: cover;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #444;
    opacity: 0.6;
  } */
`;

const StyledH1 = styled.h1`
  font-size: 5rem;
  color: white;
  padding: 0;
  margin: 0 0 10px 0;
  /* z-index:2; */
`;

const StyledH2 = styled(H2)`
  color: white;
  font-size: 3rem;
  /* z-index: 2; */
  margin-bottom: 10px;
  border-bottom: none;
`;

const StyledButton = styled(Button)`
  /* position: relative; */
  /* z-index: 2; */

  padding: 0 0 20px 0;
`;

const StartTemplate = () => {
  return (
    <StyledWrapper>
      <StyledH1>E-learn</StyledH1>
      <StyledH2>Ucz się razem z nami!</StyledH2>
      <StyledButton>Zaczynamy!</StyledButton>
    </StyledWrapper>
  );
};

export default StartTemplate;
