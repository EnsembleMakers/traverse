import React from 'react';
import '../styles/SearchBar.css';

export default function SearchBar() {
  return (
    <div className="ui search search-display">
      <div className="ui icon input">
        <input className="prompt" type="text" placeholder="Search..."/>
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
    </div>
  )
}
