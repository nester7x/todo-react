const BASE_URL = 'http://localhost:4444/';

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
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse),
  post: (endpoint: string, data: object) =>
    fetch(BASE_URL + endpoint, {
      method: 'post',
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
