import React from 'react'

export default function Item(props) {
  // console.log(props);
  return (
    <div className="ui card centered">
      <div className="ui image rounded">
        <img src={`${props.image.src}`} alt={`${props.image.name}`}/>
      </div>
      <div className="content">
        <div className="header">{props.title}</div>
        <div className="meta">
          <a>{props.author}</a>
        </div>
      </div>
    </div>
  )
}
