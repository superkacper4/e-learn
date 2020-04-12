import React from 'react';
import styled from 'styled-components';
import Input from 'atoms/Input';
import Label from 'atoms/Label';
import P from 'atoms/P';

const StyledQuestions = styled.div`
  flex-basis: 100%;
  margin: 5px 0;
  border-bottom: solid 1px black;
  display: block;
  font-size: 1.5rem;
`;

const Questions = ({ value }) => {
  return (
    <StyledQuestions>
      {value.map(({ Q, A1, A2, A3, A4 }) => (
        <>
          <P>{Q}</P>
          <Label>
            <Input /> {A1}
          </Label>
          <Label>
            <Input /> {A2}
          </Label>
          <Label>
            <Input /> {A3}
          </Label>
          <Label>
            <Input /> {A4}
          </Label>
        </>
      ))}
      <Input />
    </StyledQuestions>
  );
};

export default Questions;
