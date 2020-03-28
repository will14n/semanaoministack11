const express = require('express');
const cors = require('cors');
var request = require('request');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);