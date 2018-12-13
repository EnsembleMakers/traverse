import React from 'react'

export default function Warning(props) {
  return (
    <div className="ui top attached warning icon message">
      <i className="attention icon"></i>
      <div className="content">
        {props.message}
      </div>
    </div>
  )
}
