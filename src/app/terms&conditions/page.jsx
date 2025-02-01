import React from 'react';

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 mt-20 w-full text-center">Terms and Conditions</h1>
      

      <section className="my-4">
        <h2 className="text-xl sm:text-2xl font-semibold my-4">Welcome to Rupeestop LLP</h2>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our website (the &quot;Website&quot;) and any associated services (&quot;Services&quot;) provided by Rupeestop LLP. By accessing or using the Website and Services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please refrain from using the Website or Services.
        </p>
      </section>

      <section className="my-4">
        <h2 className="text-xl sm:text-2xl font-semibold my-4">1. About Us</h2>
        <p>
          Rupeestop LLP is a wealth management company offering financial advisory, investment solutions, and related services to individuals and entities. Our goal is to assist clients in achieving financial growth through tailored strategies.
        </p>
      </section>

      <section className="my-4">
        <h2 className="text-xl sm:text-2xl font-semibold my-4">2. Acceptance of Terms</h2>
        <ul className="list-disc list-inside">
          <li>Have read, understood, and agree to these Terms.</li>
          <li>Meet the eligibility criteria outlined below.</li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl sm:text-2xl font-semibold my-4">3. Eligibility</h2>
        <ul className="list-disc list-inside">
          <li>You must be at least 18 years old or the age of majority in your jurisdiction to use our Services.</li>
          <li>You represent and warrant that you are capable of entering into legally binding agreements.</li>
          <li>If acting on behalf of an entity, you confirm that you have the authority to bind the entity to these Terms.</li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl sm:text-2xl font-semibold my-4">4. Use of Website and Services</h2>
        <h3 className="font-semibold">Permitted Use:</h3>
        <ul className="list-disc list-inside">
          <li>Access and use the Website for personal or business financial planning purposes.</li>
          <li>Use the Services in accordance with applicable laws and regulations.</li>
        </ul>
        <h3 className="font-semibold mt-4">Prohibited Activities:</h3>
        <ul className="list-disc list-inside">
          <li>Use the Website or Services for fraudulent purposes.</li>
          <li>Copy, reproduce, or distribute Website content without written permission.</li>
          <li>Interfere with the operation of the Website or attempt unauthorized access.</li>
          <li>Post or transmit harmful or illegal content via the Website.</li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl sm:text-2xl font-semibold my-4">5. Services Offered</h2>
        <p>Rupeestop LLP provides wealth management and financial advisory services, including but not limited to:</p>
        <ul className="list-disc list-inside">
          <li>Investment portfolio management.</li>
          <li>Financial planning and consulting.</li>
          <li>Risk assessment and mitigation strategies.</li>
          <li>Retirement and tax planning.</li>
        </ul>
        <p className="mt-4 font-semibold">Disclaimers:</p>
        <ul className="list-disc list-inside">
          <li>All financial decisions are made at your discretion. Rupeestop LLP provides guidance but does not guarantee specific financial outcomes.</li>
          <li>Past performance of investments is not indicative of future results.</li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl sm:text-2xl font-semibold my-4">6. Account Registration</h2>
        <ul className="list-disc list-inside">
          <li>Provide accurate, complete, and up-to-date information.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Notify us immediately of unauthorized access to your account.</li>
        </ul>
      </section>

      {/* Add additional sections as necessary following the same structure */}

      <footer className="my-8 text-sm text-gray-600">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
        </p>
        <p className="mt-4">
          Rupeestop LLP reserves the right to modify these Terms at any time. Changes will be effective upon posting. Continued use of the Website or Services constitutes acceptance of the revised Terms.
        </p>
      </footer>
    </div>
  );
};

export default page;
