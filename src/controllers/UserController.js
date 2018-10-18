import User from '../models/patientContactModel';
import userId from '../models/patientMedicalForm';

const userController = {

  list: (request, response, next) => {
    User.find({}).exec()
    .then(Users => {
      return response.json(Users);
    })
    .catch(err => {
      return next(err);
    });
  },
  

  show: (request, response, next) => {
    User.findById(request.params.id).exec()
    .then(Users => {
      return response.json(Users);
    })
    .catch(err => {
      return next(err);
    });
  },

  remove: (request, response, next) => {
    User.findByIdAndRemove(request.params.id).exec()
    .then(Users => {
      return response.json(Users);
    })
    .catch(err => {
      return next(err);
    });
  },

  create: (request, response, next) => {
    const user = new User(request.body);

    user.save()
    .then(storedUser => {
      return response.json(storedUser);
    })
    .catch(err => {
      return next(err);
    });
  },


  update: (request, response, next) => {
    userId.findByIdAndUpdate(request.params.id).exec()
      .then(user => {
        user.firstName = request.body.firstName || user.firstName;
        user.lastName = request.body.lastName || user.lastName;
        user.passWord = request.body.passWord || user.passWord;
        user.asthma = request.body.asthma || user.asthma;
        user.userName = request.body.userName || user.userName;

        return user.save();
      })
      .then(changedUser => {
        return response.json(changedUser);
      })
      .catch(err => {
        return next(err);
      });
  }

};



export default userController;
