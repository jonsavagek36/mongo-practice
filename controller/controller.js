let mongoose = require('mongoose');
let Message = mongoose.model('Message');

exports.create = function(req, res) {
  new Message({
    content: req.body.content,
    updated_at: Date.now()
  }).save(function(err, result, count) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}

exports.get_all = function(req, res) {
  Message.find(function(err, results, count) {
    res.send(results);
  });
}
