type UserProps = {
  id: string;
  fullName: string;
  email: string;
  activity: string;
  city: string;
  country: string;
  age: number;
  description: string;
  userPhoto: string;
  [key: string]: any;
  errors?: string;
};

export type { UserProps };
