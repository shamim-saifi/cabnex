import React from 'react';
import { FaCar, FaStar, FaPlus, FaCheckCircle, FaClock, FaCalendarCheck, FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VendorDashboardHome = () => {
  // Mock data for bookings (replace with API data)
  const recentBookings = [
    { id: 'B001', customer: 'John Doe', car: 'Toyota Camry', date: '2025-09-28', status: 'Confirmed' },
    { id: 'B002', customer: 'Jane Smith', car: 'Honda Civic', date: '2025-09-29', status: 'Pending' },
    { id: 'B003', customer: 'Mike Johnson', car: 'Ford Mustang', date: '2025-09-30', status: 'Completed' },
  ];

  return (
    <div className="space-y-8 p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-grotesk font-semibold text-gray-800 dark:text-gray-200">
        Welcome to Your Dashboard
      </h2>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Total Cars */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-grotesk font-medium text-gray-700 dark:text-gray-200">Total Cars</h3>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
              <FaCar className="w-8 h-8 text-green-600 dark:text-green-300" />
            </div>
          </div>
          <p className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">15</p>
          <Link
            to="/vendor/add-car"
            className="mt-4 inline-flex items-center px-4 py-2 bg-[#FF6900] text-white rounded-md hover:bg-[#e55e00] transition-colors duration-200"
          >
            <FaPlus className="mr-2 w-4 h-4" /> Add New Car
          </Link>
        </div>

        {/* Approved Cars */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-grotesk font-medium text-gray-700 dark:text-gray-200">Approved Cars</h3>
            <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-xl">
              <FaCheckCircle className="w-8 h-8 text-teal-600 dark:text-teal-300" />
            </div>
          </div>
          <p className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">12</p>
        </div>

        {/* Pending Approval */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-grotesk font-medium text-gray-700 dark:text-gray-200">Pending Approval</h3>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-xl">
              <FaClock className="w-8 h-8 text-yellow-600 dark:text-yellow-300" />
            </div>
          </div>
          <p className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">3</p>
        </div>

        {/* Completed Bookings */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-grotesk font-medium text-gray-700 dark:text-gray-200">Completed Bookings</h3>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
              <FaCalendarCheck className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
          </div>
          <p className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">30</p>
        </div>

        {/* Upcoming Bookings */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-grotesk font-medium text-gray-700 dark:text-gray-200">Upcoming Bookings</h3>
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
              <FaCalendar className="w-8 h-8 text-purple-600 dark:text-purple-300" />
            </div>
          </div>
          <p className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">12</p>
        </div>

        {/* Customer Reviews */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-grotesk font-medium text-gray-700 dark:text-gray-200">Customer Reviews</h3>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-xl">
              <FaStar className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">4.7 / 5.0</p>
        </div>
      </div>

      {/* Recent Bookings Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-xl">
        <h3 className="text-xl font-grotesk font-medium text-gray-700 dark:text-gray-200">Recent Bookings</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Car Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentBookings
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{booking.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{booking.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{booking.car}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{booking.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          booking.status === 'Confirmed'
                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                            : booking.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboardHome;