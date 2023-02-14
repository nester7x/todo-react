const config = {
  api: 'http://localhost:8080/api/',
  options: {
    headers: { 'content-type': 'application/json' }
  }
};

export const httpGet = (endpoint, token) =>
  fetch(`${config.api}${endpoint}`, {
    method: 'get',
    ...config.options,
    headers: {
      'x-access-token': `${token}`
    }
  })
    .then((response) =>
      response
        .json()
        .then((data) => ({
          data,
          status: response.status
        }))
        .then((res) => res.data)
    )
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });

export const httpPost = (endpoint, data, options) =>
  fetch(`${config.api}${endpoint}`, {
    method: 'post',
    body: data ? JSON.stringify(data) : null,
    headers: options || config.options.headers
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
