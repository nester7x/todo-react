import React, { FC, useContext, useEffect, useState } from 'react';

import Preloader from '../Preloader';
import { AuthContext } from 'context/authContext';
import { User } from 'types/userTypes';

import * as S from './styles';

type EditProfileProps = {
  userInfo: User;
  handleAction?: () => void;
};

const EditProfile: FC<EditProfileProps> = ({ userInfo, handleAction }) => {
  const { update } = useContext(AuthContext);

  const [updatedUserInfo, setUpdatedUserInfo] = useState<User | null>(null);

  const hasData = Object.values(userInfo as User).some((value) => value !== '' && value !== 0);

  const editInfo = [
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
    setUpdatedUserInfo((prevState) => ({ ...prevState, [name]: value } as User));
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setUpdatedUserInfo((prevState) => ({ ...prevState, [name]: value } as User));
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (updatedUserInfo) {
      const changedFields = (Object.keys(updatedUserInfo) as (keyof User)[]).reduce((acc, key) => {
        if (updatedUserInfo[key] !== userInfo[key]) {
          (acc as User)[key] = updatedUserInfo[key] as never;
        }
        return acc;
      }, {} as Partial<User>);

      if (Object.keys(changedFields).length > 0) {
        await update(changedFields as User);
        if (handleAction) {
          handleAction();
        }
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
            // @ts-ignore
            value={updatedUserInfo?.[item.name] ?? ''}
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
