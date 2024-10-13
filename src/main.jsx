import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { Githubinfo } from './components/Github/Github.jsx'

const router= createBrowserRouter([

{
  path:'/',
  element:<Root/>,
children:[
  {
    path:'',
    element:<Home/>
  },
  {
    path:'About',
    element:<About/>
  },
  {
    path:'Contact',
    element:<Contact/>
  },
  {
    path:'User/:userId',
    element:<User/>
  },
  {
    loader:Githubinfo,
    path:'Github',
    element:<Github/>
  }
]
  
  
}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
