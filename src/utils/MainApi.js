import { BASE_URL, ERROR_MESSAGE } from './config';

export function register (email, password, name) {
  return fetch(BASE_URL + '/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name})
  })
    .then(res => res.json())
    .then(res => {
      if (res.data) {
        return res;
      } else if (res.statusCode === 400 && res.validation) {
        return res.validation.body;
      } else if (res.message) {
        return res;
      }
    })
    .catch(err => {
      return {
        message: ERROR_MESSAGE
      }
    });
};

export function login (email, password) {
  return fetch(BASE_URL + '/signin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password})
  })
    .then((res => res.json()))
    .then(res => {
      if (res.data) {
        return res;
      } else if (res.statusCode === 400 && res.validation) {
        return res.validation.body;
      } else if (res.message) {
        return res;
      }
    })
    .catch(err => {
      return {
        message: ERROR_MESSAGE
      }
    })
};

export function checkAuth() {
  return fetch(BASE_URL + '/users/me', {
    method: 'GET',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      return {
        message: ERROR_MESSAGE
      }
    })
};

export function createArticle(keyword, title, text, date, source, link, image) {
  return fetch(BASE_URL + '/articles', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ keyword, title, text, date, source, link, image})
  })
    .then(res => res.json())
    .then(res => {
      if (res.data) {
        return res
      } else if (res.statusCode === 400 && res.validation) {
        return res.validation.body;
      } else if (res.message) {
        return res;
      }
    })
    .catch(err => {
      return {
        message: ERROR_MESSAGE
      }
    })
};

export function deleteArticle (id) {
  return fetch(BASE_URL + '/articles/' + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(res => res.json())
    .then(res => {
      if (res.data) {
        return res;
      } else if (res.statusCode === 400 && res.validation) {
        return res.validation.body;
      } else if (res.message) {
        return res;
      }
    })
    .catch(err => {
      return {
        message: ERROR_MESSAGE
      }
    })
};

export function getArticles() {
  return fetch(BASE_URL + '/articles', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(res => res.json())
    .then(res => {
      if (res.data) {
        return res;
      } else if (res.statusCode === 400 && res.validation) {
        return res.validation.body;
      } else if (res.message) {
        return res;
      }
    })
    .catch(err => {
      return {
        message: ERROR_MESSAGE
      }
    })
};


