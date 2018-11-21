import React from 'react'

export default function ItemList(props) {
  return (
    <div class="ui container three column grid">
      <div className="row">
        <div className="column">
          <h3>추천목록</h3>
        </div>
      </div>
      <div className="column">
        <div className="ui">
          {props.children}
        </div>
      </div>
      <div className="column">
        <div className="ui">
          {props.children}
        </div>
      </div>
      <div className="column">
        <div className="ui">
          {props.children}
        </div>
      </div>
    </div>
  )
}
