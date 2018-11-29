import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import faker from 'faker';

class Header extends Component {
  render() {
    return (
    <div className="ui top fixed menu">
      <Link to="/" className="item">
        <img src={faker.image.avatar()}/>
        <span id="main-font">Traverse</span>
      </Link>
      {/* <Link to="#" className="item">Features</Link>
      <Link to="#" className="item">Testimonials</Link> */}
      <div className="right menu">
        {this.changeHeader(this.user)}
      </div>
    </div>
    )
  }

  changeHeader(user) {
    if(!user){
      return (
        <Fragment>
          <Link to="/login" className="item">Sign-in</Link>
          <Link to="/signup" className="item">Sign-up</Link>
        </Fragment>
      );
    } else {
      return (
        <Link to="/" className="item">Logout</Link>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.loggedInUser };
}

export default connect(mapStateToProps)(Header);