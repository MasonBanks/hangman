import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Alphabet from "./components/Alphabet";
import Display from "./components/Display";
import Streak from "./components/Streak";
import Score from "./components/Score";
import words from "an-array-of-english-words";
import PopUp from "./components/PopUp";

class App extends Component {
  state = {
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    attempts: [],
    currentWord: "",
    lives: 6,
    streak: 0,
    win: false
  };
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <Button getWord={this.getWord} />
        <Score lives={this.state.lives} />
        <Streak streak={this.state.streak} />
        <PopUp win={this.state.win} />
        <Display
          currentWord={this.state.currentWord}
          attempts={this.state.attempts}
          lives={this.state.lives}
        />
        <Alphabet
          alphabet={this.state.alphabet}
          playersTurn={this.playersTurn}
          attempts={this.state.attempts}
        />
      </div>
    );
  }

  componentDidMount() {
    const data = localStorage.getItem("streak");
    const localState = JSON.parse(data);
    if (localState) {
      this.setState({
        streak: localState
      });
    }
  }

  saveData() {
    localStorage.setItem("streak", JSON.stringify(this.state.streak));
  }

  getWord = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    this.setState({
      attempts: [],
      currentWord: word,
      lives: 6,
      streak: this.state.streak,
      win: false
    });
    // console.log(word)
  };
  playerLives = () => {
    this.setState(
      {
        lives: this.state.lives - 1
      },
      () => {
        if (this.state.lives < 0) {
          this.setState(
            {
              attempts: this.state.currentWord.split("")
            },
            () => {
              alert("Better luck next time!");
              // this.getWord()
            }
          );
        }
      }
    );
  };
  playersTurn = value => {
    value = value.toLowerCase();
    this.setState(
      {
        attempts: [...this.state.attempts, value.toLowerCase()]
      },
      () => {
        this.checkWin();
      }
    );
    if (!this.state.currentWord.split("").includes(value)) {
      this.playerLives();
    }
  };

  checkWin = () => {
    const hasWon = this.state.currentWord.split("").reduce((acc, letter) => {
      if (!this.state.attempts.includes(letter)) {
        acc = false;
      }
      return acc;
    }, true);
    if (hasWon) {
      this.setState(
        {
          streak: this.state.streak + 1,
          win: true
        },
        () => {
          this.saveData();
        }
      );
    } else if (!hasWon && this.state.lives < 0) {
      this.setState({
        streak: 0
      });
    }
  };
}

export default App;
