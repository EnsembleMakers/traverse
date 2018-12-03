import React, { PureComponent, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import faker from 'faker';

class Header extends PureComponent {
  render() {
    const { loggedIn } = this.props;
    return (
    <div className="ui top fixed menu">
      <NavLink to="/" className="item">
        <img src={faker.image.avatar()}/>
        <span id="main-font">Traverse</span>
      </NavLink>
      {/* <Link to="#" className="item">Features</Link>
      <Link to="#" className="item">Testimonials</Link> */}
      <div className="right menu">
        {this.changeHeader(loggedIn)}
      </div>
    </div>
    )
  }

  changeHeader(user) {
    if(!user){
      return (
        <Fragment>
          <NavLink to="/login" className="item">Login</NavLink>
          <NavLink to="/register" className="item">Register</NavLink>
        </Fragment>
      );
    } else {
      return (
        <NavLink to="/logout" className="item">Logout</NavLink>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.users;
  return { loggedIn };
}

export default connect(mapStateToProps)(Header);
// export default Header;