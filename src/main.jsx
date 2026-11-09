import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Register only in production so the development server always reflects local
// changes immediately. The service worker keeps the app shell available after
// the site has been loaded once while online.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    const hadController = Boolean(navigator.serviceWorker.controller)
    let refreshing = false
    let registration

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController || refreshing) return
      refreshing = true
      window.location.reload()
    })

    const updateWorker = () => {
      registration?.update().catch((error) => {
        console.error('Service worker update check failed:', error)
      })
    }

    window.addEventListener('online', updateWorker)

    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`, {
      scope: import.meta.env.BASE_URL,
      updateViaCache: 'none',
    }).then((serviceWorkerRegistration) => {
      registration = serviceWorkerRegistration
      updateWorker()
    }).catch((error) => {
      console.error('Service worker registration failed:', error)
    })
  })
}
