import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './App.jsx'
import './index.css'
import { Link, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Body from './components/Body.jsx'
import Restaurant from './components/Restaurant.jsx'




const Approuter = createBrowserRouter([
   {
      path:'/',
      element :<AppLayout/>,
      children: [
         {
           path:'',
           element:<Body/>
         },
         {
            path:'/about',
            element: <About/>
            
          },
         {
            path:'/contact',
            element: <Contact/>
            
          },
         {
            path:'/restaurants/:resId',
            element: <Restaurant/>
            
          }

      ],
      errorElement:<Error/>,
   },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router = {Approuter}/>)
