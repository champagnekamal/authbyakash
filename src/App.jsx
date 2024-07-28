import React from 'react';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './LoginPage';
import Notes from './pages/Notes';
import { ToastContainer } from 'react-toastify';
import Signup from './Signup';

function App() {
  
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  return (
    <>
     <ToastContainer />
      <BrowserRouter>
    
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route
      path="/notes"
      element={
        <PrivateRoute>
          <Notes />
        </PrivateRoute>
      }
    />
     
      </Routes>
  
  </BrowserRouter>
       
    </>
  )
}

export default App
