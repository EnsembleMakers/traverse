import React, { PureComponent, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import faker from 'faker';

import { userActions } from '../actions';

class Header extends PureComponent {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    
    console.log(e);
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }

  render() {
    const { loggedIn, user } = this.props;
    return (
    <div className="ui top fixed menu">
      <NavLink to="/main" className="item">
        <img src={faker.image.avatar()}/>
        <span id="main-font">Traverse</span>
      </NavLink>
      {/* <Link to="#" className="item">Features</Link>
      <Link to="#" className="item">Testimonials</Link> */}
      <div className="right menu">
        {this.changeHeader()}
      </div>
    </div>
    )
  }

  changeHeader() {
    if(!this.props.loggedIn){
      return (
        <Fragment>
          <NavLink to="/main/login" className="item">Login</NavLink>
          <NavLink to="/main/register" className="item">Register</NavLink>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <a className="ui item blue image label">
            <img src={faker.image.avatar()}/>
            {this.props.user.email} 님
            <div className="detail">Friend</div>
          </a>
          <a className="item" onClick={this.handleClick}>Logout</a>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const { loggedIn, user } = state.authentication;
  return { loggedIn, user };
}

export default connect(mapStateToProps)(Header);
// export default Header;