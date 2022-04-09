import React, { useState } from 'react';
import { TagAnimated, TagStyle } from './styles';
import { theme } from '../../themes/theme';

type Props = {
  children: any;
  flagAnimated: boolean;
};

function Tag({ children, flagAnimated }: Props) {
  const [bg, setBg] = useState(theme.colors.black);
  const color = theme.colors.white;

  const setColors = () => {
    setBg(bg === 'black' ? '#ED7117' : 'black');
  };

  return flagAnimated ? (
    <TagAnimated
      bgColor={bg}
      textColor={color}
      width={200}
      onClick={() => {
        setColors();
      }}
    >
      {children}
    </TagAnimated>
  ) : (
    <TagStyle
      bgColor={bg}
      textColor={color}
      width={200}
      onClick={() => {
        setColors();
      }}
    >
      {children}
    </TagStyle>
  );
}

export default Tag;
