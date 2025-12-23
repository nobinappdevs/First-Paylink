// "use client";

// import React from "react";
// import dynamic from "next/dynamic";

// const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// export default function AdvancedMixedChart({dashboardData}) {
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
//       height: 450,

//       zoom: {
//         enabled: true,
//         type: "x",
//         autoScaleYaxis: true,
//       },

//       toolbar: {
//         show: true,
//         tools: {
//           download: true,
//           selection: true,
//           zoom: true,
//           zoomin: true,
//           zoomout: true,
//           pan: true,
//           reset: true,
//         },
//       },
//     },

//     dataLabels: { enabled: false },

//     stroke: {
//       width: [1, 1, 4],
//       curve: "smooth",
//     },

//     title: {
//       text: "XYZ - Stock Analysis (2009 - 2016)",
//       align: "left",
//     },

//     xaxis: {
//       categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
//       tickPlacement: "on",
//     },

//     yaxis: [
//       {
//         seriesName: "Income",
//         axisTicks: { show: true },
//         axisBorder: { show: true, color: "#5b39c9" },
//         labels: { style: { colors: "#5b39c9" } },
//         title: { text: "Income", style: { color: "#5b39c9" } },
//       },
//       {
//         seriesName: "Cashflow",
//         opposite: true,
//         axisTicks: { show: true },
//         axisBorder: { show: true, color: "#5b39c9" },
//         labels: { style: { colors: "#5b39c9" } },
//         title: { text: "Cashflow", style: { color: "#5b39c9" } },
//       },
//       {
//         seriesName: "Revenue",
//         opposite: true,
//         axisTicks: { show: true },
//         axisBorder: { show: true, color: "#0a2540" },
//         labels: { style: { colors: "#0a2540" } },
//         title: { text: "Revenue", style: { color: "#0a2540" } },
//       },
//     ],

//     tooltip: {
//       shared: true,
//       intersect: false,
//       followCursor: true,
//     },

//     legend: {
//       position: "top",
//       horizontalAlign: "left",
//       onItemClick: {
//         toggleDataSeries: true, 
//       },
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
//           stroke: { width: [1, 1, 3] },
//           toolbar: {
//             tools: {
//               download: false, 
//             },
//           },
//         },
//       },
//     ],
//   };

//   return (
//     <div className="bg-white my-6 p-6 rounded-xl w-full">
//       <div className="overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//         <div className="min-w-[700px]">
//           <ApexChart
//             options={options}
//             series={series}
//             type="line"
//             height={450}
//             className=""
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

export default function AdvancedMixedChart({ dashboardData }) {

  const parseAmount = (value) =>
    Number(value?.replace(/,/g, "")) || 0;

  // ⬇️ ONLY DATA UPDATED
  const series = [
    {
      name: "Income",
      type: "column",
      data: [parseAmount(dashboardData?.collection_payment)],
    },
    {
      name: "Cashflow",
      type: "column",
      data: [parseAmount(dashboardData?.collection_invoice)],
    },
    {
      name: "Revenue",
      type: "line",
      data: [parseAmount(dashboardData?.money_out)],
    },
  ];

  // ❌ options একদম আগের মতোই রাখা হয়েছে
  const options = {
    chart: {
      type: "line",
      stacked: false,
      height: 450,
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
        axisBorder: { show: true, color: "#5b39c9" },
        labels: { style: { colors: "#5b39c9" } },
        title: { text: "Income", style: { color: "#5b39c9" } },
      },
      {
        seriesName: "Cashflow",
        opposite: true,
        axisTicks: { show: true },
        axisBorder: { show: true, color: "#5b39c9" },
        labels: { style: { colors: "#5b39c9" } },
        title: { text: "Cashflow", style: { color: "#5b39c9" } },
      },
      {
        seriesName: "Revenue",
        opposite: true,
        axisTicks: { show: true },
        axisBorder: { show: true, color: "#0a2540" },
        labels: { style: { colors: "#0a2540" } },
        title: { text: "Revenue", style: { color: "#0a2540" } },
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
        toggleDataSeries: true,
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
              download: false,
            },
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white my-6 p-6 rounded-xl w-full">
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
