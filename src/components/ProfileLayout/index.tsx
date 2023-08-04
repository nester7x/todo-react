import React, { FC, useContext, useEffect, useState } from 'react';

import { AuthContext } from 'context/authContext';
import { UserProps } from 'types/userTypes';

import * as S from './styles';

type ProfileLayoutProps = {
  buttons: JSX.Element[];
  user: UserProps | undefined;
  children: React.ReactElement;
  isEditMode?: boolean;
  setIsEditMode?: (state: boolean) => void | undefined;
};

const ProfileLayout: FC<ProfileLayoutProps> = ({
  buttons,
  user: initialUser,
  children,
  isEditMode,
  setIsEditMode,
}) => {
  const { update } = useContext(AuthContext);
  const user: UserProps | null = initialUser || null;
  const additionalInfo = [
    {
      name: 'activity',
      value: user?.activity,
    },
    {
      name: 'country',
      value: user?.country,
    },
    {
      name: 'city',
      value: user?.city,
    },
    {
      name: 'age',
      value: user?.age,
    },
  ];

  const [updatedUserInfo, setUpdatedUserInfo] = useState<UserProps | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUpdatedUserInfo((prevState) => ({ ...prevState, [name]: value } as UserProps));
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setUpdatedUserInfo((prevState) => ({ ...prevState, [name]: value } as UserProps));
  };

  const handleUpdate = async (updatedUserInfo: UserProps | null): Promise<void> => {
    if (updatedUserInfo) {
      await update(updatedUserInfo);
      setIsEditMode && setIsEditMode(false);
    }
  };

  useEffect(() => {
    setUpdatedUserInfo(user);
  }, [user]);

  // TODO: dropdown from API for countries and cities
  return (
    <S.Wrapper>
      <S.Profile>
        <div>
          <S.ImgWrapper>
            <S.Img
              src={
                user?.userPhoto ||
                'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
              }
              alt='user photo'
            />
          </S.ImgWrapper>
          <S.Buttons>
            {isEditMode ? (
              <S.Btn
                type='button'
                onClick={() => handleUpdate(updatedUserInfo)}
                disabled={false}
                text='Save'
              />
            ) : (
              buttons.map((item) => item)
            )}
          </S.Buttons>
        </div>
        <S.Content>
          <S.Username>{user?.fullName}</S.Username>
          {additionalInfo?.map((item, index) => (
            <S.Info key={index}>
              <S.InfoName>{item.name}</S.InfoName> |{' '}
              {isEditMode ? (
                <S.EditInput
                  onChange={handleInputChange}
                  name={item.name}
                  value={!updatedUserInfo || updatedUserInfo[item.name]}
                  placeholder=''
                  type={item.name === 'age' ? 'number' : 'text'}
                  inputProps={item.name === 'age' ? { min: 5, max: 130 } : { maxLength: 30 }}
                />
              ) : (
                <S.InfoValue>{item.value}</S.InfoValue>
              )}
            </S.Info>
          ))}
          <S.SubTitle>about me</S.SubTitle>
          {isEditMode ? (
            <S.DescriptionArea
              onChange={handleTextareaChange}
              name='description'
              variant='plain'
              value={updatedUserInfo?.description}
              placeholder=''
            />
          ) : (
            <S.Description>{user?.description}</S.Description>
          )}
        </S.Content>
      </S.Profile>
      {children}
    </S.Wrapper>
  );
};

export default ProfileLayout;
