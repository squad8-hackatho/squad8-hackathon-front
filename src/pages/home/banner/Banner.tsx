import React from 'react';
import { theme } from '../../../themes/theme';
import { Section, Title } from './styles';

type Props = {
  widthScreen: number;
};

const Pattern = ({ widthScreen }: Props) => {
  return widthScreen > theme.screenSizes.laptopS ? (
    <Section>
      <Title>
        Technical<strong>Share</strong>
      </Title>
    </Section>
  ) : null;
};

export default Pattern;
