import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'
import Navbar from './components/Navbar'
import ThemeContext from './context/ThemeContext'
import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    const bottomContainer = isDarkTheme ? 'bottom-dark' : 'bottom-light'
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}}
      >
        <Navbar />
        <div className={bottomContainer}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
