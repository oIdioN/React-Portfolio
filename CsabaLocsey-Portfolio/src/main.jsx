import {createBrowserRouter,RouterProvider} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import About from "./Components/About.jsx"


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<h1>Wrong  URL....</h1>,
    children:[
      {
        index:true,
        element:<About />
      },
      {
        index:"/Portfolio",
        element:<Portfolio />
      },{
        index:"/Blog",
        element:<Blog />
      },{
        index:"/Contact",
        element:<Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
