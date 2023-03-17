import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/CookieUtils';
import Preloader from 'components/Preloader';

import * as S from './styles';

const Receivers = ({ className }) => {
  const [info, setInfo] = useState('');

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

Receivers.propTypes = {
  className: PropTypes.string.isRequired
};

export default Receivers;
