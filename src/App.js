import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {

  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;


  render() {
    return (
      <div>
        <Router>

            <Navbar/>
        
            <Routes>

            <Route exact path='/home' element={<News key='home' apiKey = {this.apiKey} pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route exact path='/' element={<News key='general' apiKey = {this.apiKey} pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route exact path='/business' element={<News key='business' apiKey = {this.apiKey} pageSize={this.pageSize} country='us' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' apiKey = {this.apiKey} pageSize={this.pageSize} country='us' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News key='health' apiKey = {this.apiKey} pageSize={this.pageSize} country='us' category='health' />}></Route>
            <Route exact path='/science' element={<News key='science' apiKey = {this.apiKey} pageSize={this.pageSize} country='us' category='science' />}></Route>
            <Route exact path='/sports' element={<News key='sports' apiKey = {this.apiKey} pageSize={this.pageSize} country='us' category='sports' />}></Route>
            <Route exact path='/technology' element={<News key='technology' apiKey = {this.apiKey} pageSize={this.pageSize} country='us' category='technology' />}></Route>

            </Routes>

        </Router>
        
      </div>
    );
  }
}