import React, { FC, useEffect, useState } from 'react';

import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/cookieUtils';
import Preloader from 'components/Preloader';

import * as S from './styles';

type ReceiversProps = {
  className: string;
};

type RoomProps = {
  isDirectMessage: boolean;
  members: string[];
  name: string;
  owner: string;
  id: string;
};

const Receivers: FC<ReceiversProps> = ({ className }) => {
  const [rooms, setRooms] = useState<RoomProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.get('rooms', getCookie('token'));
      await setRooms(data);
    };

    getData();
  }, []);

  if (!rooms) return <Preloader />;

  return (
    <S.Wrapper className={className}>
      {rooms.map((item, index) => (
        <S.Receiver key={item.id ?? index} to={`/chat/${item.id}`}>
          {item.name || ''}
        </S.Receiver>
      ))}
    </S.Wrapper>
  );
};

export default Receivers;
