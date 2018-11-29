import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.firstName && user.lastName && user.email && user.password){
      dispatch(userActions.register(user));
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="ui middle aligned center aligned grid">
      <form className={'ui form large'} onSubmit={this.handleSubmit}>
        <div class="ui stacked segment">
          <div className={'field' + (submitted && !user.email ? ' has-error' : '')}>
            <div class="ui left icon input">
              <i class="user icon" />
              <input type="text" name="email" placeholder="E-mail address" value={user.email} onChange={this.handleChange} />
            </div>
            {submitted && !user.lastName &&
              <div className="help-block">Last Name is required</div>
            }
          </div>
          <div className={'field' + (submitted && !user.firstName ? ' has-error' : '')}>
            <div class="ui left icon input">
              <i class="user icon" />
              <input type="text" name="first-name" placeholder="First Name" />
            </div>
          </div>
          <div className={'field' + (submitted && !user.lastName ? ' has-error' : '')}>
            <div class="ui left icon input">
              <i class="user icon" />
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>
          </div>
          <div className={'field' + (submitted && !user.password ? ' has-error' : '')}>
            <div class="ui left icon input">
              <i class="lock icon" />
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <div className={'field' + (submitted && !user.password ? ' has-error' : '')}>
            <div class="ui left icon input">
              <i class="lock icon" />
              <input type="password" name="password-confirm" placeholder="Retype Password" />
            </div>
          </div>
          <div class="ui fluid large teal submit button">Login</div>
        </div>
      </form>
    </div>
    // <div className="ui middle aligned center aligned grid">
    //     <form class="ui form large">
    //       <div class="field">
    //         <label htmlFor="email">Email</label>
    //         <input type="text" name="" placeholder="Email Address"/>
    //       </div>
    //       <div className="fields">
    //         <div class="field">
    //           <label>First Name</label>
    //           <input type="text" name="first-name" placeholder="First Name"/>
    //         </div>
    //         <div class="field">
    //           <label>Last Name</label>
    //           <input type="text" name="last-name" placeholder="Last Name"/>
    //         </div>
    //       </div>
    //       <div class="field">
    //         <label>Password</label>
    //         <input type="password" name="password" placeholder="Input Password"/>
    //       </div>
    //       <div class="field">
    //         <label>Confirm Password</label>
    //         <input type="password" name="confirm-password" placeholder="Repeat Password"/>
    //       </div>
    //       <div class="field">
    //         <div class="ui checkbox">
    //           <input type="checkbox" tabindex="0" class="hidden"/>
    //           <label>I agree to the Terms and Conditions</label>
    //         </div>
    //       </div>
    //       <button class="ui button" type="submit">Submit</button>
    //     </form>
    //   </div>
    )
  }
}
export default Register;