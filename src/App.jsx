import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Notfound from './pages/Notfound/Notfound'

function App() {
  const router=createBrowserRouter([
  {path: "", element:<Layout />,children:[
   { index: true,element: <Home />},
   { path: 'about',element: <About />},
  //  { path: 'contact',element: <Contact />},
   { path: '*',element: <Notfound />},
  ]}
  ])
 
   return (
     <>
      <RouterProvider router={router}></RouterProvider>
     </>
   )
 }

export default App
