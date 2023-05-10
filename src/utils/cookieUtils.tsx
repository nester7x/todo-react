export const setCookie = (cname: string, value: string | null, days: number): void => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${cname}=${value || ''}${expires}; path=/`;
};

export const getCookie = (cname: string): string | undefined => {
  const key = `${cname}=`;
  const parts = document.cookie.split(';');
  for (let i = 0; i < parts.length; i += 1) {
    let currentPart = parts[i];
    while (currentPart.charAt(0) === ' ')
      currentPart = currentPart.substring(1, currentPart.length);
    if (currentPart.indexOf(key) === 0)
      return currentPart.substring(key.length, currentPart.length);
  }
  return '';
};

export const deleteCookie = (cname: string, path: string): void => {
  if (getCookie(cname)) {
    document.cookie = `${cname}=${
      path ? `;path=${path}` : ''
    };expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  }
};
