import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ReactLenis} from 'lenis/react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { getGA4MeasurementId } from './lib/ga4'

// Initialize GA4
const initializeGA4 = () => {
  const measurementId = getGA4MeasurementId()
  
  // Create script for Google Tag Manager
  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script1)
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', measurementId, {
    'allow_google_signals': true,
    'allow_ad_personalization_signals': true
  })
}

// Call GA4 initialization
initializeGA4()

// Load Calendly script
const calendlyScript = document.createElement('script')
calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js'
calendlyScript.async = true
document.head.appendChild(calendlyScript)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <ReactLenis/>
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
)
