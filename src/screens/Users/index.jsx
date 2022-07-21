import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Table from 'components/Table';
import Preloader from 'components/Preloader';
import HttpClient from '../../api/base.api';
import * as S from './styles';
import { getCookie } from '../../utils/CookieUtils';

const Users = () => {
  const [info, setInfo] = useState(null);

  const client = new HttpClient();

  useEffect(() => {
    const getData = async () => {
      const data = await client.get('users', getCookie('token'));
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
