import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import AppStore from './Utils/AppStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider  store={AppStore}>
    <App />
    </Provider>
  // </React.StrictMode>,
)
