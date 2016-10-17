const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json({limit: '20mb'}));//设置前端post提交最大内容
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));

// load routers
routes(app);

app.set('port', '3000');
const server = http.createServer(app);

server.listen('3000');

