import React from 'react';
import styled from 'styled-components';
import H3 from 'atoms/H3';

const StyledTest = styled.form`
  flex-basis: 100%;
  background-color: lightgreen;
`;

const Test = () => {
  return (
    <StyledTest>
      <H3>Test</H3>
    </StyledTest>
  );
};

export default Test;
