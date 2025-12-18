// "use client";
// import Button from "@/components/Sheared/Button";
// import { MessagesSquare, Plus } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// const myTickets = [
//   {
//     id: "#nVq27RIh9",
//     email: "user@appdevs.net",
//     subject: "General Inquiry about new license",
//     message: "xcvxcv",
//     status: "Pending",
//     lastReply: "2025-12-11 16:43 PM",
//   },
//   {
//     id: "#xyzABC123",
//     email: "another@user.com",
//     subject: "Feature Request for reporting tool",
//     message: "Need a new feature...",
//     status: "Open",
//     lastReply: "2025-12-10 10:00 AM",
//   },
//   {
//     id: "#def456GHI",
//     email: "client@example.com",
//     subject: "Bug Report - Login functionality failure",
//     message: "Can't log in after update.",
//     status: "Closed",
//     lastReply: "2025-12-09 09:15 AM",
//   },
//   {
//     id: "#ghjKLM789",
//     email: "premium@client.com",
//     subject: "Urgent issue with production server",
//     message: "Server down, please check immediately.",
//     status: "Open",
//     lastReply: "2025-12-11 18:30 PM",
//   },
//   {
//     id: "#opqRST012",
//     email: "test@qa.com",
//     subject: "Resolved ticket feedback",
//     message: "Thanks for the quick fix!",
//     status: "Closed",
//     lastReply: "2025-12-08 09:00 AM",
//   },
// ];

// const getStatusConfig = (status) => {
//   switch (status) {
//     case "Open":
//       return {
//         wrapper: "bg-blue-50 text-blue-700 border border-blue-100",
//         dot: "bg-blue-500",
//       };
//     case "Pending":
//       return {
//         wrapper: "bg-yellow-50 text-yellow-700 border border-yellow-100",
//         dot: "bg-yellow-500",
//       };
//     case "Closed":
//       return {
//         wrapper: "bg-emerald-50 text-emerald-700 border border-emerald-100",
//         dot: "bg-emerald-500",
//       };
//     default:
//       return {
//         wrapper: "bg-gray-50 text-gray-700 border border-gray-200",
//         dot: "bg-gray-400",
//       };
//   }
// };

// const getMetricData = (tickets) => {
//   const total = tickets.length;
//   const open = tickets.filter((t) => t.status === "Open").length;
//   const closed = tickets.filter((t) => t.status === "Closed").length;

//   return [
//     {
//       title: "Total Tickets",
//       value: total,
//       icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
//       color: "text-blue-600",
//       bg: "bg-blue-50",
//     },
//     {
//       title: "Open Tickets",
//       value: open,
//       icon: "M13 10V3L4 14h7v7l9-11h-7z",
//       color: "text-red-600",
//       bg: "bg-red-50",
//     }, // Open needs quick action
//     {
//       title: "Closed Tickets",
//       value: closed,
//       icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
//       color: "text-green-600",
//       bg: "bg-green-50",
//     },
//   ];
// };

// // --- 3. Metric Card Component ---
// const MetricCard = ({ title, value, icon, color, bg }) => (
//   <div className={`p-6 rounded-xl border border-gray-200 shadow-sm ${bg}`}>
//     <div className="flex items-center justify-between">
//       <div>
//         <p className="text-sm font-medium text-gray-500">{title}</p>
//         <p className="text-3xl font-extrabold text-gray-900 mt-1">{value}</p>
//       </div>
//       <div className={`p-3 rounded-full ${color} opacity-70`}>
//         <svg
//           className="w-8 h-8"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d={icon}
//           />
//         </svg>
//       </div>
//     </div>
//   </div>
// );

// // --- 4. The Main Component (Page Component) ---
// export default function TicketDashboard() {
//   // The data used by the table
//   const tickets = myTickets;
//   const metricCards = getMetricData(tickets);

//   return (
//     <div className="">
//       <header className="mb-8">
//         <h1 className="text-4xl font-extrabold font-montserrat text-secondery">
//           <span className="text-primary">Support</span> Dashboard
//         </h1>
//         <p className="text-text mt-1">
//           Real-time overview of all customer support requests and status.
//         </p>
//       </header>

//       {/* Metric Cards Section */}
//       <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {metricCards.map((metric, index) => (
//           <MetricCard key={index} {...metric} />
//         ))}
//       </section>

//       {/* Table Header and Action */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-text font-montserrat">
//           Recent Tickets ({tickets.length})
//         </h2>
//         <Link href={"/dashboard/helpCenter/create"}>
//           <Button  rightIcon={<Plus />}>
//             Create New Ticket
//           </Button>
//         </Link>
//       </div>

//       {/* Table Container */}
//       <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-100">
//             <tr>
//               {[
//                 "Ticket ID",
//                 "Email",
//                 "Subject",
//                 "Status",
//                 "Last Reply",
//                 "Actions",
//               ].map((header) => (
//                 <th
//                   key={header}
//                   scope="col"
//                   className={`px-6 py-4 text-xs font-bold uppercase tracking-wider
//           ${header === "Actions" ? "text-right" : "text-left"}
//           text-gray-600`}
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="bg-white divide-y divide-gray-100">
//             {tickets.map((ticket) => (
//               <tr
//                 key={ticket.id}
//                 className="hover:bg-blue-50/50 transition-colors text-text duration-150"
//               >
//                 <td className="px-6 py-4 whitespace-nowrap text-sm cursor-pointer">
//                   {ticket.id}
//                 </td>

