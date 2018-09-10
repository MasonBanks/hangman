import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Alphabet from './components/Alphabet';
import Display from './components/Display';
import Streak from './components/Streak';
import Score from './components/Score';
import words from 'an-array-of-english-words';

class App extends Component {
  state = {
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    attempts: [],
    currentWord: "",
    lives: 6,
    streak: 0
  }
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <Button getWord={this.getWord} />
        <Score lives={this.state.lives} />
        <Streak streak={this.state.streak} />
        <Display currentWord={this.state.currentWord} attempts={this.state.attempts} lives={this.state.lives} />
        <Alphabet alphabet={this.state.alphabet} playersTurn={this.playersTurn} attempts={this.state.attempts} />
      </div>
    );
  }
  getWord = () => {
    const word = words[Math.floor(Math.random() * words.length)]
    this.setState({
      attempts: [],
      currentWord: word,
      lives: 6,
      streak: 0
    })
    // console.log(word)
  }
  playerLives = () => {
    this.setState({
      lives: this.state.lives - 1
    }, () => {
      if (this.state.lives < 0) {
        this.setState({
          attempts: this.state.currentWord.split('')
        }, () => {
          alert("Better luck next time!")
          // this.getWord()
        })
      }
    })
  }
  playersTurn = (value) => {
    value = value.toLowerCase()
    this.setState({
      attempts: [...this.state.attempts, value.toLowerCase()]
    })
    if (!this.state.currentWord.split('').includes(value)) {
      this.playerLives()
    }
    this.checkWord
  }
  didYouWin = (currentWord) => {
    if (this.state.attempts.every(this.checkWord)) {
      console.log('hello')
    }
  }
  checkWord = () => {
    return this.state.attempts.includes(this.state.currentWord.split(''))
  }
}

export default App;
