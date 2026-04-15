import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router/dom'
import FriendsContextProvider from './context/FriendsContextProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
 
  <FriendsContextProvider>
      <StrictMode>
   <RouterProvider router={router} />
       <ToastContainer />
    </StrictMode>
  </FriendsContextProvider>
 
)
