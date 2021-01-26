import React, { useState, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from "react-toastify";
import client from './config/apollo';
import Auth from './pages/Auth';
import { getToken, setToken } from './utils/token';
import AuthContext from './context/AuthContext';

export default function App() {

  const [auth, setAuth] = useState(undefined);
  const authData = {
    name: "Pablo",
  }

  useEffect(() => {
    const token = getToken();
    setAuth(token ? token : null);
  }, [])

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        { !auth ? <Auth /> : <h1>Estás logeado</h1> }
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthContext.Provider>
    </ApolloProvider>
  ); 
}
