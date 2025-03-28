"use client";
import { useState } from 'react';

const UserInfoForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues || {
    pan: '',
    mobile: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const validatePAN = (pan) => {
    // PAN format: AAAAA0000A (5 letters, 4 numbers, 1 letter)
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const validateMobile = (mobile) => {
    // Mobile format: 10 digits
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const validateEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'pan' ? value.toUpperCase() : value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    
    if (!formData.pan || !validatePAN(formData.pan)) {
      newErrors.pan = 'Please enter a valid PAN (e.g., ABCDE1234F)';
    }
    
    if (!formData.mobile || !validateMobile(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form if validation passes
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="pan" className="block text-sm font-medium text-gray-700">
          PAN Number
        </label>
        <input
          type="text"
          id="pan"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          placeholder="ABCDE1234F"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.pan && (
          <p className="mt-1 text-sm text-red-600">{errors.pan}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.mobile && (
          <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#005e59] hover:bg-[#004C48] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004C48]"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default UserInfoForm; 