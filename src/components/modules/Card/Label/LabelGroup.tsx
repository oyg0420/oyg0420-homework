import React from 'react';
import styled from 'styled-components';
import { FlexDirection, LabelGroupProps } from '../types';

const StyleLabelGroup = styled.div<{ flexDirection: FlexDirection }>`
  display: flex;
  flex-direction: ${props => props.flexDirection};

  ${props => (props.flexDirection === 'column' ? '' : 'span + span { margin-left: 5px; } align-items: center;')}
`;

const LabelGroup: React.FC<LabelGroupProps> = ({ flexDirection = 'row', children }) => {
  return <StyleLabelGroup flexDirection={flexDirection}>{children}</StyleLabelGroup>;
};

export default LabelGroup;
