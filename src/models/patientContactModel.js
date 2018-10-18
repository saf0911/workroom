import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

  userName: {
    type: String,
    maxlength: [ 20, 'We do not need that long of a name' ]
  },

  passWord: {
    type: String,
    maxlength: [ 20, 'We do not need that long of a name' ]
  },


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
    type: String, Number,
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

  aasthmaExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  asthma: {
    type: Boolean,
  },




});

export default mongoose.model('User', userSchema);
