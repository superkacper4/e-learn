import React from 'react';
import styled from 'styled-components';
import Wrapper from 'atoms/Wrapper';
import startImg from 'assets/start.jpg';
import H2 from 'atoms/H2';

const StyledWrapper = styled(Wrapper)`
  background: url(${startImg}) no-repeat center center;
  background-size: cover;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
`;

const StyledH1 = styled.h1`
  font-size: 5rem;
  color: white;
  padding: 0;
  margin: 0 0 10px 0;
`;

const StyledH2 = styled(H2)`
  color: white;
  font-size: 3rem;
  margin-bottom: 10px;
  border-bottom: none;
`;

const StyledArrow = styled.div`
  height: 20px;
  width: 20px;
  animation: arrow 1s ease infinite both alternate;
  padding: 0 0 20px 0;
  font-size: 5rem;
  color: white;

  @keyframes arrow {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(20px);
    }
  }
`;

const StartTemplate = () => {
  return (
    <StyledWrapper>
      <StyledH1>E-learn</StyledH1>
      <StyledH2>Ucz się razem z nami!</StyledH2>
      <StyledArrow>↓</StyledArrow>
    </StyledWrapper>
  );
};

export default StartTemplate;
