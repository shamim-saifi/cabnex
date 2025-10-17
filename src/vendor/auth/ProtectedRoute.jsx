import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('vendorToken');

  if (!isAuthenticated) {
    return <Navigate to="/vendor-login" />;
  }

  return children;
};

export default ProtectedRoute;