import React from 'react';
import styled from 'styled-components';
import Wrapper from 'atoms/Wrapper';
import startImg from 'assets/start.jpg';
import H2 from 'atoms/H2';

const StyledWrapper = styled(Wrapper)`
  background: url(${startImg}) no-repeat center center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #444;
    opacity: 0.6;
  }
`;

const StyledH1 = styled.h1`
  font-size: 5rem;
  color: white;
  padding: 0;
  margin: 0 0 10px 0;
`;

const StyledH2 = styled(H2)`
  color: white;
`;

const StartPage = () => {
  return (
    <StyledWrapper>
      <StyledH1>E-learn</StyledH1>
      <StyledH2>Ucz się razem z nami!</StyledH2>
    </StyledWrapper>
  );
};

export default StartPage;
