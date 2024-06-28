import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Layout from './Components/Layout.jsx'
import About from './Components/About.jsx'
import Contactus from './Components/Contactus.jsx'
import User from './Components/User.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children :[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contactus',
//         element:<Contactus/>
//       }
//     ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
