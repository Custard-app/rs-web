'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WidthXL from '@/wrapper/widths/WidthXL';
import { getFdRates } from '@/utils/fdRatesService';
import shriram from '@/assets/rupeestop_assets/Fixed Deposits/Images/shriram.png';
import bajaj from '@/assets/rupeestop_assets/Fixed Deposits/Images/bajaj.png';
import mahindra from '@/assets/rupeestop_assets/Fixed Deposits/Images/mahindra.png';
import pnb from '@/assets/rupeestop_assets/Fixed Deposits/Images/pnb.png';

const DynamicFdRatesSection = () => {
    const [fdRates, setFdRates] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to get the correct image based on company ID
    const getCompanyImage = (companyId) => {
        switch (companyId) {
            case 'shriram-finance':
                return shriram;
            case 'bajaj-finserv':
                return bajaj;
            case 'mahindra-finance':
                return mahindra;
            case 'pnb-housing':
                return pnb;
            default:
                return shriram; // fallback
        }
    };

    useEffect(() => {
        const fetchFdRates = async () => {
            try {
                const rates = await getFdRates();
                setFdRates(rates);
            } catch (error) {
                console.error('Error fetching FD rates:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFdRates();
    }, []);

    if (loading) {
        return (
            <div className="bg-[#FFFBF7] py-14 sm:py-24 px-5 sm:px-0">
                <WidthXL>
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                </WidthXL>
            </div>
        );
    }

    return (
        <div className="bg-[#FFFBF7] py-14 sm:py-24 px-5 sm:px-0">
            <WidthXL>
                <div className="flex flex-col gap-24">
                    {fdRates.map((company, index) => (
                        <div key={company.id} className="flex flex-col sm:flex-row items-center gap-10">
                            {/* Left Section */}
                            <div className="w-full sm:w-[602px] flex flex-col items-start gap-4">
                                <div className="mb-4">
                                    <Image
                                        src={getCompanyImage(company.id)}
                                        alt={company.companyName}
                                        width={112}
                                        height={112}
                                        className="w-28 h-auto"
                                    />
                                </div>
                                <h2 className="font-poppins text-[28px] sm:text-4xl font-bold mb-4 text-start">
                                    {company.companyName}
                                </h2>
                                <p className="font-lato font-medium text-[20px] sm:text-2xl text-gray-600 mb-4 text-start">
                                    {company.description}
                                </p>
                                <ul className="space-y-2 text-gray-700 font-lato font-medium text-lg">
                                    {company.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <span className="text-primary mr-2">✔</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={company.bookingLink}
                                    target="_blank"
                                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-4"
                                >
                                    Book Now
                                </Link>
                            </div>

                            {/* Right Section - Rate Table */}
                            <div className="w-full sm:w-[550px]">
                                <div className="bg-white rounded-t-3xl overflow-hidden shadow-lg">
                                    <div className="bg-primary text-white p-4">
                                        <h3 className="text-xl font-bold text-center">
                                            Interest Rate Table
                                        </h3>
                                        <p className="text-center text-sm mt-1">
                                            (On ₹10,000 Investment)
                                        </p>
                                    </div>
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-100 border-b border-gray-200">
                                                <th className="py-3 px-4 text-left font-lato font-bold text-base sm:text-lg">
                                                    Tenure
                                                </th>
                                                <th className="py-3 px-4 text-center font-lato font-bold text-base sm:text-lg border-l border-r border-gray-300">
                                                    Interest Rate
                                                </th>
                                                <th className="py-3 px-4 text-center font-lato font-bold text-base sm:text-lg">
                                                    Maturity Value (₹)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {company.rateTable.map((rate, rateIndex) => (
                                                <tr
                                                    key={rateIndex}
                                                    className="font-lato font-medium text-sm sm:text-lg text-center"
                                                >
                                                    <td className="py-2 px-4 border-r border-gray-300">
                                                        {rate.tenure}
                                                    </td>
                                                    <td className="py-2 px-4 border-r border-gray-300">
                                                        {rate.rate}
                                                    </td>
                                                    <td className="py-2 px-4">
                                                        {rate.maturityValue}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-sm bg-primary text-white p-4 rounded-b-3xl">
                                    <p className="italic mb-1">Notes:</p>
                                    <ul className="list-disc list-inside space-y-1 sm:space-y-2 font-lato text-[10px] sm:text-sm italic">
                                        {company.notes.map((note, noteIndex) => (
                                            <li key={noteIndex} className="flex items-start">
                                                <span className="text-white mr-2">•</span>
                                                {note}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </WidthXL>
        </div>
    );
};

export default DynamicFdRatesSection;
