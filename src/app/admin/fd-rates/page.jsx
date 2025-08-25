'use client';
import { useState, useEffect } from 'react';
import { getFdRates, updateFdRate, initializeDefaultFdRates } from '@/utils/fdRatesService';

const AdminFdRates = () => {
    const [fdRates, setFdRates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [editData, setEditData] = useState(null);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchFdRates();
    }, []);

    const fetchFdRates = async () => {
        try {
            const rates = await getFdRates();
            setFdRates(rates);
        } catch (error) {
            console.error('Error fetching FD rates:', error);
            setMessage({ type: 'error', text: 'Failed to fetch FD rates' });
        } finally {
            setLoading(false);
        }
    };



    const handleInitializeDefaults = async () => {
        setSaving(true);
        setMessage({ type: '', text: '' }); // Clear previous messages

        try {
            console.log('Admin: Starting initialization...');
            const result = await initializeDefaultFdRates();
            console.log('Admin: Initialization result:', result);

            if (result.success) {
                setMessage({ type: 'success', text: result.message });
                // Refresh the data
                await fetchFdRates();
            } else {
                setMessage({ type: 'error', text: result.message });
            }
        } catch (error) {
            console.error('Admin: Error in handleInitializeDefaults:', error);
            setMessage({ type: 'error', text: `Failed to initialize default rates: ${error.message}` });
        } finally {
            setSaving(false);
        }
    };

    const handleEditCompany = (company) => {
        setSelectedCompany(company.id);
        setEditData({ ...company });
    };

    const handleSaveChanges = async () => {
        if (!editData) return;

        setSaving(true);
        try {
            const result = await updateFdRate(editData.id, editData);
            if (result.success) {
                setMessage({ type: 'success', text: result.message });
                fetchFdRates();
                setSelectedCompany(null);
                setEditData(null);
            } else {
                setMessage({ type: 'error', text: result.message });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to save changes' });
        } finally {
            setSaving(false);
        }
    };

    const handleRateTableChange = (index, field, value) => {
        const newRateTable = [...editData.rateTable];
        newRateTable[index] = { ...newRateTable[index], [field]: value };
        setEditData({ ...editData, rateTable: newRateTable });
    };

    const addNewRate = () => {
        const newRate = { tenure: '', rate: '', maturityValue: '' };
        setEditData({
            ...editData,
            rateTable: [...editData.rateTable, newRate]
        });
    };

    const removeRate = (index) => {
        const newRateTable = editData.rateTable.filter((_, i) => i !== index);
        setEditData({ ...editData, rateTable: newRateTable });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">FD Rates Admin Panel</h1>

                    {/* Message Display */}
                    {message.text && (
                        <div className={`p-4 rounded-lg mb-4 ${message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200'
                            : 'bg-red-50 text-red-800 border border-red-200'
                            }`}>
                            {message.text}
                        </div>
                    )}

                    {/* Initialize Button - Only show if no data exists */}
                    {fdRates.length === 0 && (
                        <button
                            onClick={handleInitializeDefaults}
                            disabled={saving}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 mb-6"
                        >
                            {saving ? 'Initializing...' : 'Initialize Default Rates in Database'}
                        </button>
                    )}
                </div>

                {/* Companies List */}
                <div className="grid gap-6">
                    {fdRates.map((company) => (
                        <div key={company.id} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">{company.companyName}</h2>
                                    <p className="text-gray-600 mt-1">{company.description}</p>
                                </div>
                                <button
                                    onClick={() => handleEditCompany(company)}
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                >
                                    Edit
                                </button>
                            </div>

                            {/* Rate Table Preview */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-gray-50 rounded-lg">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="px-4 py-2 text-left">Tenure</th>
                                            <th className="px-4 py-2 text-left">Rate</th>
                                            <th className="px-4 py-2 text-left">Maturity Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {company.rateTable.slice(0, 3).map((rate, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="px-4 py-2">{rate.tenure}</td>
                                                <td className="px-4 py-2">{rate.rate}</td>
                                                <td className="px-4 py-2">₹{rate.maturityValue}</td>
                                            </tr>
                                        ))}
                                        {company.rateTable.length > 3 && (
                                            <tr>
                                                <td colSpan="3" className="px-4 py-2 text-center text-gray-500">
                                                    ... and {company.rateTable.length - 3} more rates
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Edit Modal */}
                {selectedCompany && editData && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold">Edit {editData.companyName}</h2>
                                    <button
                                        onClick={() => {
                                            setSelectedCompany(null);
                                            setEditData(null);
                                        }}
                                        className="text-gray-500 hover:text-gray-700 text-2xl"
                                    >
                                        ×
                                    </button>
                                </div>

                                {/* Basic Info */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
                                    <div className="grid gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                value={editData.companyName}
                                                onChange={(e) => setEditData({ ...editData, companyName: e.target.value })}
                                                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Description
                                            </label>
                                            <textarea
                                                value={editData.description}
                                                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                                                rows="3"
                                                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Rate Table */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-lg font-semibold">Interest Rate Table</h3>
                                        <button
                                            onClick={addNewRate}
                                            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                                        >
                                            Add Rate
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border border-gray-300">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="px-3 py-2 text-left border-b">Tenure</th>
                                                    <th className="px-3 py-2 text-left border-b">Rate</th>
                                                    <th className="px-3 py-2 text-left border-b">Maturity Value</th>
                                                    <th className="px-3 py-2 text-left border-b">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {editData.rateTable.map((rate, index) => (
                                                    <tr key={index} className="border-b">
                                                        <td className="px-3 py-2">
                                                            <input
                                                                type="text"
                                                                value={rate.tenure}
                                                                onChange={(e) => handleRateTableChange(index, 'tenure', e.target.value)}
                                                                className="w-full p-1 border border-gray-300 rounded"
                                                                placeholder="e.g., 12 months"
                                                            />
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            <input
                                                                type="text"
                                                                value={rate.rate}
                                                                onChange={(e) => handleRateTableChange(index, 'rate', e.target.value)}
                                                                className="w-full p-1 border border-gray-300 rounded"
                                                                placeholder="e.g., 7.50%"
                                                            />
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            <input
                                                                type="text"
                                                                value={rate.maturityValue}
                                                                onChange={(e) => handleRateTableChange(index, 'maturityValue', e.target.value)}
                                                                className="w-full p-1 border border-gray-300 rounded"
                                                                placeholder="e.g., 10,750"
                                                            />
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            <button
                                                                onClick={() => removeRate(index)}
                                                                className="text-red-600 hover:text-red-800 text-sm"
                                                            >
                                                                Remove
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={() => {
                                            setSelectedCompany(null);
                                            setEditData(null);
                                        }}
                                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSaveChanges}
                                        disabled={saving}
                                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                                    >
                                        {saving ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminFdRates;
