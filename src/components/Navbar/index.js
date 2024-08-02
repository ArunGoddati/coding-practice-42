import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const clickOnThemeButton = () => {
        toggleTheme()
      }
      const background = isDarkTheme ? 'dark-container' : 'light-container'
      const heading = isDarkTheme ? 'heading-dark' : 'heading-light'
      return (
        <div className={`navbar-container ${background}`}>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
            className="website-logo"
          />
          <ul className="home-and-about-container">
            <Link to="/">
              <li className={heading}>Home</li>
            </Link>
            <Link to="/about">
              <li className={heading}>About</li>
            </Link>
          </ul>
          <button
            className="button"
            onClick={clickOnThemeButton}
            data-testid="theme"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              className="moon-image"
              alt={isDarkTheme ? 'theme' : 'about'}
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
