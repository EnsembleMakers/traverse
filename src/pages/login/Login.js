import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class Login extends Component {
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
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div className="ui middle aligned center aligned grid">
        <form class="ui form large" onSubmit={this.handleSubmit}>
          <div className={'ui stacked segment' + (submitted && !email ? ' has-error' : '')}>
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon" />
                <input type="text" name="email" placeholder="E-mail address" value={email} onChange={this.handleChange}/>
                {submitted && !email &&
                  <div className="help-block">E-mail address is required</div>
                }
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon" />
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div class="ui fluid large teal submit button">Login</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
