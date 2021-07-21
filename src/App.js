import Home from './Home'
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './base/globalStyles'
import theme from './base/theme'

function App() {
  return (
    <ThemeProvider theme={{ ...theme() }}>
      <IconContext.Provider value={{ className: 'icon' }}>
        <GlobalStyle />
        <div className="app--content">
          <Home />
        </div>
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
