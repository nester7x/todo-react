type User = {
  avatarUrl: string;
  fullName: string;
  email: string;
};

type PostProps = {
  id: string;
  user: User;
  createdAt: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
};

export type { User, PostProps };
