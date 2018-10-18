import React, {Component} from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../services/store';
import { getUserId } from '../actions';




class Details extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserId(this.props.url.query.id);
  }


  render() {
    const { user } = this.props;
    // const userId = this.props.url.query.id;
    return (
      <div>
          <Header />
        <h1>
          Details
        </h1>
        <ul>
          <li> {user.firstName} </li>
          <li> {user.lastName} </li>
          <li> {user.birthdate} </li>
          <li> {user.address} </li>
          <li> {user.city} </li>
        </ul>
      </div>
    );
  }
}



Details.propTypes = {
  user: PropTypes.object.isRequired,
  getUserId: PropTypes.func,
  url: PropTypes.object,
  query: PropTypes.array,
  id: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    getUserId: id => {
      dispatch(getUserId(id));
    }
  };
}

function mapStateToProps(state) {
  return {
    users: state.users,
    user: state.user
  };
}


export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Details);
