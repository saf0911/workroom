import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../services/store';
import Header from '../components/Header';
import {
  loadUsers,
  updateUser,
} from '../actions';
import PropTypes from 'prop-types';
import Link from 'next/link';



const FORM_VALUES = {
  userName: '',
  passWord: '',
  firstName: '',
  lastName: '',
  asthma: false,
  asthmaExplain: '',
};

class patientMedicalForm extends Component {
  constructor(props) {
    super(props);
    this.state = FORM_VALUES;

  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state
    );

    this.setState(FORM_VALUES);
  }



  render() {

    return (
      <div>
        <Header />
        <h1>
          Create a profile
        </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>


            <input
              type='text'
              name='firstName'
              placeholder='Add First name'
              value={this.state.firstName}
              onChange={this.handleInputChange.bind(this)}
            />
            &nbsp; &nbsp;


            <input
              type='text'
              name='lastName'
              placeholder='Add Last name'
              value={this.state.lastName}
              onChange={this.handleInputChange.bind(this)}
             />
            <br /> <br /> <br />


            <input
              type='radio'
              name='asthma'
              value={this.state.asthma}
              onChange={this.handleInputChange.bind(this)}
            />
            Yes
            &nbsp; &nbsp;

            <input
              type='radio'
              name='asthma'
              value={!this.state.asthma}
              onChange={this.handleInputChange.bind(this)}
            />
            No

            &nbsp; &nbsp;

            Asthma

            &nbsp; &nbsp;

            <input
              type='text'
              name='asthmaExplain'
              placeholder='Explain'
              value={this.state.asthmaExplain}
              onChange={this.handleInputChange.bind(this)}
            />

                <br /><br />

          <input type="submit" value="Submit" />

          <Link href="/signInPage">
            <button >Already have an account</button>
          </Link>

        </form>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => {
      dispatch(updateUser(values));
    },
    onMount: () => {
      dispatch(loadUsers());
    }
  };
}


patientMedicalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loadUsers: PropTypes.func,
  onMount: PropTypes.func.isRequired,
  getUserId: PropTypes.func,
  url: PropTypes.object,
  query: PropTypes.array,
  id: PropTypes.array,
};

// null will be mapstatetoprops and mapdispatchtoprops
export default withRedux(initStore, null, mapDispatchToProps)(patientMedicalForm);
