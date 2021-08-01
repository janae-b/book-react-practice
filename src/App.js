import React, { Component } from 'react';
import './App.css';
import Books from './components/Books/Books'
import BookSelector from './components/BookSelector/BookSelector'

const bookNo = [0, 1, 2, 3]

class App extends Component {
  state = { 
    selectedBookIdx: 0
   }

   handleBookSelection = (newIdx) => {
     this.setState({ selectedBookIdx: newIdx })
   }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          Pick a book!
        </header>
        <main>
          <BookSelector
          handleBookSelection={this.handleBookSelection}
          bookNo={bookNo} 
            selectedBookIdx={this.state.selectedBookIdx}
          />
          <Books 
          handleBookSelectiond={this.handleBookSelection}
          bookNo={bookNo}
            selectedBookIdx={this.state.selectedBookIdx}
          />
        </main>
      </div>
      );
  }
}
 
export default App;
