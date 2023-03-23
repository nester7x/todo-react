import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import CKEditor from 'components/CKEditor';
import { GlobalContext } from 'context/global';
import { getCookie } from 'utils/CookieUtils';
import { api } from 'utils/apiUtils';

import * as S from './styles';

const SendMessage = ({ chatId, getConversation }) => {
  const { user } = useContext(GlobalContext);

  const [messageValue, setMessageValue] = useState('');

  const handleInputChange = (event, editor) => {
    const data = editor.getData();
    setMessageValue(data);
  };

  const sendMessage = async () => {
    const token = getCookie('token');

    const data = await api.post(
      'message',
      {
        from: user?.userInfo?.id.toString(),
        to: chatId,
        message: messageValue
      },
      {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    );

    await getConversation();
    await setMessageValue('');
    return data;
  };

  return (
    <S.Wrapper>
      <CKEditor
        data={messageValue}
        onChange={handleInputChange}
        placeholder="Write a message..."
      />
      <S.SendBtn onClick={sendMessage} disabled={!messageValue}>
        Send
      </S.SendBtn>
    </S.Wrapper>
  );
};

SendMessage.propTypes = {
  chatId: PropTypes.string.isRequired,
  getConversation: PropTypes.func.isRequired
};

export default SendMessage;
