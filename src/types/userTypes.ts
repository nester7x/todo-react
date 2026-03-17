type UserProps = {
  id: string;
  username: string;
  email: string;
  activity: string;
  city: string;
  country: string;
  age: number;
  description: string;
  image: string;
  [key: string]: any;
  errors?: string;
};

export type { UserProps };
