import React, { useState, useEffect } from "react";
import { FaClock, FaHotel, FaSearch, FaStar, FaArrowRight } from 'react-icons/fa';
import { api } from '../api/api-config'; // Import from config
import Header from "../components/header"; // Tumhara actual Header
import Footer from "../components/footer"; // Tumhara actual Footer
import BookingModal from "../components/BookingModal"; // Reuse modal

export default function ExplorePackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await api.get("/api/v1/package/travel");
        const fetchedPackages = response.data.data.map(pkg => ({
          id: pkg._id,
          title: pkg.name,
          description: pkg.description,
          days: `${pkg.days} Days / ${pkg.nights} Nights`,
          stay: `Stay in ${pkg.place}`,
          price: `₹${pkg.price}`,
          img: pkg.image?.url || "https://via.placeholder.com/1400",
        }));
        setPackages(fetchedPackages);
        setLoading(false);
      } catch (err) {
        setError("Failed to load packages.");
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const filteredPackages = packages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pkg.stay.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (title) => {
    setSelectedPackage(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPackage(null);
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-20">{error}</div>;

  return (
    <>
      <Header />
      
      {/* New Banner Section with Background Image */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')" }} // Replace with your desired banner image URL
      >
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content on top of overlay */}
        <div className="relative z-10 text-white px-4 pt-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Explore All Holiday Packages</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Discover amazing destinations, from beaches to mountains. Find your perfect getaway!</p>
          
          {/* Search Bar in Banner */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or place..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid Section - Now below the banner, with mt-14 if needed for header spacing */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <FaStar className="text-orange-500" /> {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <p className="flex items-center gap-2 text-sm text-gray-700"><FaClock /> {pkg.days}</p>
                <p className="flex items-center gap-2 text-sm text-gray-700 mt-1"><FaHotel /> {pkg.stay}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">{pkg.price}</span>
                  <button onClick={() => openModal(pkg.title)} className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition">
                    Book Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredPackages.length === 0 && <div className="text-center text-gray-500 py-10">No packages found matching your search.</div>}
      </section>
      
      <Footer />
      <BookingModal isOpen={!!selectedPackage} onClose={closeModal} packageTitle={selectedPackage} />
    </>
  );
}