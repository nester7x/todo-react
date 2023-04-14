import { ReactNode } from 'react';

export const showComponents = (
  statement: boolean,
  isLogin: string,
  component: ReactNode,
): ReactNode => {
  switch (isLogin) {
    case 'general':
      return component;
    case statement && 'loggedIn':
      return component;
    case !statement && 'loggedOut':
      return component;
    default:
      return '';
  }
};
