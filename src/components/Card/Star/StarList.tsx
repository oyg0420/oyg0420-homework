import React from 'react';
import styled from 'styled-components';

const StyledStarList = styled.ul`
  padding: 0;
  margin: 0 5px 0 0;

  li + li {
    margin-left: 2px;
  }
`;

const StarList: React.FC = ({ children }) => {
  return <StyledStarList>{children}</StyledStarList>;
};

export default StarList;
