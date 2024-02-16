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
  state={
    progress:0
  };
  setP=(p)=>{
    this.setState({progress:p});
  }
  render() {
    return (
      <Router>

        <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setP} pageSize={10} category="general" />} />
            <Route exact path="business" element={<News setProgress={this.setP} pageSize={3} category="business" />} />
            <Route exact path="entertainment" element={<News setProgress={this.setP} pageSize={3} category="entertainment" />} />
            <Route exact path="health" element={<News setProgress={this.setP} pageSize={3} category="health" />} />
            <Route exact path="science" element={<News setProgress={this.setP} pageSize={3} category="science" />} />
            <Route exact path="sports" element={<News setProgress={this.setP} pageSize={3} category="sports" />} />
            <Route exact path="technology" element={<News setProgress={this.setP} pageSize={3} category="technology" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
