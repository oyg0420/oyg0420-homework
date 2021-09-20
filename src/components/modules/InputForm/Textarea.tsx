import React, { TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  :focus {
    border: 1px solid gray;
  }
`;

type TextareaProps = TextareaHTMLAttributes<any>;

const Textarea: React.FC<TextareaProps> = props => {
  return <StyledTextarea {...props} />;
};

export default Textarea;
