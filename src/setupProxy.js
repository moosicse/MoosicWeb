const proxy = require('http-proxy-middleware');

const secure = false;

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://127.0.0.1:8000/',
      changeOrigin: true,
      secure,
    }),
    proxy('/api-auth', {
      target: 'http://127.0.0.1:8000/',
      changeOrigin: true,
      secure,
    }),
    proxy('/admin', {
      target: 'http://127.0.0.1:8000/',
      changeOrigin: true,
      secure,
    }),
    proxy('/api-token-auth', {
      target: 'http://127.0.0.1:8000/',
      changeOrigin: true,
      secure,
    })
  );
};
