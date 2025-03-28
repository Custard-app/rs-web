"use client";
import { useState, useEffect, useRef } from 'react';

const OtpVerification = ({ mobile, onSubmit, isOtpVerified }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);

  // Set up timer for OTP resend
  useEffect(() => {
    let interval;
    if (timer > 0 && isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
    }
    
    return () => clearInterval(interval);
  }, [timer, isResendDisabled]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    // Update OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Clear error when user starts typing
    if (error) setError('');
    
    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      
      // Focus the last input
      inputRefs.current[5].focus();
    }
  };

  const handleResendOtp = () => {
    // Reset timer and disable resend button
    setTimer(30);
    setIsResendDisabled(true);
    
    // In a real application, you would make an API call to resend OTP
    console.log('Resending OTP to:', mobile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if OTP is complete
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    
    // Submit OTP for verification
    onSubmit(otpValue);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        We&#39;ve sent a 6-digit OTP to {mobile.slice(0, 2)}******{mobile.slice(-2)}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : null}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ))}
        </div>
        
        {error && (
          <p className="text-sm text-center text-red-600">{error}</p>
        )}
        
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={isResendDisabled}
            className={`text-sm ${
              isResendDisabled 
                ? 'text-gray-400' 
                : 'text-[#005e59] hover:text-[#013532]'
            }`}
          >
            {isResendDisabled 
              ? `Resend OTP in ${timer}s` 
              : 'Resend OTP'}
          </button>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isOtpVerified}
            className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
              ${isOtpVerified 
                ? 'bg-green-500 hover:bg-green-600' 
                : ' bg-[#005e59] hover:bg-[#004C48]'} 
              transition-colors duration-200`}
          >
            {isOtpVerified ? (
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                OTP Verified
              </div>
            ) : (
              'Verify OTP'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtpVerification; 