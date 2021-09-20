import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { CardTextProps } from './types';

const StyledText = styled.p<{ maxLines?: number }>`
  color: gray;
  margin: 0;
  ${props =>
    props.maxLines
      ? `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${props.maxLines};
    overflow: hidden;
    `
      : 'overflow: auto; text-overflow: ellipsis; white-space: nowrap;'}

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

const Text: React.FC<CardTextProps> = ({ size = 'medium', maxLines, children }) => {
  return (
    <StyledText
      className={classNames({
        [size]: true,
      })}
      maxLines={maxLines}
    >
      {children}
    </StyledText>
  );
};

export default Text;
