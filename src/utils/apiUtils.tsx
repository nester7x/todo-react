const BASE_URL = 'http://localhost:8080/api/';

const handleResponse = async (response: Response) => {
  try {
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const api = {
  get: (endpoint: string, token: string | undefined) =>
    fetch(BASE_URL + endpoint, {
      headers: {
        'x-access-token': `${token}`,
      },
    }).then(handleResponse),
  post: (endpoint: string, data: object) =>
    fetch(BASE_URL + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(handleResponse),
  put: (endpoint: string, data: object) =>
    fetch(BASE_URL + endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(handleResponse),
  delete: (endpoint: string) =>
    fetch(BASE_URL + endpoint, {
      method: 'DELETE',
    }).then(handleResponse),
};
