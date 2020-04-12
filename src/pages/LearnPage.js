import React, { useState } from 'react';
import Wrapper from 'atoms/Wrapper';
import LearnChaptersNav from 'organisms/LearnChaptersNav';
import LessonTemplate from 'templates/LessonTemplate';
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
        },
      ],
      second: [
        {
          Q: 'Dokąd noca tutpa jeż?2',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
        },
      ],
      third: [
        {
          Q: 'Dokąd noca tutpa jeż?3',
          A1: 'xD',
          A2: 'xDD',
          A3: 'xDDD',
          A4: 'xDDDD',
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
    test: [
      {
        first: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        second: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        third: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
      },
    ],
  },
  {
    key: 2,
    title: 'Present Simple',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: toBeImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: [
      {
        first: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        second: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        third: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
      },
    ],
  },
  {
    key: 3,
    title: 'Present Continous',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: toBeImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: [
      {
        first: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        second: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        third: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
      },
    ],
  },
  {
    key: 4,
    title: 'Present Past ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: toBeImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: [
      {
        first: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        second: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        third: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
      },
    ],
  },
  {
    key: 5,
    title: 'Present Perfect',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: toBeImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: [
      {
        first: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        second: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
        third: [
          {
            Q: 'Dokąd noca tutpa jeż?',
            A1: 'xD',
            A2: 'xDD',
            A3: 'xDDD',
            A4: 'xDDDD',
          },
        ],
      },
    ],
  },
];

const LearnPage = () => {
  const [clickedChapter, setClickedChapter] = useState('To Be');
  return (
    <Wrapper>
      <LearnChaptersNav setClickedChapter={setClickedChapter} subjects={subjects} />
      <LessonTemplate clickedChapter={clickedChapter} subjects={subjects} />
    </Wrapper>
  );
};

export default LearnPage;
