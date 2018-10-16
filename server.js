const path = require('path');
const express = require('express');
const proxy = require('http-proxy').createProxyServer({});

const app = express();

const PORT = process.env.PORT || 3000;
const proxyPath = '/api/v1';

app.use(express.static('public'));

proxy.on('error', (err, req) => {
  console.error(err, req.url);
});

app.use(proxyPath, (req, res) => {
  // include root path in proxied request
  req.url = `${proxyPath}/${req.url}`;
  proxy.web(req, res, {
    target: 'https://perun-site-api.herokuapp.com/',
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://0.0.0.0:${PORT}`);
});
