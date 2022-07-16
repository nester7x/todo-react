import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Table from 'components/Table';
import Preloader from 'components/Preloader';
import * as S from './styles';
import { getCookie } from '../../utils/CookieUtils';

const Users = () => {
  const [info, setInfo] = useState(null);

  useEffect(async () => {
    const response = await fetch('https://nestbe.herokuapp.com/api/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    });

    const data = await response.json();
    await setInfo(data);
  }, []);

  if (!info) return <Preloader />;

  const colName = [
    {
      label: 'username',
      key: 'username',
      Row: (label, key, item) => (
        <NavLink to={`/user/${item.username}`}>{item.username || ''}</NavLink>
      )
    },
    {
      label: 'email',
      key: 'email'
    }
  ];

  return (
    <S.Wrap>
      <S.Title>Users info</S.Title>
      <Table data={info} colName={colName} />
    </S.Wrap>
  );
};

export default Users;
