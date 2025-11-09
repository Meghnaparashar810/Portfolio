import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter ,RouterProvider} from "react-router-dom"
import About from "./component/About.jsx"
import Project from './component/Project.jsx'
import Skill from './component/Skill.jsx'
import Contact from './component/Contact.jsx'



const router =createBrowserRouter([{
  path: "/",
  element:<App />,
  children :[
{
    path:"about",
    element: <About />
  },{
    path : "/project",
    element : < Project/>
  },{
    path : "/skill",
    element : < Skill/>
  },
  {
    path : "/contact",
    element : < Contact/>
  }

]
  
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

