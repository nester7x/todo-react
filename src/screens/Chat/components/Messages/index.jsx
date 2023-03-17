import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from 'context/global';
import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/CookieUtils';
import Message from '../Message';

import * as S from './styles';

const Messages = ({ conversation }) => {
  const { user } = useContext(GlobalContext);

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.get('users', getCookie('token'));
      await setInfo(data);
    };

    getData();
  }, []);

  return (
    <S.Messages>
      {conversation.length === 0 ? (
        <S.EmptyMessage>Nothing here...</S.EmptyMessage>
      ) : (
        conversation.map((item) => (
          <Message
            style={
              item.from === user.userInfo.id.toString()
                ? {
                    border: '1px solid #1976d2',
                    backgroundColor: '#1976d2',
                    marginLeft: 'auto'
                  }
                : {}
            }
            key={item.id}
            createdDate={item.createdDate}
            from={info.map((infoItem) =>
              infoItem.id.toString() === item.from ? infoItem.username : ''
            )}
            id={item.id}
            message={item.message}
          />
        ))
      )}
    </S.Messages>
  );
};

Messages.propTypes = {
  conversation: PropTypes.arrayOf.isRequired
};

export default Messages;
