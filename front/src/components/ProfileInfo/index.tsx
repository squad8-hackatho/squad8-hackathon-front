import React from 'react';
import { theme } from '../../themes/theme';
import { ProfileInfoStyle, ProfileName, ProfileOccupation } from './styles';

export const ProfileInfo = () => {
  return (
    <ProfileInfoStyle>
      <ProfileName fontSize={theme.fontSizes.displayExtraLarge}>
        Name
      </ProfileName>
      <ProfileOccupation> Occupation </ProfileOccupation>
    </ProfileInfoStyle>
  );
};
