export type Room = {
  id: string;
  name: string;
  isDirectMessage: boolean;
  owner: string;
  members: string[];
  createdAt: string;
  updatedAt: string;
};