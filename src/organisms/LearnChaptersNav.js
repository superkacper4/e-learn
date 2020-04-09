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

const LearnChaptersNav = ({ setClickedChapter, subjects }) => {
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
