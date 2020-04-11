import React from 'react';
import styled from 'styled-components';
import H3 from 'atoms/H3';
import P from 'atoms/P';
// import FormElement from 'molecules/FormElement'

const StyledTest = styled.form`
  flex-basis: 100%;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
`;

const Test = ({ questions }) => {
  // useEffect(() => {
  //   // questions.map((question) => {

  //   //   Object.entries(question).forEach(([key, value]) => {
  //   //     console.log(`${key}`);
  //   //     setTest(value);
  //   //   })

  //   // })

  //   Object.entries(questions).forEach(([key, value]) => {
  //     console.log(`${key}, ${value}`);
  //     value.map((elem) => {
  //       console.log(elem.Q)
  //     })

  //   })
  // });

  return (
    <StyledTest>
      <H3>Test</H3>

      {Object.entries(questions).forEach(([key, value]) => {
        console.log(`${key}, ${value}`);
        return value.map((elem) => {
          return <P>{elem.Q}</P>;
        });
      })}
    </StyledTest>
  );
};

export default Test;
