import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const Users = () => {
  const [info, setInfo] = useState([]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`../users/${id}`, { replace: true });
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setInfo(json));
  }, []);

  return (
    <S.Wrap>
      <S.Title>Users info</S.Title>
      <table cellSpacing="0">
        <tbody>
          <tr>
            <S.Td>id</S.Td>
            <S.Td>Name</S.Td>
            <S.Td>Username</S.Td>
            <S.Td>Email</S.Td>
          </tr>
          {info.map((item, id) => (
            <S.Tr key={id} onClick={() => handleClick(item.id)}>
              <S.Td>{item.id || ''}</S.Td>
              <S.Td>{item.name || ''}</S.Td>
              <S.Td>{item.username || ''}</S.Td>
              <S.Td>{item.email || ''}</S.Td>
            </S.Tr>
          ))}
        </tbody>
      </table>
    </S.Wrap>
  );
};

export default Users;
