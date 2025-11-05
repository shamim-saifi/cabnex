import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api/api-config';
import { toast } from 'sonner';

const EditCar = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    category: '',
    year: '',
    registerationType: '',
    registrationNumber: '',
    colour: '',
    seatingCapacity: '',
    fuelType: '',
    airConditioning: false,
    features: [],
    insuranceExpiry: '',
    images: [],
  });

  const [existingImages, setExistingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await api.get(`/api/v1/vendor/cars/${carId}`);
        if (response.data.success) {
          const carData = response.data.data;
          setFormData({
            ...carData,
            insuranceExpiry: carData.insuranceExpiry.split('T')[0],
          });
          setExistingImages(carData.images || []);
        }
      } catch (error) {
        console.error('Error fetching car:', error);
        toast.error('Failed to fetch car details.');
      }
    };
    fetchCar();
  }, [carId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, features: [...prev.features, value] };
      } else {
        return { ...prev, features: prev.features.filter((feature) => feature !== value) };
      }
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages((prev) => [...prev, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleDeleteExistingImage = async (imageId) => {
    // Placeholder for API call to delete image
    toast.info('Delete functionality for existing images is not yet implemented.');
  };

  const handleDeleteNewImage = (index) => {
    const newImagesCopy = [...newImages];
    newImagesCopy.splice(index, 1);
    setNewImages(newImagesCopy);

    const newPreviewsCopy = [...imagePreviews];
    newPreviewsCopy.splice(index, 1);
    setImagePreviews(newPreviewsCopy);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      if (key !== 'features' && key !== 'images') {
        data.append(key, formData[key]);
      }
    }

    if (formData.features) {
      formData.features.forEach((feature) => {
        data.append('features', feature);
      });
    }

    if (newImages) {
      newImages.forEach((image) => {
        data.append('images', image);
      });
    }

    try {
      const response = await api.put(`/api/v1/vendor/cars/${carId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.success) {
        toast.success('Car updated successfully!');
        navigate('/vendor/car-list');
      } else {
        toast.error('Failed to update car.');
      }
    } catch (error) {
      console.error('Error updating car:', error);
      toast.error('Something went wrong while updating the car!');
    }
  };

  return (
    <div className="space-y-8 p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-grotesk font-semibold text-gray-800 dark:text-gray-200">Edit Car</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Make</label>
            <input type="text" name="make" value={formData.make} onChange={handleChange} placeholder="e.g., Toyota" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Model</label>
            <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="e.g., Camry" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="e.g., Sedan" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
            <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="e.g., 2023" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Registration Type</label>
            <input type="text" name="registerationType" value={formData.registerationType} onChange={handleChange} placeholder="e.g., Private" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Registration Number</label>
            <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} placeholder="e.g., ABC-123" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Color</label>
            <input type="text" name="colour" value={formData.colour} onChange={handleChange} placeholder="e.g., White" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Seating Capacity</label>
            <input type="number" name="seatingCapacity" value={formData.seatingCapacity} onChange={handleChange} placeholder="e.g., 5" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Fuel Type</label>
            <input type="text" name="fuelType" value={formData.fuelType} onChange={handleChange} placeholder="e.g., Petrol" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Insurance Expiry</label>
            <input type="date" name="insuranceExpiry" value={formData.insuranceExpiry} onChange={handleChange} className="input-field w-full" />
          </div>
        </div>
        <div className="pt-4">
          <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Air Conditioning</label>
          <label className="inline-flex items-center">
            <input type="checkbox" name="airConditioning" checked={formData.airConditioning} onChange={handleChange} className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-300">Available</span>
          </label>
        </div>
        <div className="pt-4">
          <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Features</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="inline-flex items-center">
              <input type="checkbox" value="ac" onChange={handleFeatureChange} checked={formData.features.includes('ac')} className="form-checkbox h-5 w-5 text-blue-600" />
              <span className="ml-2 text-gray-700 dark:text-gray-300">AC</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" value="gps" onChange={handleFeatureChange} checked={formData.features.includes('gps')} className="form-checkbox h-5 w-5 text-blue-600" />
              <span className="ml-2 text-gray-700 dark:text-gray-300">GPS</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" value="wifi" onChange={handleFeatureChange} checked={formData.features.includes('wifi')} className="form-checkbox h-5 w-5 text-blue-600" />
              <span className="ml-2 text-gray-700 dark:text-gray-300">WiFi</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" value="pet_friendly" onChange={handleFeatureChange} checked={formData.features.includes('pet_friendly')} className="form-checkbox h-5 w-5 text-blue-600" />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Pet Friendly</span>
            </label>
          </div>
        </div>
        <div className="pt-4">
          <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Existing Images</label>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {existingImages.map((image) => (
              <div key={image._id} className="relative">
                <img src={image.url} alt={`existing image ${image._id}`} className="w-full h-32 object-cover rounded-lg" />
                <button type="button" onClick={() => handleDeleteExistingImage(image._id)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4">
          <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Upload New Images</label>
          <input type="file" name="images" onChange={handleImageChange} multiple className="w-full" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative">
                <img src={preview} alt={`preview ${index}`} className="w-full h-32 object-cover rounded-lg" />
                <button type="button" onClick={() => handleDeleteNewImage(index)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end pt-6">
          <button type="submit" className="btn-primary py-2 px-6">Update Car</button>
        </div>
      </form>
    </div>
  );
};

export default EditCar;