//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                   <a
//                     href={`mailto:${ticket.email}`}
//                     className=" font-extrabold text-primary/80 hover:text-primary  "
//                   >
//                     {ticket.email}
//                   </a>
//                 </td>
//                 <td className="px-6 py-4 max-w-sm truncate text-sm font-medium text-gray-900">
//                   {ticket.subject}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {(() => {
//                     const status = getStatusConfig(ticket.status);
//                     return (
//                       <span
//                         className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.wrapper}`}
//                       >
//                         <span
//                           className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
//                         ></span>
//                         {ticket.status}
//                       </span>
//                     );
//                   })()}
//                 </td>

//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {ticket.lastReply}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                   <Link href={"/dashboard/helpCenter/conversation/20"}>
//                     <button
//                       className="text-text/80 cursor-pointer hover:text-blue-700 transition-colors duration-150 p-2 rounded-full bg-blue-100/70"
//                       title="View Details"
//                     >
//                       <MessagesSquare size={26} />
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* End of Table Container */}

//       <footer className="mt-8 text-center text-sm text-gray-500">
//         <p>Dashboard powered by AppDevs. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

"use client";

import Button from "@/components/ui/Button";
import { MessagesSquare, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

/* ------------------ MOCK DATA ------------------ */
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

/* ------------------ STATUS CONFIG ------------------ */
const getStatusConfig = (status) => {
  switch (status) {
    case "Open":
      return {
        wrapper: "bg-blue-50 text-blue-700 border border-blue-100",
        dot: "bg-blue-500",
      };
    case "Pending":
      return {
        wrapper: "bg-yellow-50 text-yellow-700 border border-yellow-100",
        dot: "bg-yellow-500",
      };
    case "Closed":
      return {
        wrapper: "bg-emerald-50 text-emerald-700 border border-emerald-100",
        dot: "bg-emerald-500",
      };
    default:
      return {
        wrapper: "bg-gray-50 text-gray-700 border border-gray-200",
        dot: "bg-gray-400",
      };
  }
};

/* ------------------ METRIC DATA ------------------ */
const getMetricData = (tickets) => {
  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "Open").length;
  const closed = tickets.filter((t) => t.status === "Closed").length;

  return [
    {
      title: "Total Tickets",
      value: total,
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Open Tickets",
      value: open,
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Closed Tickets",
      value: closed,
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];
};

/* ------------------ METRIC CARD ------------------ */
const MetricCard = ({ title, value, icon, color, bg }) => (
  <div
    className={`p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm ${bg}`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
          {value}
        </p>
      </div>
      <div className={`p-3 rounded-full ${color} opacity-70`}>
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={icon}
          />
        </svg>
      </div>
    </div>
  </div>
);

/* ------------------ MAIN COMPONENT ------------------ */
export default function TicketDashboard() {
  const tickets = myTickets;
  const metricCards = getMetricData(tickets);

  return (
    <div className="w-full">
      {/* ---------- Header ---------- */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-montserrat text-secondery/80">
          <span className="text-primary">Support</span> Dashboard
        </h1>
        <p className="text-sm sm:text-base text-text mt-1">
          Real-time overview of all customer support requests and status.
        </p>
      </header>

      {/* ---------- Metrics ---------- */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {metricCards.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </section>

      {/* ---------- Action Bar ---------- */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-text font-montserrat">
          Recent Tickets ({tickets.length})
        </h2>

        <Link
          href="/dashboard/helpCenter/create"
          className="self-start sm:self-auto"
        >
          <Button rightIcon={<Plus />}>Create New Ticket</Button>
        </Link>
      </div>

      {/* ---------- Table ---------- */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-600">
                Ticket ID
              </th>
              <th className="hidden md:table-cell px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-600">
                Email
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-600">
                Subject
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-600">
                Status
              </th>
              <th className="hidden lg:table-cell px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-600">
                Last Reply
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {tickets.map((ticket) => {
              const status = getStatusConfig(ticket.status);
              return (
                <tr
                  key={ticket.id}
                  className="hover:bg-blue-50/50 transition-colors duration-150"
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm font-medium">
                    {ticket.id}
                  </td>

                  <td className="hidden md:table-cell px-6 py-4 text-sm">
                    <a
                      href={`mailto:${ticket.email}`}
                      className="font-semibold text-primary hover:underline"
                    >
                      {ticket.email}
                    </a>
                  </td>

                  <td className="px-3 sm:px-6 py-3 sm:py-4 max-w-xs truncate text-sm font-medium text-gray-900">
                    {ticket.subject}
                  </td>

                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.wrapper}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                      />
                      {ticket.status}
                    </span>
                  </td>

                  <td className="hidden lg:table-cell px-6 py-4 text-sm text-gray-500">
                    {ticket.lastReply}
                  </td>

                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-right">
                    <Link href="/dashboard/helpCenter/conversation/20">
                      <button
                        className="p-2 rounded-full bg-primary/20 text-primary/80 cursor-pointer hover:bg-blue-200 transition"
                        title="View Details"
                      >
                        <MessagesSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ---------- Footer ---------- */}
      <footer className="mt-8 text-center text-xs sm:text-sm text-gray-500">
        Dashboard powered by AppDevs. All rights reserved.
      </footer>
    </div>
  );
}
