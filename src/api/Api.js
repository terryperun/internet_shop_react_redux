class Api {
  constructor() {
    this._token = null;
  }

  setToken(token) {
    this._token = token;
  }

  getProducts() {
    return this._request('/api/v2/products');
  }

  getProduct(id) {
    return this._request(`/api/v2/products/${id}`);
  }

  createProduct(body) {
    return this._request('/api/v2/products/', body, {
      method: 'POST',
    });
  }

  updateProduct(id, body) {
    return this._request(`/api/v2/products/${id}`, body, {
      method: 'PATCH',
    });
  }

  removeProduct(id) {
    return this._request(`/api/v2/products/${id}`, undefined, {
      method: 'DELETE',
    });
  }

  getUser() {
    return this._request('/api/v2/users/current');
  }

  login(emailForm, passwordForm) {
    const body = {
      email: emailForm,
      password: passwordForm,
    };
    return this._request('/api/v2/auth/login', body, {
      method: 'POST',
    });
  }

  registerUser(body) {
    return this._request('/api/v2/auth/register', body, {
      method: 'POST',
    });
  }

  rememberUser(body) {
    return this._request('/api/v2/auth/register', body, {
      method: 'POST',
    });
  }

  _request(url, body, params = {}) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (this._token) {
      headers['Authorization'] = `Bearer ${this._token}`; // eslint-disable-line
    }
    return fetch(url, {
      mathod: 'GET',
      headers,
      ...params,
      body:
        typeof body === 'object' ? JSON.stringify(body) : undefined,
    }).then(raw => raw.json());
  }
}

const api = new Api();

export default api;
