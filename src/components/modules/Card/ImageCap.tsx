import React, { useContext } from 'react';
import styled from 'styled-components';
import { ImageCapProps, Mode } from './types';
import DefaultImage from 'images/default-image.jpg';
import CardContext from './CardContext';

const StyledImageCap = styled.img`
  display: block;
`;

const ImageCapContainer = styled.div<{ mode: Mode }>`
  ${StyledImageCap} {
    ${props => (props.mode === 'vertical' ? 'width: 100%;' : 'height: 100%;')}
  }
`;

const ImageCap: React.FC<ImageCapProps> = props => {
  const { mode } = useContext(CardContext);
  return (
    <ImageCapContainer mode={mode}>
      <StyledImageCap src={props.src || DefaultImage} {...props} />
    </ImageCapContainer>
  );
};

export default ImageCap;
