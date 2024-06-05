import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import style from './style.module.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/Auth';
import { AnswerProvider } from './components/AnswerContext.jsx';
import { ChoiceProvider } from './components/landingchoice-logic.jsx';
import { OverlayProvider } from './components/overlay.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AnswerProvider>
        <AuthProvider>
          <ChoiceProvider>
            <OverlayProvider>
              <App />
            </OverlayProvider>
          </ChoiceProvider>
        </AuthProvider>
      </AnswerProvider>
    </Router>
  </React.StrictMode>,
)
