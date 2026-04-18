import './App.css'
import Dashboard from './Dashboard'
import { DarkModeProvider } from './DarkModeContext'

function App() {

  return (
    <DarkModeProvider>
      <Dashboard />
    </DarkModeProvider>
  )
}

export default App
