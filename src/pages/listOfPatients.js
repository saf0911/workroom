import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  loadUsers,
  deleteUser}
  from '../actions';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../services/store';
import Link from 'next/link';

class ListOfPatients extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }


  render() {
    return (
      <div>
        {this.props.users.map((user, key) => {
          return (
            <div key={key} >
              <ul>
                <li> {user.firstName} </li>
                <li> {user.lastName} </li>
                <li> {user.userName} </li>
              </ul>
              <Link href={`/details?id=${user._id}`} >
                <button>
                View User
                </button>
              </Link>
              <Link href={`patientMedicalForm?id=${user._id}`}>
                <button>
                  Fill out your form
                </button>
              </Link>
              <button onClick=
                {() => this.props.deleteUser(`${user._id}`)} >
                Delete User
              </button>


            </div>

          );
        })}
      </div>
    );
  }
}


ListOfPatients.propTypes = {
  users: PropTypes.array.isRequired,
  userSelect: PropTypes.func,
  deleteUser: PropTypes.func,
  loadUsers: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    },
    deleteUser: id => {
      dispatch(deleteUser(id));
    }
  };
}

function mapStateToProps(state) {
  return {
    users: state.users,
    user: state.user
  };
}



export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ListOfPatients);
