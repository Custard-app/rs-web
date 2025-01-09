'use client'
import Image from 'next/image';
import React, { useState,useEffect } from 'react';
import logo from '@/assets/images/Logo.png';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineEye,AiOutlineEyeInvisible  } from "react-icons/ai";


const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-5 sm:px-0">
      <div className="bg-white w-[620px] py-5 px-8 rounded-2xl shadow-lg relative">
        <div className="w-full flex items-center justify-between mb-4">
          <Image src={logo} width={150} height={150} alt="logo" />
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <RxCross2 size={25}/>
          </button>
        </div>

        {/* Heading */}
        <h2 className="font-lato text-2xl font-bold mb-4 text-center">
          {isLogin ? 'Login' : 'Create an Account'}
        </h2>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label
              className="block text-black font-lato font-semibold text-sm mb-2"
              htmlFor="name"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border-[1px] bg-[#FBFBFB] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Name@example.com"
            />
          </div>

          {/* Password Field */}
          <div className={`${!isLogin && 'mb-4'}`}>
            <label
              className="block text-black font-lato font-semibold text-sm mb-2"
              htmlFor="password"
            >
              {!isLogin ? 'Create Password' : 'Password'}
            </label>
            <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="relative w-full p-3 border-[1px] bg-[#FBFBFB] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder={
                isLogin ? 'Enter password' : 'Create new password'
              }
            />
            <button
              type="button"
              className="absolute right-3 sm:right-4 top-4 sm:top-3 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="text-xl sm:text-2xl" />
              ) : (
                <AiOutlineEye className="text-xl sm:text-2xl" />
              )}
            </button>
            </div>
          </div>
          {isLogin && (
            <button className="font-lato text-[13px] text-primary w-inline-block">
              Forgot Password?
            </button>
          )}

          {!isLogin && (
            <div className="mb-4">
              <label
                className="block text-black font-lato font-semibold text-sm mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-3 border-[1px] bg-[#FBFBFB] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Confirm new password"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-accentOrange-200 text-white font-bold font-lato text-base py-3 px-4 rounded-lg mt-3"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Switch Form */}
        <p className="text-center text-gray-600 mt-4 font-lato text-[13px] ">
          {isLogin ? 'Not a Member yet?' : 'Already have an account?'}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-accentOrange-200 underline mx-1"
          >
            {isLogin ? ' Sign Up ' : ' Login '}
          </button>
          here
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
