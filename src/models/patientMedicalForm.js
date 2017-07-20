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

  asthmaYes: {
    type: String,
    maxlength: [ 3, 'Just Yes or No' ]
  }



});

export default mongoose.model('User', userSchema);
