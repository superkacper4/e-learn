import React, { useState } from 'react';
import styled from 'styled-components';
import H3 from 'atoms/H3';
import H4 from 'atoms/H4';
import Button from 'atoms/Button';
import Questions from 'molecules/Questions';

const StyledTest = styled.form`
  flex-basis: 100%;
  background-color: #d4b8b8;
  display: flex;
  flex-direction: column;
`;

const StyledSlider = styled.div`
  position: relative;
  height: 270px;
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
      <H4>
        Score: {score}/{Object.keys(questions).length}
      </H4>

      <StyledSlider>
        {Object.entries(questions).map(([key, value]) => (
          <Questions key={key} value={value} i={i} score={score} setScore={setScore} />
        ))}
      </StyledSlider>
      <Button fn={nextSlideFn} black>
        Następny
      </Button>
      <Button fn={previousSlideFn} black>
        Poprzedni
      </Button>
    </StyledTest>
  );
};

export default Test;
