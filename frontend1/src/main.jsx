import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import Favorites from './components/Favorites.jsx'
import Auth from './components/Auth.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Switch, Router } from 'react-router-dom'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>}/>
      <Route path='Favorites' element={<Favorites />}/>
      <Route path='Auth' element={<Auth />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App/>
    {/* <Auth/> */}
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route exact path='/auth' Component={Auth}/>
//       </Switch>
//     </Router>
//   </React.StrictMode>,
// )



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Auth from './components/Auth';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <Auth/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();