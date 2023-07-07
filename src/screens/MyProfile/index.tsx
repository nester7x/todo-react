import React, { useContext } from 'react';

import { AuthContext } from 'context/authContext';
import ProfileLayout from 'components/ProfileLayout';

import * as S from './styles';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const buttons = [
    <S.Btn key='0' to='edit'>
      Edit
    </S.Btn>,
  ];

  return (
    <ProfileLayout
      buttons={buttons}
      username={user?.username || ''}
      additionalInfo={user?.additionalInfo || []}
      aboutMe={user?.aboutMe || ''}
      userPhoto={user?.userPhoto || ''}
    />
  );
};

export default MyProfile;
