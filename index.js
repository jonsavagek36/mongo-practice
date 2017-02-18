require('./model/db');

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let path = require('path');

let db;
let controller = require('./controller/controller');
let port = 5000;
let http = require('http');

let MongoClient = require('mongodb').MongoClient;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/stuff', controller.get_all);
app.post('/stuff', controller.create);

http.createServer(app).listen(port);
