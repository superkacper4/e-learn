import React, { useState } from 'react';
import Wrapper from 'atoms/Wrapper';
import LearnChaptersNav from 'organisms/LearnChaptersNav';
import LessonTemplate from 'templates/LessonTemplate';
import Loader from 'atoms/Loader';
import toBeImg from 'assets/tobe.jpg';
import orNotToBeImg from 'assets/ornottobe.jpg';

const subjects = [
  {
    key: 0,
    title: 'To Be',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: toBeImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: {
      first: [
        {
          Q: 'Dokąd noca tutpa jeż?1',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 1,
          C: [true, true, true, false],
        },
      ],
      second: [
        {
          Q: 'Dokąd noca tutpa jeż?2',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 2,
          C: [false, true, true, false],
        },
      ],
      third: [
        {
          Q: 'Dokąd noca tutpa jeż?3',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 3,
          C: [false, true, true, true],
        },
      ],
    },
  },
  {
    key: 1,
    title: 'Or not to be',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: orNotToBeImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: {
      first: [
        {
          Q: 'Dokąd noca tutpa jeż?1',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 1,
          C: [false, true, true, false],
        },
      ],
      second: [
        {
          Q: 'Dokąd noca tutpa jeż?2',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 2,
          C: [false, true, true, false],
        },
      ],
      third: [
        {
          Q: 'Dokąd noca tutpa jeż?3',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 3,
          C: [false, true, true, false],
        },
      ],
    },
  },
  {
    key: 2,
    title: 'Present SImple',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: toBeImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: {
      first: [
        {
          Q: 'Dokąd noca tutpa jeż?1',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 1,
          C: [false, true, true, false],
        },
      ],
      second: [
        {
          Q: 'Dokąd noca tutpa jeż?2',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 2,
          C: [false, true, true, false],
        },
      ],
      third: [
        {
          Q: 'Dokąd noca tutpa jeż?3',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 3,
          C: [false, true, true, false],
        },
      ],
    },
  },
  {
    key: 3,
    title: 'xD',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: toBeImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: {
      first: [
        {
          Q: 'Dokąd noca tutpa jeż?1',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 1,
          C: [false, true, true, false],
        },
      ],
      second: [
        {
          Q: 'Dokąd noca tutpa jeż?2',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 2,
          C: [false, true, true, false],
        },
      ],
      third: [
        {
          Q: 'Dokąd noca tutpa jeż?3',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
          id: 3,
          C: [false, true, true, false],
        },
      ],
    },
  },
];

const LearnPage = () => {
  const [clickedChapter, setClickedChapter] = useState('To Be');
  return (
    <Wrapper>
      <Loader />
      <LearnChaptersNav setClickedChapter={setClickedChapter} subjects={subjects} />
      <LessonTemplate clickedChapter={clickedChapter} subjects={subjects} />
    </Wrapper>
  );
};

export default LearnPage;
