import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider: React.FC = ({ children }: any) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token') || '',
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    if (authState.token) {
      axios.get('http://localhost:3000/auth/me', {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      })
      .then((response) => {
        setAuthState({
          ...authState,
          isAuthenticated: true,
          user: response.data,
        });
      })
      .catch(() => {
        setAuthState({
          token: '',
          isAuthenticated: false,
          user: null,
        });
        localStorage.removeItem('token');
      });
    }
  }, [authState.token]);

  const login = (token: any) => {
    localStorage.setItem('token', token);
    setAuthState({
      ...authState,
      token,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({
      token: '',
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
