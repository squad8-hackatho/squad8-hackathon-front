import React, { useEffect, useState } from 'react';
import { theme } from '../../themes/theme';
import { Section, Title } from './styles';

const Pattern = () => {
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);

  useEffect(() => {
    function handleResize() {
      setWidthScreen(window.screen.width / 16);
    }

    window.addEventListener('resize', handleResize);
  });

  return widthScreen > theme.screenSizes.laptopS ? (
    <Section>
      <Title>
        Technical<strong>Share</strong>
      </Title>
    </Section>
  ) : null;
};

export default Pattern;
