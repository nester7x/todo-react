import React, { FC, useContext } from 'react';

import { AuthContext } from 'context/authContext';
import Message from '../Message';

type MessagesProps = {
  messages: Message[];
};

const Messages: FC<MessagesProps> = ({ messages }) => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className='
        pt-5 px-5 flex flex-col-reverse overflow-y-auto overflow-x-hidden mb-5 border-t border-black
        [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-[20px] [&::-webkit-scrollbar-thumb]:rounded-[20px]
        max-tablet:mb-[10px] max-tablet:p-[10px_10px_0]
      '
    >
      {messages?.length === 0 ? (
        <p className='text-[30px] mx-auto text-white'>Nothing here...</p>
      ) : (
        messages?.map((item, index) => (
          <Message
            key={item?.id || index}
            style={
              item?.sender?.id === user?.id?.toString()
                ? {
                    border: '1px solid #1976d2',
                    backgroundColor: '#1976d2',
                    marginLeft: 'auto',
                  }
                : {}
            }
            message={item}
          />
        ))
      )}
    </div>
  );
};

export default Messages;
