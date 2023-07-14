import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UIContextProvider } from './context/postContext/Context.jsx'
// import store from './redux/store.js'
// import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <UIContextProvider>
    <App />
    </UIContextProvider>
  </React.StrictMode>
)
