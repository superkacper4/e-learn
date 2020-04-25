import React, { useState } from 'react';
import styled from 'styled-components';
import Label from 'atoms/Label';
import P from 'atoms/P';

const StyledQuestions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  flex-basis: 100%;
  margin: 5px 0;
  display: block;
  display: flex;
  flex-wrap: wrap;
  transform: ${({ id, i }) => {
    if (id === i) return 'scale(1)';
    return 'scale(0)';
  }};
`;

const StyledCheckbox = styled.input`
  background-color: transparent;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  background-color: black;
  color: #d4b8b8;
  font-size: 1.8rem;
  border: none;
  padding: 10px;
  margin: 10px auto;
`;

const Questions = ({ value, i, score, setScore }) => {
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [a4, setA4] = useState(false);

  const [green1, setGreen1] = useState(false);
  const [green2, setGreen2] = useState(false);
  const [green3, setGreen3] = useState(false);
  const [green4, setGreen4] = useState(false);

  const [disable, setDisable] = useState(false);

  const handleButton = (e, C) => {
    e.preventDefault();
    setDisable(true);
    if (C[0] === a1 && C[1] === a2 && C[2] === a3 && C[3] === a4) {
      console.log('dobra odp');
      setScore(score + 1);
    } else {
      console.log('źle');
    }

    if (C[0]) setGreen1(true);
    else setGreen1(false);

    if (C[1]) setGreen2(true);
    else setGreen2(false);

    if (C[2]) setGreen3(true);
    else setGreen3(false);

    if (C[3]) setGreen4(true);
    else setGreen4(false);

    console.log(a1, a2, a3, a4);
  };

  return (
    <>
      {value.map(({ Q, A1, A2, A3, A4, id, C }) => (
        <StyledQuestions key={Q} id={id} i={i}>
          <P>{Q}</P>
          <Label green={green1}>
            <StyledCheckbox
              type="checkbox"
              chekced={a1}
              disabled={disable ? 'disabled' : null}
              onChange={(e) => setA1(e.target.checked)}
            />{' '}
            {A1}
          </Label>
          <Label green={green2}>
            <StyledCheckbox
              type="checkbox"
              chekced={a2}
              disabled={disable ? 'disabled' : null}
              onChange={(e) => setA2(e.target.checked)}
            />{' '}
            {A2}
          </Label>
          <Label green={green3}>
            <StyledCheckbox
              type="checkbox"
              chekced={a3}
              disabled={disable ? 'disabled' : null}
              onChange={(e) => setA3(e.target.checked)}
            />{' '}
            {A3}
          </Label>
          <Label green={green4}>
            <StyledCheckbox
              type="checkbox"
              chekced={a4}
              disabled={disable ? 'disabled' : null}
              onChange={(e) => setA4(e.target.checked)}
            />{' '}
            {A4}
          </Label>
          <StyledButton type="submit" onClick={(e) => handleButton(e, C)}>
            Sprawdź
          </StyledButton>
        </StyledQuestions>
      ))}
    </>
  );
};

export default Questions;
