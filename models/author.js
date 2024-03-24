// author.js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual('name').get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's lifespan
AuthorSchema.virtual('lifespan').get(function () {
  if (this.date_of_birth && this.date_of_death) {
    return (
      this.date_of_birth.getFullYear() +
      ' - ' +
      this.date_of_death.getFullYear()
    );
  } else if (this.date_of_birth) {
    return this.date_of_birth.getFullYear() + ' - ';
  } else {
    return '';
  }
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);
