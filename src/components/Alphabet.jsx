import React from 'react'
import './Alphabet.css'

export default function Alphabet({ alphabet, playersTurn }) {
  const handleClick = (letter) => {
    // playerLives(letter)
    playersTurn(letter)
  }
  return (
    <ul>
      {alphabet.split('').map(letter => {
        return <li key={letter} onClick={() => handleClick(letter)}>{letter}</li>
      })}
    </ul>
  )
}