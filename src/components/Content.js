import React from 'react'

export default function Content(props) {
  return (
    <div id="content" className="ui masthead vertical segment">
      {props.children}
    </div>
  )
}
