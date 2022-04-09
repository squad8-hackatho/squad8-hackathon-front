import React, { useEffect, useState } from 'react';
import { theme, screenSizes } from '../../themes/theme';
import { Button } from './styles';

type Props = {
  children: string;
  widthScreen: number;
  setInfo: Function;
};

function ProfileInfo({ children, setInfo, widthScreen }: Props) {
  const [bg, setBg] = useState('transparent');
  const [color, setColor] = useState(theme.colors.darkGray);

  const colors = (value: string): void => {
    if (children === value) {
      setBg(theme.colors.lightGray);
      setColor(theme.colors.black);
    } else {
      if (widthScreen > screenSizes.default) setBg(theme.colors.white);
      else setBg('transparent');
      setColor(theme.colors.darkGray);
    }
  };

  const setButtonColor = () => {
    const buttonsBar = document.getElementById('ButtonsBar');
    if (buttonsBar) {
      buttonsBar.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', () => {
          colors(button.value);
        });
      });
    }
  };

  useEffect(() => {
    colors('Descrição');
    setButtonColor();
  }, [widthScreen]);

  return (
    <Button
      bgColor={bg}
      textColor={color}
      value={children}
      onClickCapture={() => {
        setInfo();
      }}
    >
      {children}
    </Button>
  );
}

export default ProfileInfo;
