import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router'
import Layout from './pages/Layout'
import AuthContextWrapper from './context/AuthContextWrapper'

import {store} from './redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <AuthContextWrapper>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </AuthContextWrapper>
  </Provider>
  // </StrictMode>,
)

// npm install tailwindcss @tailwindcss/vite react-router 
// react-router -> single pager Application 
// tailwind css -> for styling