import React from 'react';
import styled from 'styled-components';
import TextareaController from './TextareaController';

const InputFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  ${TextareaController} + ${TextareaController} {
    margin-top: 10px;
  }
`;

const InputForm: React.FC = ({ children }) => {
  return <InputFormContainer>{children}</InputFormContainer>;
};

export default InputForm;
