import React, {Component} from 'react';

import './App.css'

import Category from './Category';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Category/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
