const mongoose = require('mongoose');
const { Schema } = mongoose;

const fishSchema = new Schema({
  zh_name: String,
  en_name: String,
  introduction: String,
  habitat: String,
  category: [String],
  imageSrc: String,
});

const Fish = mongoose.model('fish', fishSchema);

module.exports = {
  Fish,
};
