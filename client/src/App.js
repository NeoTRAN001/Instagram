import React, { useState, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from "react-toastify";
import client from './config/apollo';
import Auth from './pages/Auth';
import { getToken, setToken } from './utils/token';

export default function App() {

  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();
    setAuth(token ? token : null);
  }, [])

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  ); 
}
