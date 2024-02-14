import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={3} category="general" />} />
            <Route exact path="business" element={<News pageSize={3} category="business" />} />
            <Route exact path="entertainment" element={<News pageSize={3} category="entertainment" />} />
            <Route exact path="health" element={<News pageSize={3} category="health" />} />
            <Route exact path="science" element={<News pageSize={3} category="science" />} />
            <Route exact path="sports" element={<News pageSize={3} category="sports" />} />
            <Route exact path="technology" element={<News pageSize={3} category="technology" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
