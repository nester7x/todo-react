import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Preloader from 'components/Preloader';
import ProfileLayout from 'components/ProfileLayout';
import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/cookieUtils';

import * as S from './styles';

type AdditionalInfo = {
  name: string;
  value: string;
};

type User = {
  _id: string;
  fullName: string;
  email: string;
  additionalInfo: AdditionalInfo[];
  aboutMe: string;
  userPhoto: string;
};

const User: FC = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const buttons = [
    <S.Btn key='0' to={`/chat/${id}`}>
      Message
    </S.Btn>,
  ];

  useEffect(() => {
    if (id) {
      (async () => {
        const token = getCookie('token');
        const data = await api.get(`users/${id}`, token);
        setUserInfo(data);
      })();
    }
  }, [id]);

  if (!userInfo)
    return (
      <div>
        <Preloader />
      </div>
    );

  return (
    <ProfileLayout
      buttons={buttons}
      username={userInfo?.fullName || ''}
      additionalInfo={userInfo?.additionalInfo || []}
      aboutMe={userInfo?.aboutMe || ''}
      userPhoto={userInfo?.userPhoto || ''}
    />
  );
};

export default User;
