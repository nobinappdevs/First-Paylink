// "use client";

// import React from "react";
// import dynamic from "next/dynamic";

// const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// export default function CustomShapeBarChartFullWidth() {
//   const series = [
//     {
//       name: "Income",
//       type: "column",
//       data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
//     },
//     {
//       name: "Cashflow",
//       type: "column",
//       data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
//     },
//     {
//       name: "Revenue",
//       type: "line",
//       data: [20, 29, 37, 36, 44, 45, 50, 58],
//     },
//   ];

//   const options = {
//     chart: {
//       type: "line",
//       stacked: false,
//       toolbar: { show: false },
//       zoom: { enabled: false },
//     },

//     responsive: [
//       {
//         breakpoint: 1024,
//         options: {
//           chart: { height: 400 },
//           legend: { position: "bottom" },
//         },
//       },
//       {
//         breakpoint: 768,
//         options: {
//           chart: { height: 350 },
//           xaxis: { labels: { rotate: -45 } },
//         },
//       },
//       {
//         breakpoint: 480,
//         options: {
//           chart: { height: 300 },
//           legend: { position: "bottom" },
//           stroke: { width: [1, 1, 2] },
//         },
//       },
//     ],

//     dataLabels: { enabled: false },

//     stroke: {
//       width: [1, 1, 4],
//     },

//     title: {
//       text: "XYZ - Stock Analysis (2009 - 2016)",
//       align: "left",
//       offsetX: 10,
//     },

//     xaxis: {
//       categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
//     },

//     yaxis: [
//       {
//         seriesName: "Income",
//         axisTicks: { show: true },
//         axisBorder: { show: true, color: "#008FFB" },
//         labels: { style: { colors: "#008FFB" } },
//         title: {
//           text: "Income",
//           style: { color: "#008FFB" },
//         },
//       },
//       {
//         seriesName: "Cashflow",
//         opposite: true,
//         axisTicks: { show: true },
//         axisBorder: { show: true, color: "#00E396" },
//         labels: { style: { colors: "#00E396" } },
//         title: {
//           text: "Cashflow",
//           style: { color: "#00E396" },
//         },
//       },
//       {
//         seriesName: "Revenue",
//         opposite: true,
//         axisTicks: { show: true },
//         axisBorder: { show: true, color: "#FEB019" },
//         labels: { style: { colors: "#FEB019" } },
//         title: {
//           text: "Revenue",
//           style: { color: "#FEB019" },
//         },
//       },
//     ],

//     tooltip: {
//       shared: true,
//       intersect: false,
//     },

//     legend: {
//       position: "top",
//       horizontalAlign: "left",
//     },
//   };

//   return (
//     <div
//       className="bg-white my-6 pb-11 p-6 rounded-lg shadow-xl w-full"
//       style={{ height: "auto" }}
//     >
//       <h2 className="text-xl font-bold font-['Montserrat'] text-slate-800 mb-4">
//         Transaction Chart
//       </h2>
//       <div className="overflow-x-auto overflow-y-auto  scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">

//         <div className="min-w-[700px]">
//           <ApexChart options={options} series={series} height={500} type="line" />
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import dynamic from "next/dynamic";

// const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// export default function TransactionCharts() {
//   const [chartType, setChartType] = useState("overview");

//   /* ================= DATA ================= */
//   const seriesOverview = [
//     {
//       name: "Income",
//       type: "column",
//       data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
//     },
//     {
//       name: "Cashflow",
//       type: "column",
//       data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
//     },
//     {
//       name: "Revenue",
//       type: "line",
//       data: [20, 29, 37, 36, 44, 45, 50, 58],
//     },
//   ];

//   const seriesIncomeVsCashflow = [
//     {
//       name: "Income",
//       data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
//     },
//     {
//       name: "Cashflow",
//       data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
//     },
//   ];

//   const seriesRevenueTrend = [
//     {
//       name: "Revenue",
//       data: [20, 29, 37, 36, 44, 45, 50, 58],
//     },
//   ];

