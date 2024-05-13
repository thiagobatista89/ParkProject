import ReactDOM from 'react-dom/client'
import './global.css';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/Navegation/Error';
import { AuthProvider } from './context/AuthContext';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { PrivateRoutes } from './utils/PrivateRoutes';
import { Discs } from './pages/discs';
import { Dashboard } from './pages/dashboard';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
    <AuthProvider>
      {/* REACT ROUTER */}
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/' index element={<Home />} />
          <Route path='/login' index element={<Login />} />
          <Route path='' element={<PrivateRoutes />}>
            <Route path='/page01' element={<Dashboard />} />
          </Route>
          <Route path='/page02' element={<Discs />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.Fragment>
)
