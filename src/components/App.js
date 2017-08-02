import React, { Component } from 'react';
import logo from './../logo.svg';
import './../styles/App.css';

import BookList from './../containers/BookList.js';
import BookDetail from './../containers/BookDetail.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cool Books!</h1>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
