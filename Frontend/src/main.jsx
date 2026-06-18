import './index.scss'
import router from './route/router'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import AppToast from './components/toast/AppToast.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <AppToast />
    <RouterProvider router={router}/>
  </UserProvider>
)
