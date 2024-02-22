const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = async (app) => {
    app.use('/api', createProxyMiddleware({
        target: 'http://localhost:4001',
        changeOrigin: true
    }));
};