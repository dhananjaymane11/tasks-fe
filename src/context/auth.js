import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStoredToken, storeToken, clearToken } from '../api/store';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    getStoredToken().then((token) => {
      setIsLoggedIn(token);
    });
  }, []);

  const storeTokenFromContext = async (token) => {
    await storeToken(token);
    setIsLoggedIn(token);
  };

  const removeTokenFromContext = async () => {
    await clearToken();
    setIsLoggedIn(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenFromContext, removeTokenFromContext }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
