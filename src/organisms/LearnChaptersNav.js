import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'theme/breakpoints';

const StyledHideBar = styled.button`
  width: 100%;
  height: 5vh;
  font-size: 2.5rem;
  z-index: 2;
  margin: 0;
  border: none;
  border-bottom: solid 1px black;
  background-color: #8a6d6d;
  @media ${breakpoints.tablet} {
    font-size: 3.5rem;
    height: 7vh;
  }
`;

const StyledLearnChaptersNav = styled.div`
  background-color: #8a6d6d;
  padding: 0;
  width: 100%;
  transition: 0.5s;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-200px)')};
  position: absolute;
  top: 15vh;
  left: 0;

  @media ${breakpoints.tablet} {
    top: 17vh;
  }
`;
const StyledLearnChaptersItem = styled.button`
  width: 100%;
  border: none;
  border-bottom: solid 1px black;
  font-size: 2.5rem;
  background-color: transparent;
  @media ${breakpoints.tablet} {
    font-size: 3rem;
  }
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
