import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header.js'
import Section from './components/Section.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return(
      
        <div className="App">
          <Router>
            <Header/>
            <Section/>
          </Router>
        </div>
    
    );    
  }
}

export default App;
