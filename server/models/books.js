/* Project Name: COMP308-W2019-MidTerm-300976308
   File Name: books.js
   Name: Tejinder Kaur
   Student id: 300976308
   Date: February 25, 2019 */

let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);