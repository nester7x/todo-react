import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Preloader from 'components/Preloader';
import ProfileLayout from 'components/ProfileLayout';

import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/cookieUtils';
import { UserProps } from 'types/userTypes';

import * as S from './styles';

const User: FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserProps | null>(null);

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
        setUser(data);
      })();
    }
  }, [id]);

  if (!user) return <Preloader />;

  // TODO: posts
  return (
    <ProfileLayout buttons={buttons} user={user}>
      <div>Here will be posts...</div>
    </ProfileLayout>
  );
};

export default User;
