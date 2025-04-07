// "use client";
// import { useState, useEffect, useRef } from 'react';
// import { useSearchParams } from 'next/navigation';
// import PortfolioOverview from '@/components/dashboard/PortfolioOverview';
// import VerificationPopup from '@/components/dashboard/VerificationPopup';
// import axios from 'axios';

// export default function Dashboard() {
//   const [portfolioData, setPortfolioData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showVerificationPopup, setShowVerificationPopup] = useState(false);
//   const hashFetched = useRef(false);
  
//   const searchParams = useSearchParams();
//   const isVerified = searchParams.get('verified') === 'true';

//   useEffect(() => {
//     // Show popup if user just verified
//     if (isVerified) {
//       setShowVerificationPopup(true);
      
//       // Remove the query parameter from URL without page reload
//       window.history.replaceState({}, '', '/dashboard');
//     }
//   }, [isVerified]);

//   useEffect(() => {
//     if (hashFetched.current) return;
//     hashFetched.current = true;

//     const fetchPortfolioData = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/email/fetch-data`);
//         const data = await response.data.data;
//         setPortfolioData(data);
//         console.log("Portfolio Data", response.data.data);
//       } catch (error) {
//         console.error('Error fetching portfolio data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPortfolioData();
//   }, []);

//   return (
//     <div className="w-full bg-gray-50 ">
//       <main className="w-full max-w-7xl flex justify-center mx-auto items-center px-4 sm:px-6 lg:px-8 py-8">
//         {loading ? (
//           <div className="flex flex-col gap-4 justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
//             <p className="text-gray-500">Extracting your portfolio data...</p>
//           </div>
//         ) : (
//           <PortfolioOverview />
//         )}
//       </main>

//       {/* Verification Success Popup */}
//       {showVerificationPopup && (
//         <VerificationPopup onClose={() => setShowVerificationPopup(false)} />
//       )}
//     </div>
//   );
// } 


"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PortfolioOverview from '@/components/dashboard/PortfolioOverview';
import VerificationPopup from '@/components/dashboard/VerificationPopup';
import axios from 'axios';

export default function Dashboard() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);

  // Wrap the useSearchParams in a Suspense boundary
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent 
        setPortfolioData={setPortfolioData} 
        setLoading={setLoading} 
        setShowVerificationPopup={setShowVerificationPopup} 
        showVerificationPopup={showVerificationPopup} 
        portfolioData={portfolioData} 
        loading={loading} 
      />
    </Suspense>
  );
}

function DashboardContent({ setPortfolioData, setLoading, setShowVerificationPopup, showVerificationPopup, portfolioData, loading }) {
  const searchParams = useSearchParams();
  const isVerified = searchParams.get('verified') === 'true';

  useEffect(() => {
    if (isVerified) {
      setShowVerificationPopup(true);
      window.history.replaceState({}, '', '/dashboard');
    }
  }, [isVerified]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/email/fetch-data`);
        console.log("Response", response);
        const data = response.data.data;
        console.log("Portfolio Data", data);
        setPortfolioData(data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex flex-col gap-4 justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <p className="text-gray-500">Extracting your portfolio data...</p>
          </div>
        ) : (
          <PortfolioOverview  />
        )}
      </main>

      {showVerificationPopup && (
        <VerificationPopup onClose={() => setShowVerificationPopup(false)} />
      )}
    </div>
  );
}