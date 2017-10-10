import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const thoughts = document.querySelector('#thoughts')

ReactDOM.render(<App startingThoughtId={thoughts.dataset.startingThoughtId} />, thoughts)
