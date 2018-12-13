import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, alertActions } from '../../actions';
import Warning from './Warning';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const { dispatch } = this.props;
    dispatch(alertActions.clear());
    console.log('Register constructed');
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
    // console.log(this.state);
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
    console.log('Register component loaded');
    const { registering, alertType } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="ui middle aligned center aligned grid">
      {alertType==="alert-danger" &&
        <div className="row">
          <Warning message={`이미 존재하는 계정입니다.`} />
        </div>
      }
      <form className={'ui form large'} onSubmit={this.handleSubmit}>
        <div className="ui stacked segment">
          <div className={'field' + (submitted && !user.email ? ' error' : '')}>
            <div className="ui left icon input">
              <i className="user icon" />
              <input type="text" name="email" placeholder="E-mail address" value={user.email} onChange={this.handleChange} />
            </div>
            {submitted && !user.email &&
              <div className="ui basic red pointing prompt label transition visible">E-mail address is required</div>
            }
          </div>
          <div className={'field' + (submitted && !user.firstName ? ' error' : '')}>
            <div className="ui left icon input">
              <i className="user icon" />
              <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={this.handleChange} />
            </div>
            {submitted && !user.firstName &&
              <div className="ui basic red pointing prompt label transition visible">First name is required</div>
            }
          </div>
          <div className={'field' + (submitted && !user.lastName ? ' error' : '')}>
            <div className="ui left icon input">
              <i className="user icon" />
              <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={this.handleChange} />
            </div>
            {submitted && !user.lastName &&
              <div className="ui basic red pointing prompt label transition visible">Last name is required</div>
            }
          </div>
          <div className={'field' + (submitted && !user.password ? ' error' : '')}>
            <div className="ui left icon input">
              <i className="lock icon" />
              <input type="password" name="password" placeholder="Password" value={user.password} onChange={this.handleChange} />
            </div>
            {submitted && !user.password &&
              <div className="ui basic red pointing prompt label transition visible">Password is required</div>
            }
          </div>
          <div className={'field' + (submitted && !user.confirmpassword ? ' error' : '')}>
            <div className="ui left icon input">
              <i className="lock icon" />
              <input type="password" name="confirmPassword" placeholder="Retype Password" value={user.confirmPassword} onChange={this.handleChange} />
            </div>
            {(user.password && (user.password !== user.confirmPassword)) &&
              <div className="ui basic red pointing prompt label transition visible">Please enter password correctly</div>
            }
          </div>
          <button className="ui fluid large teal submit button" type="submit">Register</button>
          {registering && 
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          }
        </div>
      </form>
    </div>
    )
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  const alertType = state.alert.type;
  return {
    registering,
    alertType,
  };
}

export default withRouter(connect(mapStateToProps)(Register));