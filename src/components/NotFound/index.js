import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="not-found"
          />
          <h1>Lost Your Way?</h1>
          <p>We cannot seem to find the page you are looking for.</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
