import React, { useState } from 'react';
import { TagAnimated } from './styles';

type Props = {
  children: any;
};

function Tag({ children }: Props) {
  const [bg, setBg] = useState('black');
  const [color, setColor] = useState('white');

  return (
    <TagAnimated
      bgColor={bg}
      textColor={color}
      width={200}
      onClick={() => {
        setBg(bg === 'black' ? '#ED7117' : 'black');
        setColor(color === 'white' ? 'white' : 'white');
      }}
    >
      {children}
    </TagAnimated>
  );
}

export default Tag;
