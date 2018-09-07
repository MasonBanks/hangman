import React from 'react'

export default function Button(props) {
  return (
    <div className="reset">
      <button onClick={props.getWord}>New Game</button>
    </div>
  )
}