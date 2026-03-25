import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { Room } from '../../../types/roomTypes';
import { Message, MessageRequest } from '../../../types/messageTypes';
import { api } from '../../../utils/apiUtils';
import { AuthContext } from '../../../context/authContext';
import socket from '../../../utils/socket';

type ChatContextType = {
  rooms: Room[];
  messages: Message[];
  activeRoomId: string;
  sendMessage: (body: MessageRequest) => Promise<void>;
  getMessages: (roomId: string) => Promise<void>;
};

type ChatProviderProps = {
  children: React.ReactNode;
};

export const ChatContext = createContext<ChatContextType>({} as ChatContextType);

const { Provider } = ChatContext;

export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const { loginState } = useContext(AuthContext);

  const [rooms, setRooms] = useState<Room[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeRoomId, setActiveRoomId] = useState<string>('');

  const sendMessage = async (message: MessageRequest) => {
    await api.post('messages', message, loginState.token!);
  };

  const getMessages = async (roomId: string) => {
    const data = await api.get(`messages/${roomId}`, loginState.token);

    if (data) {
      setMessages(data);
      socket.emit('join-room', roomId);
      setActiveRoomId(roomId);
    }
  };

  useEffect(() => {
    socket.on('receive-message', (message: Message) => setMessages((prev) => [message, ...prev]));

    return () => {
      socket.off('receive-message');
    };
  }, []);

  return (
    <Provider value={{ rooms, messages, activeRoomId, sendMessage, getMessages }}>
      {children}
    </Provider>
  );
};
