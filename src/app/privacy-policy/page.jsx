import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center px-4 py-10 bg-white">
      <div className="max-w-3xl w-full text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold mb-6 mt-20 w-full text-center">Privacy Policy</h1>

        <p>
          This privacy policy outlines how <strong>Rupeestop LLP</strong> uses
          and protects any information that you share when using this website or
          our mobile application. Rupeestop LLP is committed to ensuring that
          your privacy is protected at all times.
        </p>

        <p>
          We may update this policy from time to time by updating this page.
          This policy is effective from <strong>June 1, 2018</strong>, and
          reflects updates as of the latest version below.
        </p>

        <h2 className="text-xl font-semibold text-black">
          Commitment to Your Privacy
        </h2>
        <p>
          Rupeestop LLP understands that our relationship is built on trust.
          While using this website or availing our services, we may become privy
          to personal and confidential information. We are strictly committed to
          safeguarding this data and have implemented robust measures to protect
          its confidentiality during transmission over the internet.
        </p>
        <p>
          However, Rupeestop LLP shall not be liable for any disclosure of
          confidential information that is in accordance with this policy or due
          to circumstances beyond our control. Information may be disclosed when
          legally required by government agencies or judicial bodies.
        </p>

        <h2 className="text-xl font-semibold text-black">
          Login and Authentication
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Login via PAN and mobile number followed by a One-Time Password
            (OTP).
          </li>
          <li>
            All authentication data is <strong>end-to-end encrypted</strong>.
          </li>
          <li>
            Post-verification, Gmail login is prompted to fetch mutual fund
            statements.
          </li>
          <li>
            <strong>No Gmail credentials or financial data are stored</strong>{' '}
            on our servers.
          </li>
          <li>
            Data is used only during the session and is not shared with third
            parties unless legally required.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-black">What We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Name and contact details (email, mobile)</li>
          <li>PAN number (for identity and financial access)</li>
          <li>Gmail access (for one-time mutual fund data retrieval)</li>
        </ul>

        <p>This information helps us:</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>Provide personalized services and insights</li>
          <li>Communicate about account activity or updates</li>
          <li>Improve platform experience</li>
        </ul>

        <h2 className="text-xl font-semibold text-black">
          Use of Image Data
        </h2>
        <p>
          If you grant permission, we may access your camera or photo gallery to
          capture/upload documents for KYC purposes. Images are only used for
          identity verification and are not shared with third parties unless
          legally required.
        </p>

        <h2 className="text-xl font-semibold text-black">
          Security Measures
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>256-bit SSL encryption</strong> secures all communication.
          </li>
          <li>Passwords are one-way encrypted before storage.</li>
          <li>
            Data is hosted on top-tier infrastructure and regularly backed up.
          </li>
          <li>
            All sensitive data transactions are{' '}
            <strong>end-to-end encrypted</strong>.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-black">
          Security Certifications
        </h2>
        <p>
          Our systems are certified and regularly audited to ensure high-level
          protection. We comply with trust standards from technical, legal, and
          operational standpoints.
        </p>

        <h2 className="text-xl font-semibold text-black">
          Third-Party Links
        </h2>
        <p>
          We may include links to other websites for convenience. Once you leave
          our platform, we are not responsible for the content or privacy
          practices of external sites.
        </p>

        <h2 className="text-xl font-semibold text-black">
          Managing Your Information
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Users can update personal info or preferences via the app.</li>
          <li>
            Accounts or specific data can be deleted via app settings or by
            emailing{' '}
            <a
              href="mailto:info@redvisionglobal.com"
              className="text-black underline"
            >
              info@redvisionglobal.com
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
