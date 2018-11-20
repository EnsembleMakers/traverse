import React from 'react';
import faker from 'faker';

export default function Header() {
  return (
  <div className="ui top fixed menu">
    <div className="item">
      <img src={`${faker.image.avatar()}`}/>
    </div>
    <a href="#" className="item">Features</a>
    <a href="#" className="item">Testimonials</a>
    <div className="right menu">
      <a href="#" className="item">Sign-in</a>
      <a href="#" className="item">Sign-up</a> 
    </div>
  </div>
  )
}
