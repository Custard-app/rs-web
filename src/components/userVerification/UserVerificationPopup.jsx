"use client";
import { useState } from 'react';
import UserInfoForm from './UserInfoForm';
import OtpVerification from './OtpVerification';
import EmailConsent from './EmailConsent';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const UserVerificationPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: User Info, 2: OTP, 3: Email Consent
  const [userInfo, setUserInfo] = useState({
    pan: '',
    mobile: '',
    email: '',
  });
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  // const [isOtpVerifying, setIsOtpVerifying] = useState(false);

  const handleUserInfoSubmit = async (info) => {
    setUserInfo(info);
    // In a real application, you would make an API call to send OTP
    console.log('Sending OTP to:', info.mobile);

    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/otp/send`, {
      pan: info.pan,
      mobile: info.mobile,
      email: info.email,
    });

    if (response.status === 200) {
      setStep(2);
    } else {
      console.log('Error sending OTP:', response.data);
      setStep(1);
    }
  };

  const handleOtpSubmit = async(verifiedOtp) => {
    try {
      // setIsOtpVerifying(true);
      setOtp(verifiedOtp);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/otp/verify`, {
        email: userInfo.email,
        otp: verifiedOtp,
      });
  
      if (response.status === 200) {
        setIsOtpVerified(true);
  
        setTimeout(() => {
          setStep(3);
          // setIsOtpVerifying(false);
          setIsOtpVerified(false);
        }, 5000);
      } 

    } catch (error) {
      console.error('Error verifying OTP:', error);
      setStep(2);
      setIsOtpVerified(false);
    }finally{
      if(isOtpVerified){
        // setIsOtpVerifying(false);
        setIsOtpVerified(false);
      }
    }
  };

  const handleConsentSubmit = (hasConsented) => {
    // In a real application, you would save the consent status
    console.log('User consent status:', hasConsented);
    navigate('/')
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {step === 1 && 'User Information'}
            {step === 2 && 'OTP Verification'}
            {step === 3 && 'Email Consent'}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {step === 1 && (
          <UserInfoForm 
            initialValues={userInfo} 
            onSubmit={handleUserInfoSubmit} 
          />
        )}

        {step === 2 && (
          <OtpVerification 
            email={userInfo.email} 
            onSubmit={handleOtpSubmit} 
            isOtpVerified={isOtpVerified}
          />
        )}

        {step === 3 && (
          <EmailConsent 
            email={userInfo.email} 
            onSubmit={handleConsentSubmit} 
          />
        )}
      </div>
    </div>
  );
};

export default UserVerificationPopup;