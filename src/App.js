import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Alphabet from './components/Alphabet';
import Display from './components/Display';
import Score from './components/Score'
import words from './data/words.js';

class App extends Component {
  state = {
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    attempts: [],
    currentWord: "",
    lives: 6
  }
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <Button getWord={this.getWord} />
        <Score lives={this.state.lives} />
        <Display currentWord={this.state.currentWord} attempts={this.state.attempts} />
        <Alphabet alphabet={this.state.alphabet} playersTurn={this.playersTurn} />
      </div>
    );
  }
  getWord = () => {
    const word = words[Math.floor(Math.random() * words.length)]
    this.setState({
      attempts: [],
      currentWord: word,
      lives: 6
    })
  }
  playerLives = () => {
    this.setState({
      lives: this.state.lives - 1
    })
    if (this.state.lives < 1) {
      alert("game over sucka")
      this.getWord()
    }
  }
  playersTurn = (value) => {
    value = value.toLowerCase()
    this.setState({
      attempts: [...this.state.attempts, value.toLowerCase()]
    })
    if (!this.state.currentWord.split('').includes(value)) {
      this.playerLives()
    }
  }

}

export default App;
