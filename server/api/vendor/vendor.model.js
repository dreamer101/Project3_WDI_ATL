'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VendorSchema = new Schema({
      username: String,
      name: String,
      category: String,
      location: { street: String, city: String , state: String },
      type: String,
      description: String,
      email: String,
      stars: Number,
      imageFile: String
});

module.exports = mongoose.model('Vendor', VendorSchema);
