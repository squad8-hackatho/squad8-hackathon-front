import React, { useEffect, useState } from 'react';
import { Button } from './styles';

type Props = {
  children: string;
  setInfo: Function;
};

function Tag({ children, setInfo }: Props) {
  const [bg, setBg] = useState('white');
  const [color, setColor] = useState('#a3a3a3');
  const flag = true;

  const setButtonColor = () => {
    document.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        if (button.value === children) {
          setBg('#858585');
          setColor('black');
        } else {
          setBg('white');
          setColor('#a3a3a3');
        }
      });
    });
  };

  useEffect(() => {
    setButtonColor();
  }, []);

  useEffect(() => {
    if (children === 'Descrição') {
      setBg('#858585');
      setColor('black');
    }
  }, [flag]);

  return (
    <Button
      bgColor={bg}
      textColor={color}
      value={children}
      onClick={() => {
        setInfo();
      }}
    >
      {children}
    </Button>
  );
}

export default Tag;
