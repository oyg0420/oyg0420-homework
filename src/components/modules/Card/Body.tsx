import React, { useContext } from 'react';
import styled from 'styled-components';
import CardContext from './CardContext';
import { Mode } from './types';

const BodyContainer = styled.div<{ mode: Mode }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  ${props => (props.mode === 'vertical' ? ' height: 100px' : 'width: 250px')};
`;

const Body: React.FC = ({ children }) => {
  const { mode } = useContext(CardContext);
  return <BodyContainer mode={mode}>{children}</BodyContainer>;
};

export default Body;
