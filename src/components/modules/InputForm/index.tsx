import React from 'react';
import styled from 'styled-components';

const StyledInputForm = styled.form``;

const InputForm: React.FC = ({ children }) => {
  return <StyledInputForm>{children}</StyledInputForm>;
};

export default InputForm;
