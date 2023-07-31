import React, { FC, ReactNode, useEffect, useState } from 'react';
import HomeLayout from 'components/HomeLayout';
import Preloader from 'components/Preloader';
import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/cookieUtils';

import * as S from './styles';

type Item = {
  username: string;
  email: string;
};

const Users: FC = () => {
  const [info, setInfo] = useState<Item[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.get('users', getCookie('token'));
      await setInfo(data);
    };

    getData();
  }, []);

  if (!info) return <Preloader />;

  const colName = [
    {
      label: 'username',
      key: 'username',
      Row: (label: string, key: string, item: Item): ReactNode => (
        <S.Link to={`/user/${item.username}`}>{item.username || ''}</S.Link>
      ),
    },
    {
      label: 'email',
      key: 'email',
      Row: () => '',
    },
  ];

  return (
    <HomeLayout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <S.StyledTable data={info} colName={colName} />
      </div>
    </HomeLayout>
  );
};

export default Users;
