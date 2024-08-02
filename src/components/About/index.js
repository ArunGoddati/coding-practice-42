import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutHeading = isDarkTheme ? 'about-heading' : ''
      return (
        <div>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
            }
            alt={isDarkTheme ? 'about' : 'theme'}
            className="about-image"
          />
          <h1 className={aboutHeading}>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
