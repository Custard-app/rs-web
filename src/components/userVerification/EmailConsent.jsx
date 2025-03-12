"use client";
import { FcGoogle } from "react-icons/fc";

const EmailConsent = ({ email, onSubmit }) => {
  const handleGoogleConnect = () => {
    const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const redirectUrl = encodeURIComponent(`${frontendUrl}/dashboard`);
    
    window.location.href = `${backendUrl}/auth/google?redirect_url=${redirectUrl}`;
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Connect Your Email
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Connect your email to help us analyze your financial data and provide better insights:
        </p>
        <ul className="text-sm text-gray-700 space-y-2">
          <li className="flex items-center">
            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Automatically detect your investments
          </li>
          <li className="flex items-center">
            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Track your expenses and bills
          </li>
          <li className="flex items-center">
            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Get personalized financial insights
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleGoogleConnect}
          className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-gray-700">Continue with Google</span>
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => onSubmit(false)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailConsent; 