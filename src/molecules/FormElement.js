import React from 'react';
import styled from 'styled-components';
import Input from 'atoms/Input';

const StyledFormElement = styled.label`
  flex-basis: 100%;
  margin: 5px 0;
  border-bottom: solid 1px black;
  display: block;
  font-size: 1.5rem;
`;

const FormElement = ({ answer }) => {
  return (
    <StyledFormElement>
      <Input />
      {answer}
    </StyledFormElement>
  );
};

export default FormElement;
