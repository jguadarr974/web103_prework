import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Creator1 from './components/Creator1.jsx'
import Creator2 from './components/Creator2.jsx'
import Creator3 from './components/Creator3.jsx'
import Creator4 from './components/Creator4.jsx'
import Creator5 from './components/Creator5.jsx'
import SingleCreator from './components/SingleCreator.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"Creator1",
    element:<Creator1/>,
  },
  {
    path:"Creator2",
    element:<Creator2/>,
  },
  {
    path:"Creator3",
    element:<Creator3/>,
  },
  {
    path:"Creator4",
    element:<Creator4/>,
  },
  {
    path:"Creator5",
    element:<Creator5/>,
  },
  {
    path:"SingleCreator",
    element:<SingleCreator/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
