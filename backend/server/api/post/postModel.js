const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    author: true
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category'
    }
  ] 
});


PostSchema.post('save', function(next) {
  // doc.populate('user').execPopulate(function() {
  //   next();
  // });
})

module.exports = mongoose.model('post', PostSchema);