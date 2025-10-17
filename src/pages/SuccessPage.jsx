import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { jsPDF } from 'jspdf';
import Header from '../components/header';

const SuccessPage = () => {
  const { bookingId } = useParams();
  const location = useLocation();
  const [bookingData, setBookingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const params = new URLSearchParams(location.search);
    const encodedData = params.get('data');

    if (encodedData) {
      try {
        const decoded = JSON.parse(decodeURIComponent(encodedData));
        setBookingData(decoded?.data?.booking || null);
        setError(null);
      } catch (error) {
        console.error('Error decoding payment data:', error);
        setError('Failed to load booking details. Please try again later.');
      }
    } else if (bookingId) {
      setBookingData({ bookingId });
      setError(null);
    } else {
      setError('No booking data available.');
    }
    setIsLoading(false);
  }, [location, bookingId]);

  const downloadPDF = () => {
    if (!bookingData) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Booking Confirmation', 20, 20);
    doc.setFontSize(12);
    doc.text(`Booking ID: ${bookingData.bookingId}`, 20, 40);
    if (bookingData.startLocation) {
      doc.text(`From: ${bookingData.startLocation.address}`, 20, 50);
    }
    if (bookingData.destinations && bookingData.destinations.length > 0) {
      doc.text(`To: ${bookingData.destinations[0].address}`, 20, 60);
    }
    doc.text(`Paid Amount: ₹${bookingData.recievedAmount}`, 20, 70);
    doc.text(`Total Amount: ₹${bookingData.totalAmount}`, 20, 80);
    doc.text(`Service Type: ${bookingData.serviceType}`, 20, 90);
    doc.text(`Pickup Time: ${new Date(bookingData.pickupDateTime).toLocaleString()}`, 20, 100);
    doc.text(`Status: ${bookingData.status}`, 20, 110);
    doc.save(`Booking_${bookingData.bookingId}.pdf`);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-2xl w-full mx-auto p-8 bg-white rounded-xl shadow-lg">
        <Header />
        <div className="text-center mt-8">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>

          {isLoading ? (
            <p className="text-lg text-gray-600">Loading booking details...</p>
          ) : error ? (
            <p className="text-lg text-red-500">{error}</p>
          ) : bookingData ? (
            <div className="space-y-3 text-left bg-gray-50 p-6 rounded-lg">
              <p className="text-lg">
                <span className="font-semibold text-gray-700">Booking ID:</span>{' '}
                {bookingData.bookingId}
              </p>
              {bookingData.startLocation && (
                <p className="text-lg">
                  <span className="font-semibold text-gray-700">From:</span>{' '}
                  {bookingData.startLocation.address}
                </p>
              )}
              {bookingData.destinations && bookingData.destinations.length > 0 && (
                <p className="text-lg">
                  <span className="font-semibold text-gray-700">To:</span>{' '}
                  {bookingData.destinations[0].address}
                </p>
              )}
              <p className="text-lg">
                <span className="font-semibold text-gray-700">Paid Amount:</span> ₹
                {bookingData.recievedAmount}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-gray-700">Total Amount:</span> ₹
                {bookingData.totalAmount}
              </p>
              <p className="text-lg capitalize">
                <span className="font-semibold text-gray-700">Service Type:</span>{' '}
                {bookingData.serviceType}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-gray-700">Pickup Time:</span>{' '}
                {new Date(bookingData.pickupDateTime).toLocaleString()}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-gray-700">Status:</span>{' '}
                <span className="capitalize">{bookingData.status}</span>
              </p>
            </div>
          ) : (
            <p className="text-lg text-gray-600">No booking details available.</p>
          )}

          <p className="mt-6 text-gray-600 text-sm">
            A confirmation will be sent to your email or phone soon.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => (window.location.href = '/')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Back to Home
            </button>
            {bookingData && (
              <button
                onClick={downloadPDF}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
              >
                Download PDF
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;