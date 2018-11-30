import React, { PureComponent, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import faker from 'faker';

class Header extends PureComponent {
  render() {
    return (
    <div className="ui top fixed menu">
      <NavLink to="/" className="item">
        <img src={faker.image.avatar()}/>
        <span id="main-font">Traverse</span>
      </NavLink>
      {/* <Link to="#" className="item">Features</Link>
      <Link to="#" className="item">Testimonials</Link> */}
      <div className="right menu">
        <NavLink to="/login" className="item">Login</NavLink>
        <NavLink to="/register" className="item">Register</NavLink>
        {/* {this.changeHeader(this.user)} */}
      </div>
    </div>
    )
  }

  // changeHeader(user) {
  //   if(!user){
  //     return (
  //       <Fragment>

  //       </Fragment>
  //     );
  //   } else {
  //     return (
  //       // <Link to="/" className="item">Logout</Link>
  //     );
  //   }
  // }
}

const mapStateToProps = (state) => {
  return { user: state.loggedInUser };
}

// export default connect(mapStateToProps)(Header);
export default Header;