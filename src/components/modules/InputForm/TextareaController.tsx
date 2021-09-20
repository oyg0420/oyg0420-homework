import React from 'react';
import styled from 'styled-components';

const TextareaControllerContainer = styled.div``;

const TextareaController: React.FC = ({ children }) => {
  return <TextareaControllerContainer>{children}</TextareaControllerContainer>;
};

export default TextareaController;
