var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({});

//Export mode
module.exports = mongoose.model('Book', BookSchema);
