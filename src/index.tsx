import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { PersonProvider } from './context'

ReactDOM.render(
  <PersonProvider>
    <App />
  </PersonProvider>
  ,
  document.getElementById('app'),
)
