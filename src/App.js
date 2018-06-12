
import React, { Component } from 'react'
import './App.css'

import Main from './Main'

class App extends Component {
  state= {
    user: {
      uid: '123123123',
      userName: 'Kyle',
    },
  }

  render() {
    return (
      <div className="App">
        <Main user = {this.state.user}/>
      </div>
    )
  }
}

export default App
