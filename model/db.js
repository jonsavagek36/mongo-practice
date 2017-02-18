let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Message = new Schema({
  user_id: String,
  content: String,
  updated_at: Date
});

mongoose.model('Message', Message);
mongoose.connect('mongodb://localhost:27017/mongopractice');
