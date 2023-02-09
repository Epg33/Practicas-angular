var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express()
.use(cors({credentials: true, origin: 'http://localhost:4200'
}))
.use(bodyParser.json());


app.post('/register', function (req, res) {
  //let password = req.body.password;
  return res.status(200).json({"Status": "ok registrado"});
});


app.get('/products', function (req, res) {
  return res.status(200).json(products.products);
});


app.listen(10101, function () {
  console.log('Example app listening on port 10101!');
});
