class Api {
  constructor() {
    this._token = null;
  }

  setToken(token) {
    this._token = token;
  }

  getProducts() {
    return this._request('/api/v1/products');
  }

  getProduct(id) {
    return this._request(`/api/v1/products/${id}`);
  }

  createProduct(body) {
    return this._request('/api/v1/products/', body, {
      method: 'POST',
    });
  }

  updateProduct(id, body) {
    return this._request(`/api/v1/products/${id}`, body, {
      method: 'PATCH',
    });
  }

  removeProduct(id) {
    return this._request(`api/v1/products/${id}`, undefined, {
      method: 'DELETE',
    });
  }

  getUser() {
    return this._request('api/v1/users/current');
  }

  login(emailForm, passwordForm) {
    const body = {
      email: emailForm,
      password: passwordForm,
    };
    return this._request('api/v1/auth/login', body, {
      method: 'POST',
    });
  }

  registerUser(body) {
    return this._request('api/v1/auth/register', body, {
      method: 'POST',
    });
    // const body = JSON.stringify(registerState);
    // console.log('register State', body);
    // return fetch('api/v1/auth/register', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body,
    // })
    //   .then(res => res.json())
    //   .then(res => console.log('rez', res));
  }

  _request(url, body, params = {}) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (this._token) {
      const Authorization = 'Authorization';
      headers[Authorization] = `Bearer ${this._token}`;
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
