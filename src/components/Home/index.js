import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeHeading = isDarkTheme ? 'home-heading' : ''
      return (
        <div>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
            }
            className="home-image"
          />
          alt={isDarkTheme ? 'home' : 'theme'}
          <h1 className={homeHeading}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
