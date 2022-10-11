export const showComponents = (statement, isLogin, component) => {
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
