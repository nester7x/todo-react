import React, { FC, useContext, useState } from 'react';

import { AuthContext } from 'context/authContext';
import ProfileLayout from 'components/ProfileLayout';

import * as S from './styles';

const MyProfile: FC = () => {
  const { user } = useContext(AuthContext);
  const [isEditMode, setIsEditMode] = useState(false);

  const buttons = [
    <S.Btn
      key='edit'
      type='button'
      text={isEditMode ? 'Save' : 'Edit'}
      disabled={false}
      onClick={() => setIsEditMode((prevState) => !prevState)}
    />,
  ];

  return (
    <ProfileLayout
      isEditMode={isEditMode}
      setIsEditMode={() => setIsEditMode((prevState) => !prevState)}
      buttons={buttons}
      user={user}
    >
      <div>Here will be posts...</div>
    </ProfileLayout>
  );
};

export default MyProfile;
