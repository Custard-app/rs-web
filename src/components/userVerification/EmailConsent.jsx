'use client';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const EmailConsent = ({ email, onSubmit }) => {
  const handleGoogleConnect = () => {
    const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const redirectUrl = encodeURIComponent(`${frontendUrl}/dashboard`);

    window.location.href = `${backendUrl}/auth/google?redirect_url=${redirectUrl}`;
  };

  return (
    <div className="space-y-6 p-2">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="bg-primary p-2 rounded-full mr-3">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Connect Your Email
          </h3>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed mb-5">
          Unlock powerful financial insights by securely connecting your email.
          We&#39;ll analyze your data to help you make smarter financial decisions.
        </p>

        <div className="bg-white p-4 rounded-md shadow-sm mb-4">
          <ul className="text-sm text-gray-700 space-y-3">
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                <span className="font-medium">Automatic Detection:</span> We&#39;ll
                find your investments, subscriptions, and financial accounts
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                <span className="font-medium">Smart Tracking:</span> Monitor
                expenses, bills, and financial deadlines
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                <span className="font-medium">Personalized Insights:</span> Get
                customized recommendations to improve your finances
              </span>
            </li>
          </ul>
        </div>

        <div className="text-xs text-gray-500 italic mb-3 text-center">
          Your data is encrypted and secure. We never share your information
          with third parties.
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleGoogleConnect}
          className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-1"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-gray-800 font-medium">
            Continue with Google
          </span>
        </button>

        <div className="flex items-center justify-center space-x-4 pt-2">
          <button
            type="button"
            onClick={() => onSubmit(false)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            Skip for now
          </button>
          <Link
            type="button"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailConsent;
