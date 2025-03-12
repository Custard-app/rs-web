"use client";
import { useState } from 'react';
import { UserVerificationPopup } from './index';

const UsageExample = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Verification Example</h1>
      
      <button
        onClick={openPopup}
        className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Open Verification Popup
      </button>
      
      <UserVerificationPopup 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
      />
    </div>
  );
};

export default UsageExample; 