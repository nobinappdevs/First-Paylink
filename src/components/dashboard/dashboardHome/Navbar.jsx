"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import {
  FiBell,
  FiGlobe,
  FiUser,
  FiMenu,
  FiLogOut,
  FiSend,
  FiPlusCircle,
  FiMinusCircle,
  FiCheckSquare,
  FiShield,
} from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import profile from "@assets/profile.png";
import ThemeToggleSwitch from "./ThemeToggleSwitch";

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

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
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <nav className="w-full font-roboto mb-[42px] flex items-center justify-between relative">
      <div>
        <h2 className="font-bold leading-6 text-title font-montserrat text-xl sm:text-2xl">
          Welcome Back
        </h2>
        <h3 className="text-text text-base font-medium leading-4 font-roboto pt-2">
          Tomas William
        </h3>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <ThemeToggleSwitch />

        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => {
              setNotificationOpen(!notificationOpen);
              setProfileOpen(false);
            }}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition relative"
            aria-label="Notifications"
          >
            <FiBell size={20} />
            <span className="absolute top-2 right-2 block w-2 h-2 bg-green-500 rounded-full" />
          </button>
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white border border-gray-200 shadow-xl rounded-md p-4 z-50">
              <h3 className="text-lg font-bold mb-3 border-b pb-2 text-gray-800">
                Notifications
              </h3>
              {notifications.length === 0 ? (
                <p className="text-gray-500 text-sm">No new notifications.</p>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="py-3 px-2 border-b last:border-b-0 hover:bg-gray-50 rounded cursor-pointer transition"
                  >
                    <p className="text-sm font-medium text-gray-800">
                      {notif.text}
                    </p>
                    <p
                      className={`text-xs ${
                        notif.type === "success"
                          ? "text-green-600"
                          : notif.type === "warning"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      } mt-1`}
                    >
                      {notif.time}
                    </p>
                  </div>
                ))
              )}
              <div className="text-center pt-3">
                <button className="text-teal-600 text-sm hover:text-teal-800">
                  See All
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
          aria-label="Change Language"
        >
          <FiGlobe size={20} />
        </button>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationOpen(false);
            }}
            className="p-1 rounded-full cursor-pointer hover:bg-gray-100"
            aria-label="User Profile"
          >
            <Image
              src={profile}
              alt="Profile"
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

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden">
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setProfileOpen(false);
            setNotificationOpen(false);
          }}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          {mobileMenuOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full right-0 w-full bg-white border-t border-gray-200 shadow-md z-40">
          <ul className="flex flex-col p-4 gap-2">
            <li className="flex justify-center py-2">
              <ThemeToggleSwitch />
            </li>

            <li className="relative" ref={notificationRef}>
              <button
                onClick={() => {
                  setNotificationOpen(!notificationOpen);
                  setProfileOpen(false);
                }}
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 w-full"
              >
                <FiBell /> Notifications
              </button>
              {notificationOpen && (
                <div className="mt-2 w-full bg-gray-50 border border-gray-200 shadow-inner rounded-md p-3 max-h-60 overflow-y-auto">
                  <h4 className="text-md font-semibold mb-2 text-gray-800">
                    Alerts
                  </h4>

                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="text-sm py-1 border-b last:border-b-0"
                    >
                      <p className="font-medium text-gray-700">{notif.text}</p>
                    </div>
                  ))}
                  <div className="text-center pt-2">
                    <button className="text-teal-600 text-xs hover:text-teal-800">
                      View All
                    </button>
                  </div>
                </div>
              )}
            </li>

            <li>
              <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 w-full">
                <FiGlobe /> Language
              </button>
            </li>

            <li className="relative">
              <button
                onClick={() => {
                  setProfileOpen(!profileOpen);
                  setNotificationOpen(false);
                }}
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 w-full"
              >
                <FiUser /> Profile Settings
              </button>
              {profileOpen && (
                <div className="mt-2 w-full bg-gray-50 border border-gray-200 shadow-inner rounded-md p-3">
                  {moneyTransfer.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 py-1 px-2 text-sm hover:bg-gray-100 rounded cursor-pointer"
                    >
                      <item.icon /> {item.title}
                    </div>
                  ))}
                  <div className="border-t mt-2 pt-2">
                    <div className="flex items-center gap-3 py-1 px-2 text-sm hover:bg-gray-100 rounded cursor-pointer">
                      <FiCheckSquare /> KYC Verification
                    </div>
                    <div className="flex items-center gap-3 py-1 px-2 text-sm hover:bg-gray-100 rounded cursor-pointer">
                      <FiShield /> 2FA Verification
                    </div>
                    <div className="flex items-center gap-3 py-1 px-2 text-sm hover:bg-red-50 text-red-600 rounded cursor-pointer">
                      <FiLogOut /> Logout
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
