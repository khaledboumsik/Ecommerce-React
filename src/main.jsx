import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from '@mui/material/styles'
import {CssBaseline} from  '@mui/material'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {cartReducer} from './state'
import {theme} from './Theme.jsx'
const store=configureStore({
  reducer:{cart:cartReducer}
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
