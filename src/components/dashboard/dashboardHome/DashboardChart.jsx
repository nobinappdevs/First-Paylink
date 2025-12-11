"use client";

import React from "react";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CustomShapeBarChartFullWidth() {
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
      toolbar: { show: false },
      zoom: { enabled: false },
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
          legend: { position: "bottom" },
          stroke: { width: [1, 1, 2] },
        },
      },
    ],

    dataLabels: { enabled: false },

    stroke: {
      width: [1, 1, 4],
    },

    title: {
      text: "XYZ - Stock Analysis (2009 - 2016)",
      align: "left",
      offsetX: 10,
    },

    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },

    yaxis: [
      {
        seriesName: "Income",
        axisTicks: { show: true },
        axisBorder: { show: true, color: "#008FFB" },
        labels: { style: { colors: "#008FFB" } },
        title: {
          text: "Income",
          style: { color: "#008FFB" },
        },
      },
      {
        seriesName: "Cashflow",
        opposite: true,
        axisTicks: { show: true },
        axisBorder: { show: true, color: "#00E396" },
        labels: { style: { colors: "#00E396" } },
        title: {
          text: "Cashflow",
          style: { color: "#00E396" },
        },
      },
      {
        seriesName: "Revenue",
        opposite: true,
        axisTicks: { show: true },
        axisBorder: { show: true, color: "#FEB019" },
        labels: { style: { colors: "#FEB019" } },
        title: {
          text: "Revenue",
          style: { color: "#FEB019" },
        },
      },
    ],

    tooltip: {
      shared: true,
      intersect: false,
    },

    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  };

  return (
    <div
      className="bg-white my-6 pb-11 p-6 rounded-lg shadow-xl w-full"
      style={{ height: "auto" }}
    >
      <h2 className="text-xl font-bold font-['Montserrat'] text-slate-800 mb-4">
        Transaction Chart
      </h2>
      <div className="overflow-x-auto">

        <div className="min-w-[700px]">
          <ApexChart options={options} series={series} height={500} type="line" />
        </div>
      </div>
    </div>
  );
}