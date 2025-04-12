'use client';
import React, { useState } from 'react';
import {
  EnvelopeIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ArrowPathIcon,
  LockClosedIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import chart from '@/assets/rupeestop_assets/barchart2.png';
import UserVerificationPopup from '@/components/userVerification/UserVerificationPopup';

function PortfolioSyncPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Sync Your Investment Portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your Trusted Partners in Simplifying Investment Decisions!
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="px-6 py-8 sm:p-10 bg-primary">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Centralize Your Investment Data
                </h2>
                <p className="mt-3 text-indigo-100">
                  Connect your email to automatically extract and organize
                  investment information from multiple platforms, giving you a
                  unified view of your entire portfolio.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
                >
                  Connect Email Account
                </button>

                <p className="mt-6 text-sm text-gray-500">
                  <Link
                    href="/privacy-policy"
                    className="text-gray-200 hover:text-green-400 underline"
                  >
                    Privacy Policy
                  </Link>{' '}
                </p>
              </div>
              <div className="hidden lg:block w-full">
                <div className="flex justify-center items-center h-full">
                  <Image
                    src={chart}
                    alt="Portfolio dashboard preview"
                    className="w-full max-w-xs object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* About Rupeestop Section */}
          <div className="px-6 py-10 sm:px-10 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About Rupeestop
            </h2>
            <p className="text-gray-700 mb-6">
              Rupeestop is an investment firm dedicated to simplifying
              investment decisions for individuals and institutions. Our mission
              is to provide comprehensive investment solutions to meet the
              specific needs of our clients. With our diverse backgrounds and
              shared expertise, we aim to bridge the gap between complex
              financial instruments and everyday investors.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  We believe in clear and open communication
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expertise
                </h3>
                <p className="text-gray-600">
                  Our Team&#39;s varied experience ensures well-rounded
                  financial plans
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Client Centric
                </h3>
                <p className="text-gray-600">
                  We focus on the unique needs and goals of each client
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="px-6 py-10 sm:px-10 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <EnvelopeIcon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Connect Your Email
                </h4>
                <p className="text-gray-600">
                  Provide read-only access to your email where you receive
                  investment updates and reports.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <ArrowPathIcon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Automatic Extraction
                </h4>
                <p className="text-gray-600">
                  Our system identifies and extracts investment data from your
                  emails across different platforms.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <ChartBarIcon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Unified Dashboard
                </h4>
                <p className="text-gray-600">
                  View all your investments in one place with comprehensive
                  analytics and insights.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security Section */}
          <div className="bg-gray-50 px-6 py-10 sm:px-10 border-b border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <ShieldCheckIcon className="h-12 w-12 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Your Data Security
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-medium">Read-only access:</span> We
                      only request permission to read your emails, never to send
                      or modify.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-medium">Specific filtering:</span>{' '}
                      We only process emails related to your investments.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-medium">Encrypted storage:</span>{' '}
                      Your data is encrypted at rest and in transit with 256-bit
                      encryption.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-medium">Revoke anytime:</span> You
                      can disconnect your email account at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy Highlights */}
          <div className="px-6 py-10 sm:px-10 border-b border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <LockClosedIcon className="h-12 w-12 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Privacy Policy Highlights
                </h3>
                <p className="mt-2 text-gray-600">
                  Rupeestop LLP is committed to ensuring that your privacy is
                  protected at all times. Our relationship is built on trust and
                  faith.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Information Collection
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          Contact details and personal identifiers needed to
                          provide our services
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          Image data (with permission) for document verification
                          and KYC
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          Location data for identity verification and security
                          purposes
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Data Usage & Protection
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          Your data is stored securely with passwords one-way
                          encrypted
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          All communications encrypted with 256-bit encryption
                          standards
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          Data is continuously backed up to ensure service
                          continuity
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                  For the complete privacy policy, please visit our{' '}
                  <Link
                    href="/privacy-policy"
                    className="text-primary underline"
                  >
                    Privacy Policy
                  </Link>{' '}
                  page.
                </p>
              </div>
            </div>
          </div>

          {/* Terms and Conditions Highlights */}
          <div className="px-6 py-10 sm:px-10 border-b border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <DocumentTextIcon className="h-12 w-12 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Terms of Service Overview
                </h3>
                <p className="mt-2 text-gray-600">
                  By using our service, you agree to comply with and be bound by
                  our Terms and Conditions.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Service Eligibility
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          Users must be at least 18 years old or the age of
                          majority in their jurisdiction
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          Users must be capable of entering into legally binding
                          agreements
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          If acting on behalf of an entity, users must have
                          authority to bind that entity
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Service Disclaimers
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          All financial decisions are made at your discretion
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          Past performance of investments is not indicative of
                          future results
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          We provide guidance but do not guarantee specific
                          financial outcomes
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                  For the complete terms and conditions, please visit our{' '}
                  <Link
                    href="/terms&conditiions"
                    className="text-primary underline"
                  >
                    Terms and Conditions
                  </Link>{' '}
                  page.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="px-6 py-10 sm:px-10 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Frequently Asked Questions
            </h3>
            <dl className="space-y-6">
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  What is Rupeestop?
                </dt>
                <dd className="mt-2 text-gray-600">
                  Rupeestop is a comprehensive financial management platform
                  designed to help Indians track, analyze, and optimize their
                  personal finances. We provide tools for investment tracking,
                  expense management, and personalized financial insights.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  How does Rupeestop help me manage my finances?
                </dt>
                <dd className="mt-2 text-gray-600">
                  We analyze your financial data to provide a complete picture
                  of your financial health. Our platform helps you track
                  investments, monitor expenses, set budgets, receive bill
                  payment reminders, and get personalized recommendations to
                  improve your financial wellbeing.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Can I revoke access later?
                </dt>
                <dd className="mt-2 text-gray-600">
                  Yes, you can disconnect your email at any time from your
                  account settings. We&#39;ll stop processing new emails
                  immediately.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  What makes Rupeestop different from other financial apps?
                </dt>
                <dd className="mt-2 text-gray-600">
                  Rupeestop is specifically built for the Indian financial
                  ecosystem, with support for local banks, investment platforms,
                  and tax regulations. Our intelligent email analysis provides a
                  seamless way to track your finances without the hassle of
                  manual entry or maintaining multiple app connections.
                </dd>
              </div>
            </dl>
          </div>

          {/* CTA Footer */}
          <div className="px-6 py-10 sm:px-10 bg-gray-900">
            <div className="text-center">
              <h3 className="text-xl font-medium text-white">
                Ready to centralize your portfolio?
              </h3>
              <p className="mt-2 text-gray-300">
                Connect your email and see all your investments in one place
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Get Started Now
              </button>
              <p className="mt-4 text-sm text-gray-400">
                By clicking &#34;Get Started Now&#34;, you agree to our{' '}
                <Link
                  href="/terms&conditiions"
                  className="text-gray-300 hover:text-white"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <UserVerificationPopup
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default PortfolioSyncPage;
