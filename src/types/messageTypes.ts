export type Message = {
  id: string;
  roomId: string;
  sender: MessageSender;
  body: string;
  createdAt: string;
  updatedAt: string;
};

export type MessageSender = {
  id: string;
  username: string;
  image: string;
};

export type MessageRequest = {
  roomId: string;
  body: string;
};
