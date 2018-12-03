import React, { PureComponent } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import { GoogleButton } from './oauth2';

class Login extends PureComponent {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    if (loggingIn) {
      return <Redirect to='/'/>;
    }
    return (
      <div className="ui middle aligned center aligned grid">
        <form className="ui form large" onSubmit={this.handleSubmit}>
          <div className={'ui stacked segment'}>
            <div className={'field' + (submitted && !email ? ' has-error' : '')}>
              <div className="ui left icon input">
                <i className="user icon" />
                <input type="text" name="email" placeholder="E-mail address" value={email} onChange={this.handleChange}/>
                {submitted && !email &&
                  <div className="help-block">E-mail address is required</div>
                }
              </div>
            </div>
            <div className={'field' + (submitted && !password ? ' has-error' : '')}>
              <div className="ui left icon input">
                <i className="lock icon" />
                <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                {submitted && !password &&
                  <div className="help-block">Password is required</div>
                }
              </div>
            </div>
            <button className="ui fluid large teal submit button" type="submit">Login</button>
            <Link to="/register" className="ui button">Register</Link>
            <GoogleButton/>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

export default connect(mapStateToProps)(Login);
