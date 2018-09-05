
class Api {
  getProducts() {
    return this._request('/api/v1/products');
  }

  createProduct(body) {
    return this._request('/api/v1/products/', body, { method: 'POST' });
  }
  //
  updateProduct(body, id) {
    return this._request(`/api/v1/products/${id}`, body, { method: 'PATCH' });
  }

  removeProduct(id) {
    return this._request(`api/v1/products/${id}`, 0, { method: 'DELETE' });
  }

  _request(url, body, params = {}) {
    return fetch(url, {
      mathod: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...params,
      body: typeof body === 'object' ? JSON.stringify(body) : undefined,
    }).then((raw) => {
      if (raw.text.length > 0) {
        return raw.json();
      }
      return raw;
    });
  }
}

const api = new Api();

export default api;
