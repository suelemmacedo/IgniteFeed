import React from 'react'
import ReactDOM from 'react-dom/client' //integra o react para funcionar no ambiente web(browser)
import App from './App.jsx'

/* DOM = Document Object Module */

ReactDOM.createRoot(document.getElementById('root')).render(
  // o render está renderizando:
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
