import React from 'react';
import styled from 'styled-components';
import Body from './Body';
import Footer from './Footer';
import ImageCap from './ImageCap';
import Label from './Label';
import Text from './Text';
import Title from './Title';
import { CardComponent } from './types';
import classNames from 'classnames';
import CardContext from './CardContext';
import Star from './Star';
import LabelGroup from './Label/LabelGroup';

const CardContainer = styled.div`
  display: flex;
  flex: none;
  margin: 10px;
  &.horizon {
    flex-direction: row;
  }

  &.vertical {
    flex-direction: column;
  }

  border: 1px solid gray;
  border-radius: 4px;

  &.vertical {
    width: 200px;
    height: fit-content;
  }

  &.horizon {
    height: 150px;
    width: fit-content;
  }

  span,
  h1,
  h2,
  h3,
  h4,
  h5 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px 0;
  }
`;

const Card: CardComponent = ({ mode = 'vertical', children }) => {
  return (
    <CardContext.Provider value={{ mode }}>
      <CardContainer className={classNames({ [mode]: true })}>
        {children}
      </CardContainer>
    </CardContext.Provider>
  );
};

Card.Body = Body;
Card.Footer = Footer;
Card.ImageCap = ImageCap;
Card.Label = Label;
Card.Text = Text;
Card.Title = Title;
Card.Star = Star;
Card.LabelGroup = LabelGroup;

export default Card;
