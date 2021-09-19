import React from 'react';
import StarItem from './StarItem';
import StarList from './StarList';
import { StartProps } from './types';

const Start: React.FC<StartProps> = ({ totalScore, currentScore }) => {
  return (
    <StarList>
      {new Array(totalScore).fill(currentScore).map((score, index) => {
        return (
          <StarItem key={`star-item-${index}`} active={index <= score - 1} />
        );
      })}
    </StarList>
  );
};

export default Start;
