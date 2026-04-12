import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStoredToken, storeToken } from '../api/store';

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

  //   const signIn = async (token) => {
  //     await SecureStore.setItemAsync('accessToken', token);
  //     setSession(token); // 🚀 This update triggers the Stack.Protected guard
  //   };

  //   const signOut = async () => {
  //     await SecureStore.deleteItemAsync('accessToken');
  //     setSession(null); // 🚀 This update forces a redirect to the public route
  //   };

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenFromContext }}>
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
