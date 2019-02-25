let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    username: String,
    email: String,
    displayName: String,
    created: Date,
    updated: Date
},
{
  collection: "users"
});

module.exports = mongoose.model('users', gamesSchema);
