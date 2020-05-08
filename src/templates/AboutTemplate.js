import React from 'react';
import styled from 'styled-components';
// import Wrapper from 'atoms/Wrapper';
import meImg from 'assets/me.png';
import H2 from 'atoms/H2';
import H3 from 'atoms/H3';
import P from 'atoms/P';
import { breakpoints } from 'theme/breakpoints';

const StyledWrapper = styled.section`
  margin: 0;
  padding: 20px 0;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d6d6d6;
  display: flex;
  flex-wrap: wrap;
`;

const StyledDiv = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media ${breakpoints.laptopL} {
    flex-direction: row;
    width: 60%;
  }
`;

// const StyledDiv = styled.div`
//     background-color: #cf7a7a;
//     height: 70%;
//     width: 40%;
//     position: absolute;
//     top: 10%;
//     right: 10%;
//     margin: 0%;
//     padding: 0%;
// `;

const StyledImg = styled.img`
  /* z-index: 2; */
  height: 70vw;
  width: 70vw;
  /* flex-basis: 40%; */
  /* position: relative;
    top: 10%;
    right: 0; */
  margin: 0;
  padding: 0;

  @media ${breakpoints.laptop} {
    height: 500px;
    width: 520px;
    margin-left: 20px;
  }
`;

const AboutTemplate = () => {
  return (
    <StyledWrapper>
      <H2>Dzień dobry!</H2>
      <H3>Nazywam się Naruto Uzumaki</H3>
      <StyledDiv>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </P>
        <StyledImg src={meImg} />
      </StyledDiv>
    </StyledWrapper>
  );
};

export default AboutTemplate;
