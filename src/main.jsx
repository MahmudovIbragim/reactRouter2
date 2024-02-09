import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import PrivatRoute from './components/providers/PrivatRoute.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrivatRoute>
        <App />
      </PrivatRoute>
    </BrowserRouter>
  </React.StrictMode>
);
