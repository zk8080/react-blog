import React, { Component } from 'react';
import './App.less';
import Header from './Header/index.component';
import Router from '@routers/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router></Router>
      </div>
    );
  }
}

export default App;
