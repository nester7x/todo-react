import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Table from 'components/Table';
import Preloader from 'components/Preloader';
import * as S from './styles';

const Users = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setInfo(json));
  }, []);

  if (!info)
    return (
      <div>
        <Preloader />
      </div>
    );

  const colName = [
    {
      value: 'name',
      key: 'name',
      Row: (value, key, item) => (
        <td>
          <NavLink to={`/user/${item.id}`}>{item.name}</NavLink>
        </td>
      )
    },
    {
      value: 'username',
      key: 'username',
      Row: (value, key, item) => <td>{item.username}</td>
    },
    {
      value: 'email',
      key: 'email',
      Row: (value, key, item) => <td>{item.email}</td>
    },
    {
      value: 'city',
      key: 'address.city',
      Row: (value, key, item) => <td>{item.address.city}</td>
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
