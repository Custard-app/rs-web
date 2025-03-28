'use client';
import { useState, useEffect } from 'react';
import UserInfoForm from './UserInfoForm';
import OtpVerification from './OtpVerification';
import EmailConsent from './EmailConsent';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { auth } from '@/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const UserVerificationPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: User Info, 2: OTP, 3: Email Consent
  const [userInfo, setUserInfo] = useState({
    pan: '',
    mobile: '',
    email: '',
  });
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  // const [isOtpVerifying, setIsOtpVerifying] = useState(false);

  // const handleUserInfoSubmit = async (info) => {
  //   setUserInfo(info);
  //   // In a real application, you would make an API call to send OTP
  //   console.log('Sending OTP to:', info.mobile);

  //   const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/otp/send`, {
  //     pan: info.pan,
  //     mobile: info.mobile,
  //     email: info.email,
  //   });

  //   if (response.status === 200) {
  //     setStep(2);
  //   } else {
  //     console.log('Error sending OTP:', response.data);
  //     setStep(1);
  //   }
  // };

  // const handleOtpSubmit = async(verifiedOtp) => {
  //   try {
  //     // setIsOtpVerifying(true);
  //     setOtp(verifiedOtp);
  //     const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/otp/verify`, {
  //       email: userInfo.email,
  //       otp: verifiedOtp,
  //     });

  //     if (response.status === 200) {

  //       setTimeout(() => {
  //         setStep(3);
  //         // setIsOtpVerifying(false);
  //         setIsOtpVerified(true);
  //         // setIsOtpVerified(false);
  //       }, 2000);
  //     }

  //   } catch (error) {
  //     console.error('Error verifying OTP:', error);
  //     setStep(2);
  //     setIsOtpVerified(false);
  //   }finally{
  //     if(isOtpVerified){
  //       // setIsOtpVerifying(false);
  //       setIsOtpVerified(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && auth) {
  //     if (!window.recaptchaVerifier) {
  //       window.recaptchaVerifier = new RecaptchaVerifier(
  //         auth,
  //         'recaptcha-container',
  //         {
  //           size: 'invisible',
  //           callback: (response) => {
  //             console.log('reCAPTCHA verified', response);
  //           },
  //           'expired-callback': () => {
  //             console.log('reCAPTCHA expired. Resetting...');
  //           },
  //         },
  //       );
  //     }
  //   }
  // }, []);

  const handleUserInfoSubmit = async (info) => {
    setUserInfo(info);
    console.log('sending otp to:', info.mobile);

    try {
      const phoneNumber = `+91${info.mobile}`;

      // Initialize Recaptcha before sending OTP
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          'recaptcha-container',
          {
            size: 'invisible',
            callback: () => {
              console.log('reCAPTCHA Verified');
            },
            'expired-callback': () => {
              console.log('reCAPTCHA expired. Resetting...');
            },
            appVerificationDisabledForTesting: true,  // 🔹 For local testing
          },
        );
      }

      const appVerifier = window.recaptchaVerifier;

      //Send OTP
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier,
      );
      setConfirmationResult(confirmation);
      setStep(2);
      //Store confirmation result
    } catch (error) {
      console.error('Error sending OTP:', error);
      setStep(1);
    }
  };

  const handleOtpSubmit = async (verifiedOtp) => {
    try {
      if (!confirmationResult) {
        console.error('No confirmation result found');
        return;
      }

      //Verify OTP
      const credential = await confirmationResult.confirm(verifiedOtp);
      console.log('OTP verified successfully');

      setIsOtpVerified(true);
      setTimeout(() => setStep(3), 2000);

    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert("Invalid OTP. Please try again!");
      setStep(2);
      setIsOtpVerified(false);
    } 
  };

  const handleConsentSubmit = (hasConsented) => {
    // In a real application, you would save the consent status
    console.log('User consent status:', hasConsented);
    navigate('/');
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

        {/* <div id="recaptcha-container"></div> */}

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
          <EmailConsent email={userInfo.email} onSubmit={handleConsentSubmit} />
        )}
      </div>
    </div>
  );
};

export default UserVerificationPopup;
