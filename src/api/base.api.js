const config = {
  api: 'https://nestbe.herokuapp.com/api/',
  options: {
    headers: { 'content-type': 'application/json' }
  }
};

export const httpGet = (endpoint, token) =>
  fetch(`${config.api}${endpoint}`, {
    method: 'get',
    ...config.options,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });

export const httpPost = (endpoint, data) =>
  fetch(`${config.api}${endpoint}`, {
    ...config.options,
    body: data ? JSON.stringify(data) : null,
    method: 'post'
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });

export const httpPut = (endpoint, data) =>
  fetch(`${config.api}${endpoint}`, {
    method: 'put',
    body: data ? JSON.stringify(data) : null,
    ...config.options
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });

export const httpDelete = (endpoint) =>
  fetch(`${config.api}${endpoint}`, {
    method: 'delete',
    ...config.options
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
