import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import * as S from './styles';
import { Id, InfoItem, SubName, SubNameValue, UserId } from './styles';
import Preloader from '../../components/Preloader';

const User = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (id)
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => setUserInfo(json));
  }, []);

  if (!userInfo)
    return (
      <div>
        {' '}
        <Preloader />
      </div>
    );

  return (
    <S.Wrap>
      <S.UserName>{userInfo?.name}</S.UserName>
      <UserId>
        {' '}
        User_id: <Id>{id}</Id>
      </UserId>
      <S.Info>
        <InfoItem>
          <SubName>username</SubName>
          <SubNameValue>{userInfo?.username}</SubNameValue>
        </InfoItem>

        <InfoItem>
          <SubName>email</SubName>
          <SubNameValue>{userInfo?.email}</SubNameValue>
        </InfoItem>

        <InfoItem>
          <SubName>address</SubName>
          <SubNameValue>
            Street: {userInfo?.address?.street}
            <br />
            City: {userInfo?.address?.city}
          </SubNameValue>
        </InfoItem>

        <InfoItem>
          <SubName>phone</SubName>
          <SubNameValue>{userInfo?.phone}</SubNameValue>
        </InfoItem>

        <InfoItem>
          <SubName>company</SubName>
          <SubNameValue>{userInfo?.company?.name}</SubNameValue>
        </InfoItem>

        <InfoItem>
          <SubName>website</SubName>
          <SubNameValue>{userInfo?.website}</SubNameValue>
        </InfoItem>
      </S.Info>
    </S.Wrap>
  );
};

export default User;
