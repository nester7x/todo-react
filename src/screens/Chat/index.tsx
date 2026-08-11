import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { ChatContext, ChatProvider } from './context/chatContext';

import Messages from './components/Messages';
import SendMessage from './components/SendMessage';
import Receivers from './components/Receivers';
import { AuthContext } from '../../context/authContext';

const ChatInner: FC = () => {
  const { messages, getMessages } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  const { id } = useParams<{ id: string }>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const btnRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const closeDropDown = (e: any): void => {
      if (e.path && e.path[0] !== btnRef.current) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropDown);

    return () => document.body.removeEventListener('click', closeDropDown);
  }, []);

  useEffect(() => {
    if (id) {
      getMessages(id);
    }
  }, [id]);

  return (
    <div className='h-full flex items-center'>
      <div className='w-full rounded h-[90%] overflow-hidden border border-solid border-black'>
        <div className='flex justify-between items-center'>
          <MenuIcon
            ref={btnRef}
            onClick={() => setIsOpen((prev) => !prev)}
            className='!hidden max-tablet:!block cursor-pointer !m-[10px] max-mobileL:!mt-[5px] max-mobileL:!mb-[5px] max-mobileL:!mr-0 max-mobileL:!ml-[10px] z-[100]'
          />
          <p className='text-sm p-[10px] text-black text-center w-[30%] max-tablet:hidden'>
            Contacts
          </p>
        </div>
        <div className='flex justify-between relative h-full'>
          <Receivers className={isOpen ? 'open' : 'closed'} user={user} />
          {id ? (
            <div
              className={`flex flex-col justify-between h-[93%] w-[70%] overflow-x-hidden max-tablet:w-full ${
                isOpen ? 'pointer-events-none opacity-80' : ''
              }`}
            >
              <Messages messages={messages} />
              <SendMessage roomId={id} />
            </div>
          ) : (
            <p className='text-black text-[25px] flex justify-center items-center w-[80%] max-tablet:w-full'>
              Choose a receiver
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Chat: FC = () => (
  <ChatProvider>
    <ChatInner />
  </ChatProvider>
);

export default Chat;
