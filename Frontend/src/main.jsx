import './index.css'
import router from './route/router'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router}/>
  </UserProvider>
)
