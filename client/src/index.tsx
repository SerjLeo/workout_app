import React from 'react'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import {Provider} from 'react-redux'
import store from './redux'
import {createRoot} from 'react-dom/client'

const root = createRoot(document.getElementById('root') as Element)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App/>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

)
