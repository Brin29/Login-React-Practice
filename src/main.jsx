import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="315411946769-fs7ef12iiekasvted7o7kd1834md2d02.apps.googleusercontent.com">
      <App /> 
    </GoogleOAuthProvider>
  </StrictMode>,
)
