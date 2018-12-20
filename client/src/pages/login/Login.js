import React, { PureComponent, Fragment } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, alertActions } from '../../actions';
import { GoogleButton } from './oauth2';
import Warning from "./Warning";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const { dispatch } = this.props;
    dispatch(alertActions.clear());
    console.log('Login constructed');
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  render() {
    console.log('Login component loaded');
    const { loggingIn, loggedIn, user, alertType } = this.props;
    const { email, password, submitted } = this.state;
    if (loggedIn && user) {
      return <Redirect to='/main'/>;
    }
    // console.log(this.props);
    return (
      <div className="ui middle aligned center aligned grid stacked">
        {alertType==="alert-danger" &&
        <div className="row">
          <Warning message={`ID 또는 Password가 맞지 않습니다. 확인해주세요.`} />
        </div>
        }
        <form className="ui form large" onSubmit={this.handleSubmit}>
          <div className={'ui stacked segment'}>
            <div className={'field' + (submitted && !email ? ' error' : '')}>
              <div className="ui left icon input">
                <i className="user icon" />
                <input type="text" name="email" placeholder="E-mail address" value={email} onChange={this.handleChange}/>
              </div>
              {submitted && !email &&
                <div className="ui basic red pointing prompt label transition visible">E-mail address is required</div>
              }
            </div>
            <div className={'field' + (submitted && !password ? ' error' : '')}>
              <div className="ui left icon input">
                <i className="lock icon" />
                <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
              </div>
              {submitted && !password &&
                <div className="ui basic red pointing prompt label transition visible">Password is required</div>
              }
            </div>
            <button className="ui fluid large teal submit button" type="submit">Login</button>
            <Link to="/main/register" className="ui button">Register</Link>
            <GoogleButton/>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn, loggedIn, user } = state.authentication;
  const alertType = state.alert.type;
  return {
    loggingIn,
    loggedIn,
    user,
    alertType
  };
}

export default connect(mapStateToProps)(Login);
