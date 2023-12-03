// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <Toaster />
        <div className='container mx-auto'><RouterProvider router={router} /></div>
      </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
  // </React.StrictMode>, 
)
