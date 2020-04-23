import React, { useState } from 'react';
import styled from 'styled-components';
import Label from 'atoms/Label';
import P from 'atoms/P';

const StyledQuestions = styled.div`
  flex-basis: 100%;
  margin: 5px 0;
  display: block;
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const StyledCheckbox = styled.input`
  background-color: transparent;
  border: 1px solid black;
`;

const Questions = ({ value }) => {
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [a4, setA4] = useState(false);

  const handleButton = (e) => {
    e.preventDefault();
    console.log(a1, a2, a3, a4);
  };

  return (
    <>
      {value.map(({ Q, A1, A2, A3, A4 }) => (
        <StyledQuestions key={Q}>
          <P>{Q}</P>
          <Label>
            <StyledCheckbox
              type="checkbox"
              chekced={a1}
              onChange={(e) => setA1(e.target.checked)}
            />{' '}
            {A1}
          </Label>
          <Label>
            <StyledCheckbox
              type="checkbox"
              chekced={a2}
              onChange={(e) => setA2(e.target.checked)}
            />{' '}
            {A2}
          </Label>
          <Label>
            <StyledCheckbox
              type="checkbox"
              chekced={a3}
              onChange={(e) => setA3(e.target.checked)}
            />{' '}
            {A3}
          </Label>
          <Label>
            <StyledCheckbox
              type="checkbox"
              chekced={a4}
              onChange={(e) => setA4(e.target.checked)}
            />{' '}
            {A4}
          </Label>
          <button type="submit" onClick={handleButton}>
            Sprawdź
          </button>
        </StyledQuestions>
      ))}
    </>
  );
};

export default Questions;
