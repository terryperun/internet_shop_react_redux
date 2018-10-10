class Api {
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
  //
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

  // loging(body) {
  //   return this._request('api/v1/auth/login', body, {
  //     method: 'POST',
  //   });
  // }

  // remember(body) {
  //   return this._request('api/v1/auth/login', body, {
  //     method: 'POST',
  //   });
  // }

  // getProductsByIds(ids) {
  //   const queryString = ids.map(id => `ids[]=${id}`).join('&&');
  //   return fetch(`/api/v1/products?${queryString}`).then(raw =>
  //     raw.json());
  // }

  _request(url, body, params = {}) {
    return fetch(url, {
      mathod: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...params,
      body:
        typeof body === 'object' ? JSON.stringify(body) : undefined,
    }).then(raw => raw.json());
  }
}

const api = new Api();

export default api;
