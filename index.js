let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let path = require('path');

let db;
let port = 5000;
let http = require('http').createServer(app).listen(port);

let MongoClient = require('mongodb').MongoClient;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017/mongopractice', function(err, database) {
  db = database;

  app.get('/stuff', function(req, res) {
    // let cursor = db.collection('stuff').find().toArray(function(err, results) {
    //   console.log(results);
    // });
  });
  app.post('/stuff', function(req, res) {
    // let answer;
    // db.collection('stuff').insert(req.body, function(err, result) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     answer = result;
    //   }
    // });
    console.log(req.body);
  });
});
