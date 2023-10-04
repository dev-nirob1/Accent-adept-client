import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='container mx-auto'><RouterProvider router={router} /></div>
    </AuthProvider>
  </React.StrictMode>,
)
