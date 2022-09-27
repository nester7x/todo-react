import React, { useContext, useState } from 'react';
import CKEditor from 'components/CKEditor';
import { GlobalContext } from 'context/global';
import { getCookie } from 'utils/CookieUtils';
import { httpPost } from 'api/base.api';
import PropTypes from 'prop-types';
import * as S from './styles';

const SendMessage = ({ chatId }) => {
  const { user } = useContext(GlobalContext);
  const [messageValue, setMessageValue] = useState('');

  const handleInputChange = (event, editor) => {
    const data = editor.getData();
    setMessageValue(data);
  };

  const sendMessage = async () => {
    const token = getCookie('token');

    const data = await httpPost(
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
    await setMessageValue('');
    await window.location.reload();
    return data;
  };

  return (
    <S.Wrapper>
      <CKEditor
        value={messageValue}
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
  chatId: PropTypes.string.isRequired
};

export default SendMessage;
