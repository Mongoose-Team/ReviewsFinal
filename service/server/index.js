const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3001;
const reviewRouter = require('./routes/route.review.js')
//const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(morgan('dev'));
app.use(cors('dev'))
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/reviews', reviewRouter)


// const proxyMiddleware = createProxyMiddleware({
//   target: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11002&Authorization= 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\n\n',
//   router: (req) => {
//     if(req.path === '/api/reviews'){
//       return 'http://localhost:3000/api/reviews/11002'
//     }
//     else {
//       return;
//     }
//   }
// })


// app.get('/api/reviews/:id', (req, res) => {
//   var config = {
//     method: 'get',
//     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id='+req.params.id,
//     headers: { 
//       'Authorization': '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', 
//     }
//   }

  
//   axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//     res.send(JSON.stringify(response.data))
//   })
//   .catch(function (error) {
//     console.log(error);
//     res.send(JSON.stringify(error))
//   });
// })

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
