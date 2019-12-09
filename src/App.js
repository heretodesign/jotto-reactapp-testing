import React, { Component } from 'react'
import GuessWords from './GuessWords'
import Congrats from './Congrats'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <GuessWords success={false} />
        <Congrats guessedWords={[
          { guessWord: 'trian', letterMatchCount: 3 },
        ]} />
      </div>
    )
  }
}

export default App;