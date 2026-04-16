import React from 'react';

import { useAuth } from '../../context/auth';
import Profile from './Profile';

const ProfileContainer = () => {
  const { removeTokenFromContext } = useAuth();

  const onLogout = async () => {
    await removeTokenFromContext();
  };

  return <Profile onLogout={onLogout} />;
};

export default ProfileContainer;
