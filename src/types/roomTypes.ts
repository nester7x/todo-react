export type Room = {
  id: string;
  name: string;
  isDirectMessage: boolean;
  owner: string;
  members: Member[];
  createdAt: string;
  updatedAt: string;
};

export type Member = {
  username: string;
  id: string;
};
