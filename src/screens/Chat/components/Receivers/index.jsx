import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { httpGet } from 'api/base.api';
import { getCookie } from 'utils/CookieUtils';
import Preloader from 'components/Preloader';

import * as S from './styles';

const Receivers = ({ className }) => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await httpGet('users', getCookie('token'));
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
