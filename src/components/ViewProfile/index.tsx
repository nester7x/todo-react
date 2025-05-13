import React, { FC } from 'react';

import Preloader from 'components/Preloader';
import { UserProps } from 'types/userTypes';

import * as S from './styles';

type ViewProfileProps = {
  userInfo: UserProps;
  handleAction?: () => void;
};

const ViewProfile: FC<ViewProfileProps> = ({ userInfo, handleAction }) => {
  const hasData = Object.values(userInfo as UserProps).some((value) => value !== '' && value !== 0);

  const additionalInfo = [
    {
      name: 'activity',
      value: userInfo?.activity,
    },
    {
      name: 'country',
      value: userInfo?.country,
    },
    {
      name: 'city',
      value: userInfo?.city,
    },
    {
      name: 'age',
      value: userInfo?.age,
    },
  ];

  if (!hasData) return <Preloader />;

  // TODO: change !userInfo._id
  return (
    <S.Wrapper>
      <S.Preview>
        <S.ImgWrapper>
          <S.Img
            src={
              userInfo?.userPhoto ||
              'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
            }
            alt='user photo'
          />
        </S.ImgWrapper>
        {!userInfo._id ? (
          <S.EditBtn type='button' onClick={handleAction} disabled={false} text='Edit' />
        ) : (
          <S.ChatBtn to={`/chat/${userInfo._id}`}>Message</S.ChatBtn>
        )}
      </S.Preview>
      <S.Content>
        <S.Username>{userInfo?.fullName}</S.Username>
        <S.AdditionalInfo>
          {additionalInfo?.map(
            (item, index) =>
              item.value && (
                <S.InfoItem key={index}>
                  <S.InfoName>{item.name}</S.InfoName>
                  <S.InfoValue>{item.value}</S.InfoValue>
                </S.InfoItem>
              ),
          )}
        </S.AdditionalInfo>
        <S.AdditionalInfo>
          {userInfo?.description && (
            <S.InfoItem>
              <S.InfoName>about</S.InfoName>
              <S.Description>{userInfo?.description}</S.Description>
            </S.InfoItem>
          )}
        </S.AdditionalInfo>
      </S.Content>
    </S.Wrapper>
  );
};

export default ViewProfile;
