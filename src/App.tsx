import React, { useContext } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { AuthProvider, AuthContext } from './libs/contexts/auth-context';

import CleanLayout from './layouts/clean';
import SignedInLayout from './layouts/signed-in';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';

const PrivateRoute = ({ element }: any) => {
  const { authState }: any = useContext(AuthContext);
  return authState.isAuthenticated ? element : <Navigate to="/login" />;
};

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
      { index: true, element: <PrivateRoute element={<Dashboard />} /> }
    ],
  },
]);

const App: React.FC = () => (<AuthProvider><RouterProvider router={router} /></AuthProvider>);

export default App;
