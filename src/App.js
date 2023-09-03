import {Component} from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Profile from './components/Profile'
import StudentDiscount from './components/StudentDiscount'
import Testimonilas from './components/Testimonilas'
import Book from './components/Book'
import Footer from './components/Footer'
import Destination from './components/Destination'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="margin">
        <Header />
        <Login />
        <Profile />
        <Destination />
        <StudentDiscount />
        <Book />
        <Testimonilas />
        <Footer />
      </div>
    )
  }
}

export default App
