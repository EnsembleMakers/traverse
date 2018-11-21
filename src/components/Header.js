import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';

export default function Header() {
  return (
  <div className="ui top fixed menu">
    <Link to="/" className="item">
      <img src={faker.image.avatar()}/>
      <span id="main-font">Traverse</span>
    </Link>
    {/* <Link to="#" className="item">Features</Link>
    <Link to="#" className="item">Testimonials</Link> */}
    <div className="right menu">
      <Link to="/login" className="item">Sign-in</Link>
      <Link to="/signup" className="item">Sign-up</Link> 
    </div>
  </div>
  )
}
