const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treeSchema = new Schema({
    varietyName: { type: String, required: true },
    lastFertDate: {type: String, required: true}
  });
  
  module.exports = mongoose.model('Tree', treeSchema);