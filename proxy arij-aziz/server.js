const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/reviews', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
