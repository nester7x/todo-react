import React, { FC } from 'react';

import * as S from './styles';

type AdditionalInfo = {
  name: string;
  value: string;
};

type ProfileLayoutProps = {
  buttons: JSX.Element[];
  username: string;
  additionalInfo: AdditionalInfo[];
  aboutMe: string;
  userPhoto: string;
};

const ProfileLayout: FC<ProfileLayoutProps> = ({
  buttons,
  username,
  additionalInfo,
  aboutMe,
  userPhoto,
}) => {
  return (
    <S.Wrapper>
      <S.Profile>
        <div>
          <S.ImgWrapper>
            <S.Img src={userPhoto} alt='user photo' />
          </S.ImgWrapper>
          <S.Buttons>{buttons.map((item) => item)}</S.Buttons>
        </div>
        <S.Content>
          <S.Username>{username}</S.Username>
          {additionalInfo?.map((item, index) => (
            <S.Info key={index}>
              <S.InfoName>{item.name}</S.InfoName> | <S.InfoValue>{item.value}</S.InfoValue>
            </S.Info>
          ))}
          <S.SubTitle>about me</S.SubTitle>
          <S.About>{aboutMe}</S.About>
        </S.Content>
      </S.Profile>
    </S.Wrapper>
  );
};

export default ProfileLayout;
