'use client';
import { useState } from 'react';
import { getFdRates, initializeDefaultFdRates } from '@/utils/fdRatesService';

const FdRatesTest = () => {
    const [fdRates, setFdRates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleFetchRates = async () => {
        setLoading(true);
        try {
            const rates = await getFdRates();
            setFdRates(rates);
            setMessage(`Fetched ${rates.length} FD rates`);
        } catch (error) {
            setMessage('Error fetching rates: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleInitialize = async () => {
        setLoading(true);
        try {
            const result = await initializeDefaultFdRates();
            setMessage(result.message);
            if (result.success) {
                handleFetchRates();
            }
        } catch (error) {
            setMessage('Error initializing: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">FD Rates System Test</h2>

            <div className="flex gap-4 mb-4">
                <button
                    onClick={handleFetchRates}
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading ? 'Loading...' : 'Fetch FD Rates'}
                </button>
                <button
                    onClick={handleInitialize}
                    disabled={loading}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                >
                    {loading ? 'Loading...' : 'Initialize Default Data'}
                </button>
            </div>

            {message && (
                <div className="mb-4 p-3 bg-gray-100 rounded border">
                    {message}
                </div>
            )}

            {fdRates.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold mb-3">Current FD Rates:</h3>
                    <div className="grid gap-4">
                        {fdRates.map((company) => (
                            <div key={company.id} className="border p-4 rounded">
                                <h4 className="font-semibold">{company.companyName}</h4>
                                <p className="text-sm text-gray-600 mb-2">{company.description}</p>
                                <div className="text-sm">
                                    <strong>Rates:</strong> {company.rateTable.length} different tenures
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FdRatesTest;
