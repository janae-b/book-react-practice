import React, { Component } from 'react';
import './App.css';

const bookNo = [0, 1, 2, 3]

class App extends Component {
  state = { 
    selectedBookIdx: 0
   }
  render() { 
    return (
      <div className="App">
          <header className="App-header">
            Pick a book!
          </header>
      </div>
      );
  }
}
 
export default App;
