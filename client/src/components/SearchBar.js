import React from "react";
import "../styles/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar ui search search-display">
      <div id="search-div" className="stacked segment">
        <h3>거래되는 품목을 검색해보세요</h3>
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search..." />
          <i className="search icon" />
        </div>
      </div>
    </div>
  );
}
