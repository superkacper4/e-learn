import React from 'react';
import styled from 'styled-components';
import H3 from 'atoms/H3';
import Questions from 'molecules/Questions';

const StyledTest = styled.form`
  flex-basis: 100%;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
`;

const Test = ({ questions }) => {
  return (
    <StyledTest>
      <H3>Test</H3>

      {Object.entries(questions).map(([key, value]) => (
        <Questions key={key} value={value} />
      ))}
    </StyledTest>
  );
};

export default Test;
