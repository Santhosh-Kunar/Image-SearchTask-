import React from 'react'
import { useRoutes } from 'react-router-dom';
import Carosule from './pages/Carosule';
import Home from './pages/Home'
import Songs from './pages/Songs';

const CustomRoutes = () => {
    let rout = useRoutes([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/songs",
        element: <Songs />,
      },
      {
        path: "/carosule",
        element: <Carosule />,
      },
    ]);
  return (
      <div>{rout}</div>
  )
}

export default CustomRoutes