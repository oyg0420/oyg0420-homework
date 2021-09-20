import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { CardLabelProps } from '../types';

const StyledLabel = styled.span`
  &.theme-default {
    color: gray;
  }

  &.theme-hilight {
    color: red;
  }

  &.status-cancel {
    text-decoration: line-through;
  }

  &.large {
    font-size: 16px;
  }

  &.medium {
    font-size: 12px;
  }

  &.small {
    font-size: 8px;
  }
`;

const Label: React.FC<CardLabelProps> = ({ theme = 'default', status = 'default', size = 'medium', children }) => {
  return (
    <StyledLabel
      className={classNames({
        [`theme-${theme}`]: true,
        [`status-${status}`]: true,
        [size]: true,
      })}
    >
      {children}
    </StyledLabel>
  );
};

export default Label;
