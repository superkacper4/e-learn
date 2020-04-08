import React, { useState } from 'react';
import Wrapper from 'atoms/Wrapper';
import LearnChaptersNav from 'organisms/LearnChaptersNav';
// import LessonTemplate from 'templates/LessonTemplate'

const LearnPage = () => {
  const [clickedChapter, setClickedChapter] = useState('');
  return (
    <Wrapper>
      <LearnChaptersNav setClickedChapter={setClickedChapter} />

      <h2>{clickedChapter}</h2>
    </Wrapper>
  );
};

export default LearnPage;
