var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number
});

var Student = mongoose.model('Student', UserSchema);

module.exports = Student;