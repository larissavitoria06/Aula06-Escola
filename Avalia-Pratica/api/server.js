const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./src/router'); 

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3009, () => {
  console.log('API executando em http://localhost:3006');
});
