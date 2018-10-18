class Api {
  // var token;
  setToken(localToken) {
    //   console.log('Api setToken', localToken);
    //   token = localToken;
    //   return token;
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

  _request(url, body, params = {}) {
    console.log('main token', this.token);
    return fetch(url, {
      mathod: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
      ...params,
      body:
        typeof body === 'object' ? JSON.stringify(body) : undefined,
    }).then(raw => raw.json());
  }
}

const api = new Api();

export default api;