//   /* ================= OPTIONS ================= */
//   const baseOptions = {
//     chart: {
//       toolbar: { show: false },
//       zoom: { enabled: false },
//     },
//     dataLabels: { enabled: false },
//     xaxis: {
//       categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
//     },
//     legend: {
//       position: "top",
//       horizontalAlign: "left",
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         options: { chart: { height: 400 } },
//       },
//       {
//         breakpoint: 768,
//         options: {
//           chart: { height: 350 },
//           xaxis: { labels: { rotate: -45 } },
//         },
//       },
//       {
//         breakpoint: 480,
//         options: { chart: { height: 300 } },
//       },
//     ],
//   };

//   const chartConfig = {
//     overview: {
//       type: "line",
//       series: seriesOverview,
//       options: {
//         ...baseOptions,
//         stroke: { width: [1, 1, 4] },
//       },
//     },
//     incomeCashflow: {
//       type: "bar",
//       series: seriesIncomeVsCashflow,
//       options: {
//         ...baseOptions,
//         plotOptions: { bar: { borderRadius: 6, columnWidth: "45%" } },
//       },
//     },
//     revenue: {
//       type: "line",
//       series: seriesRevenueTrend,
//       options: {
//         ...baseOptions,
//         stroke: { width: 4, curve: "smooth" },
//       },
//     },
//   };

//   const activeChart = chartConfig[chartType];

//   return (
//     <div className="bg-white my-6 p-6 pb-10 rounded-xl shadow-xl w-full">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
//         <h2 className="text-lg sm:text-xl font-bold font-montserrat text-slate-800">
//           Transaction Analytics
//         </h2>

//         {/* Select */}
//         <select
//           value={chartType}
//           onChange={(e) => setChartType(e.target.value)}
//           className="w-full sm:w-56 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 outline-none focus:ring-2 focus:ring-primary"
//         >
//           <option value="overview">Overview (Income / Cashflow / Revenue)</option>
//           <option value="incomeCashflow">Income vs Cashflow</option>
//           <option value="revenue">Revenue Trend</option>
//         </select>
//       </div>

//       {/* Chart (X Scroll Safe) */}
//       <div className="overflow-x-auto overflow-y-hidden scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//         <div className="min-w-[700px]">
//           <ApexChart
//             options={activeChart.options}
//             series={activeChart.series}
//             type={activeChart.type}
//             height={500}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import React from "react";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function AdvancedMixedChart() {
  const series = [
    {
      name: "Income",
      type: "column",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: "Cashflow",
      type: "column",
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    },
    {
      name: "Revenue",
      type: "line",
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ];

  const options = {
    chart: {
      type: "line",
      stacked: false,
      height: 450,

      /** 🔥 ADVANCED FEATURES */
      zoom: {
        enabled: true,
        type: "x",
        autoScaleYaxis: true,
      },

      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
    },

    dataLabels: { enabled: false },

    stroke: {
      width: [1, 1, 4],
      curve: "smooth",
    },

    title: {
      text: "XYZ - Stock Analysis (2009 - 2016)",
      align: "left",
    },

    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      tickPlacement: "on",
    },

    yaxis: [
      {
        seriesName: "Income",
        axisTicks: { show: true },
        axisBorder: { show: true, color: "#008FFB" },
        labels: { style: { colors: "#008FFB" } },
        title: { text: "Income", style: { color: "#008FFB" } },
      },
      {
        seriesName: "Cashflow",
        opposite: true,
        axisTicks: { show: true },
        axisBorder: { show: true, color: "#00E396" },
        labels: { style: { colors: "#00E396" } },
        title: { text: "Cashflow", style: { color: "#00E396" } },
      },
      {
        seriesName: "Revenue",
        opposite: true,
        axisTicks: { show: true },
        axisBorder: { show: true, color: "#FEB019" },
        labels: { style: { colors: "#FEB019" } },
        title: { text: "Revenue", style: { color: "#FEB019" } },
      },
    ],

    tooltip: {
      shared: true,
      intersect: false,
      followCursor: true,
    },

    legend: {
      position: "top",
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: true, // legend click enable
      },
    },

    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: { height: 400 },
          legend: { position: "bottom" },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: { height: 350 },
          xaxis: { labels: { rotate: -45 } },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: { height: 300 },
          stroke: { width: [1, 1, 3] },
          toolbar: {
            tools: {
              download: false, // mobile clean UX
            },
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white my-6 p-6 rounded-xl shadow-sm w-full">
      <div className="overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="min-w-[700px]">
          <ApexChart
            options={options}
            series={series}
            type="line"
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
