import React from 'react';
import { StyledComponent } from 'styled-components';

export type Size = 'large' | 'medium' | 'small';

export type Status = 'default' | 'cancel';

export type Theme = 'default' | 'hilight';

export type Mode = 'horizon' | 'vertical';

export type FlexDirection = 'column' | 'row';

export type ImageCapProps = React.ImgHTMLAttributes<any>;

export type CardTextProps = {
  size?: Size;
  maxLines?: number;
};

export type CardLabelProps = {
  theme?: Theme;
  status?: Status;
  size?: Size;
};

export type StartProps = {
  totalScore: number;
  currentScore: number;
};

export type StarItemProps = {
  active: boolean;
};

export type CardTitleProps = {
  H1: StyledComponent<'h1', any, {}, never>;
  H2: StyledComponent<'h2', any, {}, never>;
  H3: StyledComponent<'h3', any, {}, never>;
  H4: StyledComponent<'h4', any, {}, never>;
  H5: StyledComponent<'h5', any, {}, never>;
};

export type CardProps = {
  mode?: Mode;
};

export type CardContextProps = {
  mode: Mode;
};

export type LabelGroupProps = {
  flexDirection?: FlexDirection;
};

export type CardComponent = React.FC<CardProps> & {
  Body: React.FC;
  Footer: React.FC;
  ImageCap: React.FC<ImageCapProps>;
  Label: React.FC<CardLabelProps>;
  Text: React.FC<CardTextProps>;
  Title: CardTitleProps;
  Star: React.FC<StartProps>;
  LabelGroup: React.FC<LabelGroupProps>;
};
