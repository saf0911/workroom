import fetch from 'isomorphic-fetch';

function loadUserError(message) {
  return {
    type: 'USER_LOAD_ERROR',
    message
  };
} 

export function loadUsers() {
  return function (dispatch) {
    fetch('/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        dispatch(usersLoaded(users));
      })
      .catch(err => {
        dispatch(loadUserError(), err);
      });
  };
}

function usersLoaded(users) {
  return {
    type: 'USERS_LOADED',
    value: users
  };
}

function createUserError(message) {
  return {
    type: 'USER_CREATE_ERROR',
    message
  };
}

export function createUser(v) {
  return function (dispatch) {
    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(v)
    })
      .then(() => {
        dispatch(userCreated());
      })
      .catch(err => {
        dispatch(createUserError(), err);
      });
  };
}

function userCreated(user) {
  return {
    type: 'USERS_CREATED',
    value: user
  };
}


function deleteUserError(message) {
  return {
    type: 'USER_DELETE_ERROR',
    message
  };
}

export function deleteUser(id) {
  return function (dispatch) {
    fetch(`/users/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
      .then(() => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      }
    )
      .catch(err => {
        dispatch(deleteUserError(), err);
      });
  };
}

function userDeleted(user) {
  return {
    type: 'USERS_DELETED',
    value: user
  };
}


export function getUserId(id) {
  return function (dispatch) {
    fetch(`/users/${id}`)
    .then( response => {
      return response.json();
    })
    .then(oneUser => {
      dispatch(getUserDone(oneUser));
    });
  };
}
function getUserDone(user) {
  return {
    type: 'GET_USER_DONE',
    value: user,
  };
}

export function updateUser(id) {
  return function (dispatch) {
    fetch(`/users/${id}` , {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
    })
      .then(() => {
        dispatch(updateUserDone(id));
      })
      .catch(err => {
        dispatch(updateUserError(), err);
      });
  };
}

function updateUserDone(user) {
  return {
    type: 'USER_UPDATE_DONE',
    value: user,
  };
}

function updateUserError(message) {
  return {
    type: 'USER_UPDATE_ERROR',
    message
  };
}
