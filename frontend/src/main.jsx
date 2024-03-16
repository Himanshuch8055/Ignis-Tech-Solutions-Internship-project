import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Favorites from './components/Favorites.jsx';
import Auth from './components/Auth.jsx';

// const router = createBrowserRouter([
//     {
//       path: "",
//       element: <Home/>,
//     },
//     {
//       path: "/Favorites",
//       element: <Favorites/>,
//     },
//     {
//       path: "/Auth",
//       element: <Auth/>,
//     },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
