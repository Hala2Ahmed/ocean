import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Notfound from './pages/Notfound/Notfound'
import Projects from './pages/Projects/Projects'
import Service from './pages/Service/Service'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import HowItWork from './pages/HowItWork/HowItWork'

function App() {
  const router=createBrowserRouter([
  {path: "", element:<Layout />,children:[
   { index: true,element: <Home />},
   { path: 'about',element: <About />},
   { path: 'contact',element: <Contact />},
   { path: '*',element: <Notfound />},
   { path: 'projects',element: <Projects />},
   { path: 'blog',element: <Service />},
   { path: 'blogDetails',element: <Blog />},
   { path: 'HowItWork',element: <HowItWork />},
  ]}
  ])
 
   return (
     <>
      <RouterProvider router={router}></RouterProvider>
     </>
   )
 }

export default App
