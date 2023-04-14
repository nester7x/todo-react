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
  const nameEQ = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
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
