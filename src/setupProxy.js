// setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000', // URL of your Laravel backend
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the '/api' prefix
      },
    })
  );
};
