import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    maxlength: [ 20, 'We do not need that long of a name' ]
  },

  lastName: {
    type: String,
    maxlength: [ 20, 'That is a long last name' ]
  },

  birthDate: {
    type: String,
    maxlength: [ 20, 'bday' ]
  },

  address: {
    type: String,
    maxlength: [ 300, 'Leave some information to start the conversation' ]
  },

  city: {
    type: String,
    maxlength: [ 25, 'City name is too long, vote to change' ]
  },

  homeState: {
    type: String,
    required: true,
    maxlength: [ 20, 'Username does not need to be that long' ]
  },

  zip: {
    type: Number,
    maxlength: [ 10, 'Just the zip' ]
  },



});

export default mongoose.model('User', userSchema);
