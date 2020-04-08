import React from 'react';
import styled from 'styled-components';

const StyledLearnChaptersNav = styled.div`
  background-color: #8a6d6d;
  padding: 0;
  flex-basis: 100%;
  padding-top: 10%;
`;
const StyledLearnChaptersItem = styled.button`
  width: 100%;
  border: none;
  margin: 0 0 10px 0;
  border-bottom: solid 1px black;
  font-size: 2.5rem;
  background-color: transparent;
`;

const subjects = [
  {
    key: 0,
    title: 'To Be',
  },
  {
    key: 1,
    title: 'Or not to be',
  },
  {
    key: 2,
    title: 'Present Simple',
  },
  {
    key: 3,
    title: 'Present Continous',
  },
  {
    key: 4,
    title: 'Present Past ',
  },
  {
    key: 5,
    title: 'Present Perfect',
  },
];

const LearnChaptersNav = ({ setClickedChapter }) => {
  const onPress = (value) => {
    setClickedChapter(value);
  };
  return (
    <StyledLearnChaptersNav>
      {subjects.map((subject) => (
        <StyledLearnChaptersItem key={subject.key} onClick={() => onPress(subject.title)}>
          {subject.title}
        </StyledLearnChaptersItem>
      ))}
    </StyledLearnChaptersNav>
  );
};

export default LearnChaptersNav;
