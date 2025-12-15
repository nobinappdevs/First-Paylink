"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import {
  FiBell,
  FiGlobe,
  FiLogOut,
  FiSend,
  FiPlusCircle,
  FiMinusCircle,
  FiCheckSquare,
  FiShield,
  FiChevronDown,
} from "react-icons/fi";
import profile from "@assets/profile.png";
import ThemeToggleSwitch from "./ThemeToggleSwitch";
import { AlignStartVertical } from "lucide-react";

const Navbar = ({ handleOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setNotificationOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const toggleDropdown = (setter, state) => {
    const allSetters = [setProfileOpen, setNotificationOpen, setSettingsOpen];

    allSetters.forEach((s) => {
      if (s !== setter) s(false);
    });
    setter(!state);
  };

  const moneyTransfer = [
    { id: 1, title: "Send Money", icon: FiSend },
    { id: 2, title: "Add Funds", icon: FiPlusCircle },
    { id: 3, title: "Withdraw", icon: FiMinusCircle },
  ];

  const notifications = [
    {
      id: 1,
      text: "Payment of $500 received.",
      time: "10 mins ago",
      type: "success",
    },
    {
      id: 2,
      text: "KYC verification pending.",
      time: "2 hours ago",
      type: "warning",
    },
    {
      id: 3,
      text: "Your transfer to John is complete.",
      time: "Yesterday",
      type: "info",
    },
  ];

  return (
    <nav className="sticky top-0 z-40">
      <div className="relative w-full pt-5 pb-4 px-4   bg-basic font-roboto flex items-center justify-between   shadow-sm">


      <div className="xl:block hidden">
        <h2 className="font-bold leading-6 text-title font-montserrat text-xl sm:text-2xl">
          Welcome Back
        </h2>
        <h3 className="text-text text-base font-medium leading-4 font-roboto pt-2">
          Tomas William
        </h3>
      </div>
      <div
        onClick={handleOpen}
        className="flex cursor-pointer xl:hidden items-center sm:gap-x-2 gap-x-1"
      >
        <AlignStartVertical className="size-6 text-text " />
        <h3 className="font-montserrat text-xl font-bold text-secondery/90 ">
          Dahsboard
        </h3>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:block">
          <ThemeToggleSwitch />
        </div>
        <button
          className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition hidden sm:block"
          aria-label="Change Language"
        >
          <FiGlobe size={20} />
        </button>
        <div className="relative sm:hidden" ref={settingsRef}>
          <button
            onClick={() => toggleDropdown(setSettingsOpen, settingsOpen)}
            className="flex items-center gap-1 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
            aria-label="Settings Dropdown (Theme)"
          >
            <FiChevronDown size={20} />
          </button>
          {settingsOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-xl rounded-md p-3 z-50">
              <div className="flex items-center justify-between">
                <ThemeToggleSwitch />
                <button
                  className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition "
                  aria-label="Change Language"
                >
                  <FiGlobe size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() =>
              toggleDropdown(setNotificationOpen, notificationOpen)
            }
            className="relative p-3 bg-white rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Notifications"
          >
            <FiBell size={20} />
            <span className="absolute top-2 right-2 block w-2 h-2 bg-green-500 rounded-full" />
          </button>
          {notificationOpen && (

            <div
              className={`absolute -right-10 mt-3 w-80 max-h-96 overflow-y-auto bg-white border border-gray-100 shadow-2xl rounded-xl p-4 z-50`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Notifications
                </h3>
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                  {notifications.length || 0}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-3">
                {notifications.length === 0 ? (
                  <p className="text-gray-500 text-sm text-center py-5">
                    No new notifications
                  </p>
                ) : (
                  notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="p-3 mb-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition border border-gray-200"
                    >
                      <p className="text-sm font-medium text-gray-900">
                        {notif.text}
                      </p>

                      <p
                        className={`inline-block mt-2 text-xs px-2 py-1 rounded-full
              ${
                notif.type === "success"
                  ? "bg-green-100 text-green-700"
                  : notif.type === "warning"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}
                      >
                        {notif.time}
                      </p>
                    </div>
                  ))
                )}
              </div>

              <div className="text-center pt-3">
                <button className="text-teal-600 cursor-pointer font-medium text-sm hover:text-teal-800 hover:underline">
                  See All
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => toggleDropdown(setProfileOpen, profileOpen)}
            className="p-1 rounded-full cursor-pointer shadow-sm "
            aria-label="User Profile"
          >
            <Image
              src={profile}
              alt="Profile"
              loading="eager"
              width={36}
              height={36}
              className="rounded-full"
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 shadow-xl rounded-md p-4 z-50">
              <div className="flex items-center gap-3 border-b border-gray-300 pb-3 mb-4">
                <Image
                  src={profile}
                  alt="Profile"
                  loading="eager"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Tomas William</h3>
                  <p className="text-sm text-gray-500">william@gmail.com</p>
                </div>
              </div>
              <div className="border-b border-gray-300 pb-3 mb-4">
                {moneyTransfer.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <item.icon size={17} className="text-gray-600" />
                    <h3 className="text-sm font-semibold text-gray-700">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
              <div className="border-b border-gray-300 pb-3 mb-4">
                <div className="flex items-center gap-4 py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
                  <FiCheckSquare size={17} className="text-gray-600" />
                  <h3 className="text-sm font-semibold text-gray-700">
                    KYC Verification
                  </h3>
                </div>
                <div className="flex items-center gap-4 py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
                  <FiShield size={17} className="text-gray-600" />
                  <h3 className="text-sm font-semibold text-gray-700">
                    2FA Verification
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4 py-2 px-2 hover:bg-red-50 text-red-600 rounded cursor-pointer">
                <FiLogOut size={18} />
                <h3 className="text-sm font-semibold">Logout</h3>
              </div>
            </div>
          )}
        </div>
      </div>
            </div>
    </nav>
  );
};

export default Navbar;
