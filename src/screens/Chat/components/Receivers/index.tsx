import React, { FC, useEffect, useState } from 'react';

import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/cookieUtils';
import Preloader from 'components/Preloader';

import * as S from './styles';

type ReceiversProps = {
  className: string;
};

type InfoProps = {
  id: number;
  username: string;
};

const Receivers: FC<ReceiversProps> = ({ className }) => {
  const [info, setInfo] = useState<InfoProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.get('users', getCookie('token'));
      await setInfo(data);
    };

    getData();
  }, []);

  if (!info) return <Preloader />;

  return (
    <S.Wrapper className={className}>
      {info.map((item) => (
        <S.Receiver key={item?.id} to={`/chat/${item?.id}`}>
          {item?.username || ''}
        </S.Receiver>
      ))}
    </S.Wrapper>
  );
};

export default Receivers;
