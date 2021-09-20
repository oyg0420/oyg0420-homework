import React from 'react';
import styled from 'styled-components';
import { StarItemProps } from '../types';
import classNames from 'classnames';

const StyledStarItem = styled.li`
  display: inline-block;
`;

const Star = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: gray;
  &.active {
    background-color: orange;
  }
`;

const StarItem: React.FC<StarItemProps> = ({ active }) => {
  return (
    <StyledStarItem>
      <Star className={classNames({ active })} />
    </StyledStarItem>
  );
};

export default StarItem;
