'use client';
import Link from 'next/link';

const AdminDashboard = () => {
    const adminModules = [
        {
            title: 'FD Rates Management',
            description: 'Manage fixed deposit rates for different companies',
            href: '/admin/fd-rates',
            icon: '📈',
            status: 'Active'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                <p className="text-gray-600">Manage your RupeeStop platform settings and content</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {adminModules.map((module, index) => (
                    <Link
                        key={index}
                        href={module.href}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="text-3xl">{module.icon}</div>
                            <span className={`px-2 py-1 text-xs rounded-full ${module.status === 'Active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                {module.status}
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                        <p className="text-gray-600 text-sm">{module.description}</p>
                    </Link>
                ))}
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <Link
                        href="/fixeddeposits"
                        className="flex items-center p-3 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                        <span className="mr-3">🔗</span>
                        View Live FD Rates Page
                    </Link>
                    <Link
                        href="/dashboard"
                        className="flex items-center p-3 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                        <span className="mr-3">📊</span>
                        User Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
