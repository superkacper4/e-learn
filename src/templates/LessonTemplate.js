import React from 'react';
import styled from 'styled-components';
import Test from 'organisms/Test';
import Wrapper from 'atoms/Wrapper';
import H2 from 'atoms/H2';
import P from 'atoms/P';
import Img from 'atoms/Img';
import { breakpoints } from 'theme/breakpoints';

const StyledWrapper = styled(Wrapper)`
  margin: 0;
  flex-basis: 100%;
  display: flex;
  justify-content: center;

  @media ${breakpoints.laptop} {
    flex-basis: 70%;
    margin-left: 30%;
    margin-top: 0;
  }
`;

const LearnPage = ({ clickedChapter, subjects }) => {
  return (
    <>
      {subjects
        .filter((subject) => subject.title === clickedChapter)
        .map((subject) => {
          return (
            <StyledWrapper key={subject.key}>
              <H2>{subject.title}</H2>
              <P>{subject.content}</P>
              <Img src={subject.img} />
              <P>{subject.secondContent}</P>
              <Test questions={subject.test} />
            </StyledWrapper>
          );
        })}
    </>
  );
};

export default LearnPage;
