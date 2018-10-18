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

  asthma: {
    type: Boolean,
  }



});

export default mongoose.model('User_id', userSchema);
