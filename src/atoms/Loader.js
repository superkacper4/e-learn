import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: #cf7a7a;
  animation: loader 1s 0.4s ease 1 both;

  @keyframes loader {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100vw);
    }
  }
`;

const StyledDot = styled.div`
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: dot 1.4s 1 both ease;

  @keyframes dot {
    0% {
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: white;
    }
    70% {
      transform: translate(-120px, -50%);
      border-radius: 50%;
      background-color: white;
      border-radius: 0;
    }
    100% {
      transform: translate(50px, -50px);
      background-color: #cf7a7a;
    }
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <StyledDot />
    </StyledLoader>
  );
};

export default Loader;
