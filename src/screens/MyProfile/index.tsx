import React, { FC, useContext, useState } from 'react';

import { AuthContext } from 'context/authContext';
import ProfileLayout from 'components/ProfileLayout';
import Preloader from 'components/Preloader';
import { UserProps } from 'types/userTypes';

import * as S from './styles';

const MyProfile: FC = () => {
  const { user } = useContext(AuthContext);
  const [isEditMode, setIsEditMode] = useState(false);

  const buttons = [
    <S.Btn
      key='edit'
      type='button'
      text='Edit'
      disabled={false}
      onClick={() => setIsEditMode((prevState) => !prevState)}
    />,
  ];

  const hasData = Object.values(user as UserProps).some((value) => value !== '' && value !== 0);
  if (!hasData) return <Preloader />;

  // TODO: posts
  return (
    <ProfileLayout
      isEditMode={isEditMode}
      setIsEditMode={() => setIsEditMode((prevState) => !prevState)}
      buttons={buttons}
      user={user}
    >
      <div>Here will be user&apos;s posts...</div>
    </ProfileLayout>
  );
};

export default MyProfile;
