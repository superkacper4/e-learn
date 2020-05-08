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

  @media ${breakpoints.laptop} {
    transform: scale(0);
  }
`;

const StyledLearnChaptersNav = styled.div`
  background-color: #8a6d6d;
  padding: 0;
  width: 100%;
  transition: transform 0.5s;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-200px)')};
  position: absolute;
  top: 15vh;
  left: 0;

  @media ${breakpoints.tablet} {
    top: 17vh;
  }

  @media ${breakpoints.laptop} {
    width: 30%;
    transform: translateY(0);
    position: fixed;
    top: 10vh;
    height: 100vh;
    border-right: 1px solid black;
    border-top: 1px solid black;
  }
`;
const StyledLearnChaptersItem = styled.button`
  width: 100%;
  border: none;
  border-bottom: solid 1px black;
  font-size: 2.5rem;
  background-color: transparent;
  transition: background-color 0.5s;
  @media ${breakpoints.tablet} {
    font-size: 3rem;
  }

  @media ${breakpoints.laptop} {
    padding: 10px 0;
    border-bottom: solid 1px black;
    cursor: pointer;
    &:hover {
      background-color: #d6d6d6;
    }
  }
`;

const LearnChaptersNav = ({ setClickedChapter, subjects }) => {
  const [open, setOpen] = useState(false);

  const onPress = (value) => {
    window.scrollTo(0, 0);
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
