import React, { useState } from 'react';
import styled from 'styled-components';

const StyledHideBar = styled.button`
  width: 100%;
  height: 5vh;
  font-size: 2.5rem;
  z-index: 2;
  margin: 0;
  padding: 0;
  border: none;
  background-color: grey;
`;

const StyledLearnChaptersNav = styled.div`
  background-color: #8a6d6d;
  padding: 0;
  flex-basis: 100%;
  transition: 0.5s;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-200px)')};
  position: absolute;
  top: 15vh;
  left: 0;
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
  const [open, setOpen] = useState(false);

  const onPress = (value) => {
    setClickedChapter(value);
    setOpen(!open);
  };
  return (
    <>
      <StyledHideBar onClick={() => setOpen(!open)}>Rozwiń</StyledHideBar>
      <StyledLearnChaptersNav open={open}>
        {subjects.map((subject) => (
          <StyledLearnChaptersItem key={subject.key} onClick={() => onPress(subject.title)}>
            {subject.title}
          </StyledLearnChaptersItem>
        ))}
      </StyledLearnChaptersNav>
    </>
  );
};

export default LearnChaptersNav;
