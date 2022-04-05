import React, { useState } from 'react';
import { TagStyle } from './styles';

type Props = {
  children: any;
};

function Tag({ children }: Props) {
  const [bg, setBg] = useState('black');
  const [color, setColor] = useState('white');

  return (
    <TagStyle
      bgColor={bg}
      textColor={color}
      onClick={() => {
        setBg(bg === 'black' ? '#ED7117' : 'black');
        setColor(color === 'white' ? 'white' : 'white');
      }}
    >
      {children}
    </TagStyle>
  );
}

export default Tag;
