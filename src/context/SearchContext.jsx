import React, { createContext, useContext, useState, useEffect } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState(null);
  const [searchFormData, setSearchFormData] = useState({
    pickupDate: null,
    dropoffDate: null,
    pickupDateTime: null,
    transferDateTime: null,
    outstationTripType: 'one-way',
    outstationPickupDateTime: null,
    outstationReturnDateTime: null,
    selectedPlaces: {},
    rentalPackage: '',
    multicityStops: [],
    serviceType: 'rental',
    dropoffLocation: null,
    pickupLocation: null, // पिकअप लोकेशन के लिए जोड़ा
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('token');
  });
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem('searchFormData');
    if (savedFormData) {
      try {
        const parsed = JSON.parse(savedFormData);
        setSearchFormData(parsed);
      } catch (err) {
        console.error('Failed to load searchFormData from localStorage', err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchFormData', JSON.stringify(searchFormData));
  }, [searchFormData]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <SearchContext.Provider
      value={{
        searchResult,
        setSearchResult,
        searchFormData,
        setSearchFormData,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};