// This file can be saved as pages/index.jsx or app/page.jsx (for App Router)
'use client'
import React from 'react';

// --- 1. Example Data ---
const myTickets = [
    {
        id: "#nVq27RIh9",
        email: "user@appdevs.net",
        subject: "cxv",
        message: "xcvxcv",
        status: "Pending",
        lastReply: "2025-12-11 16:43 PM",
    },
    {
        id: "#xyzABC123",
        email: "another@user.com",
        subject: "Feature Request",
        message: "Need a new feature...",
        status: "Open",
        lastReply: "2025-12-10 10:00 AM",
    },
    {
        id: "#def456GHI",
        email: "client@example.com",
        subject: "Bug Report - Login",
        message: "Can't log in after update.",
        status: "Closed",
        lastReply: "2025-12-09 09:15 AM",
    },
];

// --- 2. Helper Function for Status Badges ---
const getStatusClasses = (status) => {
    switch (status) {
        case 'Pending':
            return 'bg-yellow-100 text-yellow-800';
        case 'Open':
            return 'bg-blue-100 text-blue-800';
        case 'Closed':
            return 'bg-green-100 text-green-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

// --- 3. The Main Component (Page Component) ---
export default function TicketDashboard() {
    
    // The data used by the table
    const tickets = myTickets; 

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <header className="mb-6">
                <h1 className="text-3xl font-extrabold text-gray-900">
                    Support Ticket Dashboard
                </h1>
                <p className="text-gray-500">
                    Overview of all active and resolved support requests.
                </p>
            </header>

            {/* Table Container */}
            <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    
                    {/* Table Header */}
                    <thead className="bg-gray-50">
                        <tr>
                            {['Ticket ID', 'Email', 'Subject', 'Status', 'Last Reply', 'Actions'].map((header) => (
                                <th
                                    key={header}
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tickets.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-gray-50">
                                
                                {/* Ticket ID */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                                    {ticket.id}
                                </td>

                                {/* Email */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <a href={`mailto:${ticket.email}`} className="text-blue-600 hover:text-blue-800">
                                        {ticket.email}
                                    </a>
                                </td>

                                {/* Subject */}
                                <td className="px-6 py-4 max-w-xs truncate text-sm text-gray-900">
                                    {ticket.subject}
                                </td>
                                
                                {/* Status (with a Badge) */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(ticket.status)}`}
                                    >
                                        {ticket.status}
                                    </span>
                                </td>

                                {/* Last Reply */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {ticket.lastReply}
                                </td>

                                {/* Actions (Comment Icon) */}
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => alert(`Viewing reply history for ${ticket.id}`)}
                                        className="text-gray-400 hover:text-blue-500 transition-colors duration-150"
                                        title="View Last Reply"
                                    >
                                        {/* Simple SVG icon for the comment/reply button */}
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.649A9.956 9.956 0 0112 2c4.97 0 9 3.582 9 8z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* End of Table Container */}
        </div>
    );
}