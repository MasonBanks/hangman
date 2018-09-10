import React from 'react'

export default function Display({ currentWord, attempts, lives }) {
  return (
    <div>
      <h2>{currentWord.split('').map(letter => {
        if (attempts.includes(letter)) {
          return `${letter} `
        }
        return '_ '
      })}</h2>
    </div>
  )
}