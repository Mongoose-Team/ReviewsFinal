const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors= require ('cors')
const app = express();
const reviewRouter = require('./routes/route.review.js')
const port = process.env.PORT || 3002;
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/reviews', reviewRouter)
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
