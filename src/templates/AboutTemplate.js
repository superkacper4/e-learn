import React from 'react';
import styled from 'styled-components';
import Wrapper from 'atoms/Wrapper';
import aboutImg from 'assets/about.png';
import H2 from 'atoms/H2';
import H3 from 'atoms/H3';
import P from 'atoms/P';

const StyledWrapper = styled(Wrapper)`
  margin: 0;
  padding: 20px 0;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 500px;
  width: 250px;
  /* flex-basis: 40%; */
  /* position: relative;
    top: 10%;
    right: 0; */
  margin: 0%;
  padding: 0%;
`;

const AboutTemplate = () => {
  return (
    <StyledWrapper>
      <H2>Dzień dobry!</H2>
      <H3>Nazywam się Naruto Uzumaki</H3>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </P>
      {/* <StyledDiv /> */}
      <StyledImg src={aboutImg} />
    </StyledWrapper>
  );
};

export default AboutTemplate;
