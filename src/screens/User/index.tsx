import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ViewProfile from 'components/ViewProfile';
import Preloader from 'components/Preloader';
import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/cookieUtils';
import { UserProps } from 'types/userTypes';
import { PostProps } from 'types/postTypes';

import * as S from './styles';

type User = {
  user: UserProps;
  posts: PostProps[];
};

const User: FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      (async () => {
        const token = getCookie('token');
        const data = await api.get(`auth/user/${id}`, token);
        setUser(data);
      })();
    }
  }, [id]);

  if (!user) return <Preloader />;

  return (
    <S.Wrapper>
      <ViewProfile userInfo={user?.user} />
      {user?.posts?.map((item, index) => (
        <S.PostCustom key={index} postData={item} />
      ))}
    </S.Wrapper>
  );
};

export default User;
