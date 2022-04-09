import React, { useEffect, useState } from 'react';
import { theme } from '../../themes/theme';
import { Button } from './styles';

type Props = {
  children: string;
  setInfo: Function;
};

function ProfileInfo({ children, setInfo }: Props) {
  const [bg, setBg] = useState(theme.colors.white);
  const [color, setColor] = useState(theme.colors.mediumGray);

  const setButtonColor = () => {
    const buttonsBar = document.getElementById('ButtonsBar');
    if (buttonsBar) {
      buttonsBar.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', () => {
          if (children === button.value) {
            setBg(theme.colors.lightGray);
            setColor(theme.colors.black);
          } else {
            setBg(theme.colors.white);
            setColor(theme.colors.mediumGray);
          }
        });
      });
    }
  };

  useEffect(() => {
    if (children === 'Descrição') {
      setBg(theme.colors.lightGray);
      setColor(theme.colors.black);
    }
    setButtonColor();
  }, []);

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
