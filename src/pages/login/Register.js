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
        password: '',
        confirmpassword: ''
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
            {submitted && !user.email &&
              <div className="help-block">E-mail is required</div>
            }
          </div>
          <div className={'field' + (submitted && !user.firstName ? ' has-error' : '')}>
            <div class="ui left icon input">
              <i class="user icon" />
              <input type="text" name="first-name" placeholder="First Name" value={user.firstName} onChange={this.handleChange} />
            </div>
            {submitted && !user.firstName &&
              <div className="help-block">First name is required</div>
            }
          </div>
          <div className={'field' + (submitted && !user.lastName ? ' has-error' : '')}>
            <div class="ui left icon input">
              <i class="user icon" />
              <input type="text" name="last-name" placeholder="Last Name" value={user.lastName} onChange={this.handleChange} />
            </div>
            {submitted && !user.lastName &&
              <div className="help-block">Last name is required</div>
            }
          </div>
          <div className={'field' + (submitted && !user.password ? ' has-error' : '')}>
            <div class="ui left icon input">
              <i class="lock icon" />
              <input type="password" name="password" placeholder="Password" value={user.password} onChange={this.handleChange} />
            </div>
            {submitted && !user.password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className={'field' + (submitted && !user.confirmpassword ? ' has-error' : '')}>
            <div class="ui left icon input">
              <i class="lock icon" />
              <input type="password" name="password-confirm" placeholder="Retype Password" value={user.confirmpassword} onChange={this.handleChange} />
            </div>
            {!user.password && (user.password !== user.confirmpassword) &&
              <div className="help-block">Insert your password correctly</div>
            }
          </div>
          <div class="ui fluid large teal submit button">Register</div>
          {registering && 
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          }
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

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}

export default connect(mapStateToProps)(Register);