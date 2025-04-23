import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import { lazy, Suspense } from 'react';
import Home from './pages/Home/Home'
const About = lazy(() => import('./pages/About/About'));
import Notfound from './pages/Notfound/Notfound'
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Service = lazy(() => import('./pages/Service/Service'));
const Blog = lazy(() => import('./pages/Blog/Blog'));

const Contact = lazy(() => import('./pages/Contact/Contact'));
const HowItWork = lazy(() => import('./pages/HowItWork/HowItWork'));
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Loading from './components/Loading/Loading';

const queryClient = new QueryClient()
function App() {
  const router=createBrowserRouter([
  {path: "", element:<Layout />,children:[
   { index: true,element: <Home />},
   { path: 'about',element: <Suspense fallback={<Loading />}><About /></Suspense>},
   { path: 'contact',element: <Suspense fallback={<Loading />}><Contact /></Suspense>},
   { path: '*',element: <Notfound />},
   { path: 'projects',element: <Suspense fallback={<Loading />}><Projects /></Suspense>},
   { path: 'blog',element: <Suspense fallback={<Loading />}><Service /></Suspense>},
   { path: 'blogDetails',element: <Suspense fallback={<Loading />}><Blog /></Suspense>},
   { path: 'HowItWork',element: <Suspense fallback={<Loading />}><HowItWork /></Suspense>},
  ]}
  ])
 
   return (
     <>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}></RouterProvider>
     </QueryClientProvider>
     </>
   )
 }

export default App
