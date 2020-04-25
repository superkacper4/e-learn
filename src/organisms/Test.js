import React, { useState } from 'react';
import styled from 'styled-components';
import H3 from 'atoms/H3';
import Button from 'atoms/Button';
import Questions from 'molecules/Questions';

const StyledTest = styled.form`
  flex-basis: 100%;
  background-color: #777;
  display: flex;
  flex-direction: column;
`;

const StyledSlider = styled.div`
  position: relative;
  height: 30vh;
`;

const Test = ({ questions }) => {
  const [i, setI] = useState(1);
  const [score, setScore] = useState(0);

  const nextSlideFn = () => {
    if (i < Object.keys(questions).length) {
      setI(i + 1);
    } else {
      setI(1);
    }
  };

  const previousSlideFn = () => {
    if (i > 1) {
      setI(i - 1);
    } else {
      setI(Object.keys(questions).length);
    }
  };

  return (
    <StyledTest>
      <H3>Test</H3>

      <StyledSlider>
        {Object.entries(questions).map(([key, value]) => (
          <Questions key={key} value={value} i={i} score={score} setScore={setScore} />
        ))}
      </StyledSlider>
      <div>
        Score: {score}/{Object.keys(questions).length}
      </div>
      <Button fn={previousSlideFn}>Poprzedni</Button>
      <Button fn={nextSlideFn}>Następny</Button>
    </StyledTest>
  );
};

export default Test;
