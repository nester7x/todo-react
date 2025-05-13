import React, { FC, useContext, useEffect, useState } from 'react';

import Preloader from '../Preloader';
import { AuthContext } from 'context/authContext';
import { UserProps } from 'types/userTypes';

import * as S from './styles';

type EditProfileProps = {
  userInfo: UserProps;
  handleAction?: () => void;
};

const EditProfile: FC<EditProfileProps> = ({ userInfo, handleAction }) => {
  const { update } = useContext(AuthContext);

  const [updatedUserInfo, setUpdatedUserInfo] = useState<UserProps | null>(null);

  const hasData = Object.values(userInfo as UserProps).some((value) => value !== '' && value !== 0);

  const editInfo = [
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUpdatedUserInfo((prevState) => ({ ...prevState, [name]: value } as UserProps));
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setUpdatedUserInfo((prevState) => ({ ...prevState, [name]: value } as UserProps));
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (updatedUserInfo) {
      await update(updatedUserInfo);
      if (handleAction) {
        handleAction();
      }
    }
  };

  useEffect(() => {
    setUpdatedUserInfo(userInfo);
  }, [userInfo]);

  if (!hasData) return <Preloader />;

  return (
    <S.Wrapper onSubmit={handleUpdate}>
      {editInfo?.map((item, index) => (
        <S.InfoItem key={index}>
          <S.InfoName>{item.name}</S.InfoName>
          <S.EditInput
            onChange={handleInputChange}
            name={item.name}
            value={updatedUserInfo && updatedUserInfo[item.name]}
            placeholder=''
            type={item.name === 'age' ? 'number' : 'text'}
            inputProps={item.name === 'age' ? { min: 5, max: 130 } : { maxLength: 30 }}
          />
        </S.InfoItem>
      ))}
      <S.InfoItem>
        <S.InfoName>about</S.InfoName>
        <S.DescriptionArea
          onChange={handleTextareaChange}
          name='description'
          maxRows={10}
          minRows={4}
          value={updatedUserInfo?.description}
          placeholder=''
        />
      </S.InfoItem>
      <S.SaveBtn type='submit' disabled={false} text='Save' />
    </S.Wrapper>
  );
};

export default EditProfile;
