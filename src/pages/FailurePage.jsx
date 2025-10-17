import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import Header from '../components/header';
import { useSearchParams, useNavigate } from 'react-router-dom';

const FailurePage = () => {
  const [searchParams] = useSearchParams();
  const reason = searchParams.get('reason') || 'Unknown error';
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto p-6">
      <Header />
      <div className="mt-24 text-center">
        <XCircleIcon className="h-20 w-20 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-grotesk font-extrabold text-red-600 mb-6">Payment Failed!</h1>
        <p className="text-lg text-gray-700 mb-4">Reason: {reason.replace(/_/g, ' ')}</p>
        <p className="mt-2 mb-8">Please try again or contact support.</p>
        <button 
          onClick={() => navigate('/booking-details')} // Ya home pe: navigate('/')
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-3 font-grotesk font-semibold transition"
        >
          Try Again
        </button>
      </div>
    </section>
  );
};

export default FailurePage;