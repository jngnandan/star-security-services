
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'
import About from './components/About'
import Careers from './components/Careers'
import ContactUs from './components/ContactUs'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import NotFound from './NotFound'


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact match="/careers" element={<Careers />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

      </div>
    )
  }
}

export default App