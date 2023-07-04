type User = {
  avatarUrl: string;
  fullName: string;
};

type Post = {
  id: string;
  user: User;
  createdAt: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
};

export const sortedByDate = (data: Post[]): Post[] => {
  return [...data].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
};

export const sortedByPopular = (data: Post[]) => {
  return [...data].sort((a, b) => b.viewsCount - a.viewsCount);
};
