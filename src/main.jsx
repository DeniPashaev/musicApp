import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppTwo from './AppTwo.jsx'
import AudioProvider from './context/AudioContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AudioProvider>
    <AppTwo />
    </AudioProvider>
  </BrowserRouter>
)
