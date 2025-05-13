import React, { FC, useContext, useState } from 'react';

import { AuthContext } from 'context/authContext';
import ViewProfile from 'components/ViewProfile';
import EditProfile from 'components/EditProfile';

import * as S from './styles';

const MyProfile: FC = () => {
  const { user } = useContext(AuthContext);

  const [isEditMode, setIsEditMode] = useState(false);

  const handleAction = () => {
    setIsEditMode((prevState) => !prevState);
  };

  return (
    <S.Wrapper>
      {isEditMode ? (
        <EditProfile userInfo={user?.userInfo} handleAction={handleAction} />
      ) : (
        <ViewProfile userInfo={user?.userInfo} handleAction={handleAction} />
      )}
      {!isEditMode &&
        user?.userPosts?.map((item, index) => <S.PostCustom key={index} postData={item} />)}
    </S.Wrapper>
  );
};

export default MyProfile;
