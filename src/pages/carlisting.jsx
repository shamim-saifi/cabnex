import Header from "../components/header";
import Footer from "../components/footer";
import bg from "../assets/carlisting/page-header-bg.jpg";
import SearchSection from "../components/homepage/SearchSection"; 
import CarListingPage from "../components/carlisting/carfilter";

const CarListing = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:h-[450px] relative rounded-b-4xl items-center justify-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black/60 rounded-b-4xl"></div>
        <div className="relative text-center z-10 pt-28 sm:pt-0 px-6 md:px-12">
          <h1 className="text-[30px] text-white md:text-5xl font-bold mb-4">
            Find Your Perfect Ride
          </h1>
          <p className=" text-sm md:text-md text-gray-100 mb-8 max-w-2xl mx-auto">
            Explore a wide range of cars available for rent and purchase — from luxury sedans to budget-friendly options.
            Compare prices, check features, and drive your dream car today!
          </p>
        </div>
        <div className=" hidden sm:block w-full mb-[-200px] z-10">
          <SearchSection isUpdate={true} /> {/* Update mode */}
        </div>
      </div>

      <CarListingPage />

      <Footer />
    </>
  );
};

export default CarListing;