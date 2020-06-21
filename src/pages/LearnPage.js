import React, { useState } from 'react';
import Wrapper from 'atoms/Wrapper';
import LearnChaptersNav from 'organisms/LearnChaptersNav';
import LessonTemplate from 'templates/LessonTemplate';
import Footer from 'organisms/Footer';
import Loader from 'atoms/Loader';
import toBeImg from 'assets/tobe.jpg';
import orNotToBeImg from 'assets/ornottobe.jpg';
import presentSimpleImg from 'assets/presentsimple.jpg';
import pastSimpleImg from 'assets/pastsimple.jpg';

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
          Q: 'Dokąd noca tutpa jeż?',
          A1: 'poprawna',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'fałszywa',
          id: 1,
          C: [true, true, true, false],
        },
      ],
      second: [
        {
          Q: 'Ile nóg ma jeleń?',
          A1: 'fałszywa',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'fałszywa',
          id: 2,
          C: [false, true, true, false],
        },
      ],
      third: [
        {
          Q: 'Ile jajek składa kura?',
          A1: 'fałszywa',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'poprawne',
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
          Q: 'Dokąd noca tutpa jeż?',
          A1: 'poprawna',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'fałszywa',
          id: 1,
          C: [true, true, true, false],
        },
      ],
      second: [
        {
          Q: 'Ile nóg ma jeleń?',
          A1: 'fałszywa',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'fałszywa',
          id: 2,
          C: [false, true, true, false],
        },
      ],
      third: [
        {
          Q: 'Ile jajek składa kura?',
          A1: 'fałszywa',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'poprawne',
          id: 3,
          C: [false, true, true, true],
        },
      ],
    },
  },
  {
    key: 2,
    title: 'Present Simple',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: presentSimpleImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: {
      first: [
        {
          Q: 'Dokąd noca tutpa jeż?',
          A1: 'poprawna',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'fałszywa',
          id: 1,
          C: [true, true, true, false],
        },
      ],
      second: [
        {
          Q: 'Ile nóg ma jeleń?',
          A1: 'fałszywa',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'fałszywa',
          id: 2,
          C: [false, true, true, false],
        },
      ],
      third: [
        {
          Q: 'Ile jajek składa kura?',
          A1: 'fałszywa',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'poprawne',
          id: 3,
          C: [false, true, true, true],
        },
      ],
    },
  },
  {
    key: 3,
    title: 'Past Simple',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: pastSimpleImg,
    secondContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    test: {
      first: [
        {
          Q: 'Dokąd noca tutpa jeż?',
          A1: 'poprawna',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'fałszywa',
          id: 1,
          C: [true, true, true, false],
        },
      ],
      second: [
        {
          Q: 'Ile nóg ma jeleń?',
          A1: 'fałszywa',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'fałszywa',
          id: 2,
          C: [false, true, true, false],
        },
      ],
      third: [
        {
          Q: 'Ile jajek składa kura?',
          A1: 'fałszywa',
          A2: 'poprawna',
          A3: 'poprawna',
          A4: 'poprawne',
          id: 3,
          C: [false, true, true, true],
        },
      ],
    },
  },
];

const LearnPage = () => {
  const [clickedChapter, setClickedChapter] = useState('To Be');
  return (
    <>
      <Wrapper>
        <Loader />
        <LearnChaptersNav setClickedChapter={setClickedChapter} subjects={subjects} />
        <LessonTemplate clickedChapter={clickedChapter} subjects={subjects} />
        <Footer learn />
      </Wrapper>
    </>
  );
};

export default LearnPage;
