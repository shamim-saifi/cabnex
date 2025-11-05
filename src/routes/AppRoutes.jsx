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
import MyProfilePage from '../pages/MyProfilePage'; // Add import
import MyBookingsPage from '../pages/MyBookingsPage'; // Add import
import MyBookingDetailPage from '../pages/MyBookingDetailPage';
import MobilitySolutionsPage from '../pages/MobilitySolutionsPage';
import AboutUsPage from '../pages/AboutUsPage';
import OurTeamPage from '../pages/OurTeamPage';
import TermAndConditionPage from '../pages/legal/TermAndConditionPage';
import PrivacyPolicyPage from '../pages/legal/PrivacyPolicyPage';
import LegalNoticePage from '../pages/legal/LegalNoticePage';
import AccessibilityPage from '../pages/legal/AccessibilityPage';
import PaymentPolicyPage from '../pages/legal/PaymentPolicyPage';
import ContactUsPage from '../pages/ContactUsPage';

import AllBookingsPage from '../vendor/pages/AllBookingsPage';

import EditCar from '../vendor/pages/EditCar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vendor-login" element={<VendorLogin />} />
      <Route path="/vendor-registration" element={<VendorRegistration />} />
      <Route path="/car-listing" element={<CarListing />} />
      <Route path="/booking-details" element={<CardDetails />} />
      <Route path="/explore-packages" element={<ExplorePackages />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/profile" element={<MyProfilePage />} />
      <Route path="/my-bookings" element={<MyBookingsPage />} />
      <Route path="/my-booking-detail/:id" element={<MyBookingDetailPage />} />
      <Route path="/mobility-solutions" element={<MobilitySolutionsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/our-team" element={<OurTeamPage />} />
      <Route path="/terms-and-conditions" element={<TermAndConditionPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/legal-notice" element={<LegalNoticePage />} />
      <Route path="/accessibility" element={<AccessibilityPage />} />
      <Route path="/payment-policy" element={<PaymentPolicyPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />

      {/* Vendor Routes */}
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
        <Route path="edit-car/:carId" element={<EditCar />} />
        <Route path="profile" element={<VendorProfile />} />
        <Route path="bookings" element={<AllBookingsPage />} />
            </Route>
          </Routes>
        );
      };
      
      export default AppRoutes;
