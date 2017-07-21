import User from '../models/patientContactModel';

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
    User.findById(request.params.id).exec()
      .then(user => {
        user.firstName = request.body.firstName || user.firstName;
        user.lastName = request.body.lastName || user.lastName;
        user.avatar = request.body.avatar || user.avatar;
        user.interests = request.body.interests || user.interests;
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
