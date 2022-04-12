import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ProfilePicture } from './styles';
// import { ButtonBig } from '../Button/styles';
// import { screenSizes } from '../../themes/theme';
import foto from '../../assets/foto.png';

function ProfileButton() {
  const currentUser = useSelector((state: any) => {
    return state.user;
  });

  return (
    <Link to={`/profile/${currentUser.user.email}`}>
      <Button>
        <ProfilePicture src={foto} />
      </Button>
    </Link>
  );
}

export default ProfileButton;
