import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import VendorLayout from '../vendor/layouts/VendorLayout';
import VendorDashboardHome from '../vendor/pages/VendorDashboardHome';
import VendorLogin from '../vendor/auth/login';
import VendorRegistration from '../vendor/auth/register';
import VendorAddcar from '../vendor/pages/AddCar';
import VendorCarList from '../vendor/pages/VendorCarList';
import VendorProfile from '../vendor/pages/Vendorprofile';
import ProtectedRoute from '../vendor/auth/ProtectedRoute';
import CarListing from '../pages/carlisting';
import CardDetails from '../pages/BookingDetailsPage';
import ExplorePackages from '../pages/ExplorePackages';
import SuccessPage from '../pages/SuccessPage';
// Router mein


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore-packages" element={<ExplorePackages />} />
      <Route path="/success" element={<SuccessPage />} />
<Route path="/success/:bookingId" element={<SuccessPage />} />
      <Route path="/car-listing" element={<CarListing />} />
      <Route path="/car-details" element={<CardDetails />} />
      <Route path="/vendor-login" element={<VendorLogin />} />
      <Route path="/vendor-registration" element={<VendorRegistration />} />
      <Route
        path="/vendor"
        element={
          <ProtectedRoute>
            <VendorLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<VendorDashboardHome />} />
        <Route path="add-car" element={<VendorAddcar />} />
        <Route path="car-list" element={<VendorCarList />} />
        <Route path="profile" element={<VendorProfile />} />
      </Route>
      <Route path="*" element={<h1 className="text-center mt-10">Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
