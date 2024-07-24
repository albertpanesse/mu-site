import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CleanLayout from './layouts/clean';
import SignedInLayout from './layouts/signed-in';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CleanLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> }
      ],
    },
    {
      path: "/dashboard",
      element: <SignedInLayout />,
      children: [
        { index: true, element: <Dashboard /> }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
