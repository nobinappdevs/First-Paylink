'use client'
import Button from '@/components/Sheared/Button';
import { Plus } from 'lucide-react';
import React from 'react';


const myTickets = [
    {
        id: "#nVq27RIh9",
        email: "user@appdevs.net",
        subject: "General Inquiry about new license",
        message: "xcvxcv",
        status: "Pending",
        lastReply: "2025-12-11 16:43 PM",
    },
    {
        id: "#xyzABC123",
        email: "another@user.com",
        subject: "Feature Request for reporting tool",
        message: "Need a new feature...",
        status: "Open",
        lastReply: "2025-12-10 10:00 AM",
    },
    {
        id: "#def456GHI",
        email: "client@example.com",
        subject: "Bug Report - Login functionality failure",
        message: "Can't log in after update.",
        status: "Closed",
        lastReply: "2025-12-09 09:15 AM",
    },
    {
        id: "#ghjKLM789",
        email: "premium@client.com",
        subject: "Urgent issue with production server",
        message: "Server down, please check immediately.",
        status: "Open",
        lastReply: "2025-12-11 18:30 PM",
    },
    {
        id: "#opqRST012",
        email: "test@qa.com",
        subject: "Resolved ticket feedback",
        message: "Thanks for the quick fix!",
        status: "Closed",
        lastReply: "2025-12-08 09:00 AM",
    },
];

// --- 2. Helper Functions ---
const getStatusClasses = (status) => {
    switch (status) {
        case 'Pending':
            return 'bg-yellow-500 text-white font-bold';
        case 'Open':
            return 'bg-blue-600 text-white font-bold';
        case 'Closed':
            return 'bg-green-600 text-white font-bold';
        default:
            return 'bg-gray-400 text-white font-bold';
    }
};

const getMetricData = (tickets) => {
    const total = tickets.length;
    const open = tickets.filter(t => t.status === 'Open').length;
    const closed = tickets.filter(t => t.status === 'Closed').length;

    return [
        { title: "Total Tickets", value: total, icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Open Tickets", value: open, icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "text-red-600", bg: "bg-red-50" }, // Open needs quick action
        { title: "Closed Tickets", value: closed, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-green-600", bg: "bg-green-50" },
    ];
};

// --- 3. Metric Card Component ---
const MetricCard = ({ title, value, icon, color, bg }) => (
    <div className={`p-6 rounded-xl border border-gray-200 shadow-lg ${bg}`}>
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-3xl font-extrabold text-gray-900 mt-1">{value}</p>
            </div>
            <div className={`p-3 rounded-full ${color} opacity-70`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
                </svg>
            </div>
        </div>
    </div>
);


// --- 4. The Main Component (Page Component) ---
export default function TicketDashboard() {
    
    // The data used by the table
    const tickets = myTickets; 
    const metricCards = getMetricData(tickets);

    return (
        <div className="min-h-screen bg-gray-50 font-roboto p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold font-montserrat text-secondery">
                    <span className="text-primary_light">Support</span> Dashboard
                </h1>
                <p className="text-text mt-1">
                    Real-time overview of all customer support requests and status.
                </p>
            </header>

            {/* Metric Cards Section */}
            <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {metricCards.map((metric, index) => (
                    <MetricCard key={index} {...metric} />
                ))}
            </section>
            
            {/* Table Header and Action */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-text font-montserrat">
                    Recent Tickets ({tickets.length})
                </h2>
                <Button gradient rightIcon={<Plus />} size='lg'>
                      Create New Ticket
                </Button>
            </div>


            {/* Table Container */}
            <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    
                    <thead className="bg-gray-100">
                        <tr>
                            {['Ticket ID', 'Email', 'Subject', 'Status', 'Last Reply', 'Actions'].map((header) => (
                                <th
                                    key={header}
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-100">
                        {tickets.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                                
                                {/* Ticket ID */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-extrabold text-blue-600 hover:text-blue-800 cursor-pointer">
                                    {ticket.id}
                                </td>

                                {/* Email */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    <a href={`mailto:${ticket.email}`} className="text-gray-700 hover:text-blue-600">
                                        {ticket.email}
                                    </a>
                                </td>

                                {/* Subject */}
                                <td className="px-6 py-4 max-w-sm truncate text-sm font-medium text-gray-900">
                                    {ticket.subject}
                                </td>
                                
                                {/* Status (with a Badge) */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-3 py-1 inline-flex text-xs leading-5 rounded-full ${getStatusClasses(ticket.status)} shadow-sm`}
                                    >
                                        {ticket.status}
                                    </span>
                                </td>

                                {/* Last Reply */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {ticket.lastReply}
                                </td>

                                {/* Actions (View Button) */}
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => alert(`Opening ticket: ${ticket.id}`)}
                                        className="text-blue-500 hover:text-blue-700 transition-colors duration-150 p-2 rounded-full hover:bg-blue-100/70"
                                        title="View Details"
                                    >
                                        {/* Simple SVG icon for the eye/view button */}
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* End of Table Container */}

            <footer className="mt-8 text-center text-sm text-gray-500">
                <p>Dashboard powered by AppDevs. All rights reserved.</p>
            </footer>
        </div>
    );
}