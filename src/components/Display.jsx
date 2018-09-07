import React from 'react'

export default function Display({ currentWord, attempts }) {
  return (
    <div>
      <h1>{currentWord.split('').map(letter => {
        if (attempts.includes(letter)) {
          return letter
        }
        return '_ '
      })}</h1>
    </div>
  )
}