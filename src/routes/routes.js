import React from 'react';
import { Navigate } from 'react-router-dom';
import SignIn from '../components/SignIn/Index';
import RealyContactUs from '../components/contactUs/Index';
import Blog from '../components/Page'
import About from '../components/umumiy/index'

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <SignIn /> },
        { path: '/contactus', element: <RealyContactUs />  },
        { path: '/blog', element: <Blog />  },
        { path: '/about', element: <About />  },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
