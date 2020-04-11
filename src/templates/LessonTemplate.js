import React from 'react';
import styled from 'styled-components';
import Test from 'organisms/Test';
import Wrapper from 'atoms/Wrapper';
import H2 from 'atoms/H2';
import P from 'atoms/P';
import Img from 'atoms/Img';

const StyledWrapper = styled(Wrapper)`
  flex-basis: 100%;
`;

const LearnPage = ({ clickedChapter, subjects }) => {
  return (
    <StyledWrapper>
      {subjects
        .filter((subject) => subject.title === clickedChapter)
        .map((subject) => {
          return (
            <>
              <H2>{subject.title}</H2>
              <P>{subject.content}</P>
              <Img src={subject.img} />
              <P>{subject.secondContent}</P>
              <Test questions={subject.test} />
            </>
          );
        })}
    </StyledWrapper>
  );
};

export default LearnPage;
