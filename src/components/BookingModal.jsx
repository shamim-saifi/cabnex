import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { api } from '../api/api-config'; // Import from config

function BookingModal({ isOpen, onClose, packageTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    date: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Real API call yaha add karo, e.g.:
      // await api.post('/api/v1/booking/create', { ...formData, package: packageTitle });
      console.log('Booking submitted:', { ...formData, package: packageTitle });
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError('Failed to submit booking. Please try again.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative max-h-screen overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <FaTimes size={24} />
        </button>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Book {packageTitle}</h3>
        {success ? (
          <div className="text-green-600 text-center mb-4">Booking request sent successfully!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
              <input type="number" name="travelers" value={formData.travelers} onChange={handleChange} min="1" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <button type="submit" disabled={submitting} className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition disabled:opacity-50">
              {submitting ? 'Submitting...' : 'Submit Booking'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default BookingModal;