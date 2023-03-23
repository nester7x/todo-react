import React, { useEffect, useState } from 'react';

import Preloader from 'components/Preloader';
import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/CookieUtils';

import * as S from './styles';

const Users = () => {
  const [info, setInfo] = useState(null);

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
      Row: (label, key, item) => (
        <S.Link to={`/user/${item.username}`}>{item.username || ''}</S.Link>
      )
    },
    {
      label: 'email',
      key: 'email'
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <S.StyledTable data={info} colName={colName} />
    </div>
  );
};

export default Users;
