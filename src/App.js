import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY;
  state={
    progress:0
  };
  setP=(p)=>{
    this.setState({progress:p});
  }
  render() {
    return (
      <Router>
        {console.log(this.apiKey)}
        <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setP} pageSize={10} category="general" api={this.apiKey}/>} />
            <Route exact path="business" element={<News setProgress={this.setP} pageSize={3} category="business" api={this.apiKey}/>} />
            <Route exact path="entertainment" element={<News setProgress={this.setP} pageSize={3} category="entertainment" api={this.apiKey}/>} />
            <Route exact path="health" element={<News setProgress={this.setP} pageSize={3} category="health" api={this.apiKey}/>} />
            <Route exact path="science" element={<News setProgress={this.setP} pageSize={3} category="science" api={this.apiKey}/>} />
            <Route exact path="sports" element={<News setProgress={this.setP} pageSize={3} category="sports" api={this.apiKey}/>} />
            <Route exact path="technology" element={<News setProgress={this.setP} pageSize={3} category="technology" api={this.apiKey}/>} />
          </Routes>
        </div>
      </Router>
    )
  }
}
