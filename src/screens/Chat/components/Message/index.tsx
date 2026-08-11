import React, { FC } from 'react';

import { Message } from '../../../../types/messageTypes';
import moment from 'moment';

type MessageProps = {
  message: Message;
  style?: React.CSSProperties;
};

const Message: FC<MessageProps> = ({ message, style }) => (
  <div
    style={style}
    className='border border-black w-[40%] rounded p-[10px] mb-[10px] max-laptop:w-[45%]'
  >
    <div
      className='
        flex justify-between items-center mb-[10px]
        max-mobileL:flex-col max-mobileL:items-start
      '
    >
      <p className='font-bold mr-[10px] text-black max-tabletS:text-xs max-mobileL:mb-[2px]'>
        {message?.sender?.username}
      </p>
      <p className='text-black text-xs opacity-60 max-tabletS:text-[10px]'>
        {moment(message?.createdAt).calendar()}
      </p>
    </div>
    <p className='text-black break-words max-tabletS:text-[10px]'>{message?.body}</p>
  </div>
);

export default Message;
