'use client'
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FiBell, FiGlobe, FiUser, FiMenu, FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import profile from '@assets/profile.png'
import sendMoney from "@assets/sendmoneyicon.png";
import receivemoney from "@assets/receivemoneyicon.png";
import requestMoney from "@assets/requestmoneyicon.png";
import kycverification from "@assets/kycverification.png";
import faverification from "@assets/2faverificaiton.png";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const profileRef = useRef(null); 

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const moneyTransfer = [
        { id: 1, title: "Send Money", icon: sendMoney },
        { id: 2, title: "Add Funds", icon: receivemoney },
        { id: 3, title: "Withdraw", icon: requestMoney },
    ];

    const ThemeToggleSwitch = () => (
        <div className="relative flex items-center bg-white rounded-full p-1 shadow-lg h-10 w-28">
            <div 
                className={`
                    absolute top-1 bottom-1 w-[50%] h-8 rounded-full 
                    transition-all duration-300 ease-in-out
                    ${darkMode 
                        ? 'translate-x-0 bg-secondery' 
                        : 'translate-x-[90%] bg-secondery'
                    }
                `}
            />
            <button 
                onClick={() => setDarkMode(true)} 
                className={`
                    relative w-[50%] cursor-pointer h-full flex items-center justify-center 
                    transition-colors duration-300
                    ${darkMode ? 'text-white' : 'text-gray-500 hover:text-gray-700'}
                `}
                aria-label="Activate Dark Mode"
            >
                <FiMoon size={20} className="z-10"/>
            </button>
            <button 
                onClick={() => setDarkMode(false)} 
                className={`
                    relative w-[50%] cursor-pointer h-full flex items-center justify-center 
                    transition-colors duration-300
                    ${!darkMode ? 'text-white' : 'text-gray-500 hover:text-gray-700'}
                `}
                aria-label="Activate Light Mode"
            >
                <FiSun size={20} className="z-10"/>
            </button>
        </div>
    );


    return (
        <nav className="w-full font-roboto mb-[42px] flex items-center justify-between relative">

            <div>
                <h2 className="font-bold leading-6 text-title font-montserrat text-xl sm:text-2xl">Welcome Back</h2>
                <h3 className="text-text text-base font-medium leading-4 font-roboto pt-2">Tomas William</h3>
            </div>

            <div className="hidden sm:flex items-center gap-4" ref={profileRef}> 

                <ThemeToggleSwitch />

    
                <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition relative">
                    <FiBell size={20}/>
                    <span className="absolute top-2 right-2 block w-2 h-2 bg-green-500 rounded-full"/> 
                </button>
                <button className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition"><FiGlobe size={20}/></button>

                <div className="relative">
                    <button onClick={() => setProfileOpen(!profileOpen)} className="p-1 rounded-full cursor-pointer hover:bg-gray-100">
                        <Image src={profile} alt="Profile" width={36} height={36} className="rounded-full"/>
                    </button>

                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 shadow-xl rounded-md p-4 z-50">
                            <div className="flex items-center gap-3 border-b border-gray-300 pb-3 mb-4">
                                <Image src={profile} alt="Profile" width={40} height={40} className="rounded-full"/>
                                <div><h3 className="font-semibold">Tomas William</h3><p className="text-sm text-gray-500">william@gmail.com</p></div>
                            </div>
                            <div className="border-b border-gray-300 pb-3 mb-4">
                                {moneyTransfer.map(item => (<div key={item.id} className="flex items-center gap-4 py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
                                    <Image src={item.icon} alt="" width={17} height={17}/><h3 className="text-sm font-semibold text-gray-700">{item.title}</h3>
                                </div>))}
                            </div>
                            <div className="border-b border-gray-300 pb-3 mb-4">
                                <div className="flex items-center gap-4 py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
                                    <Image src={kycverification} alt="" width={17} height={17}/><h3 className="text-sm font-semibold text-gray-700">KYC Verification</h3>
                                </div>
                                <div className="flex items-center gap-4 py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
                                    <Image src={faverification} alt="" width={17} height={17}/><h3 className="text-sm font-semibold text-gray-700">2FA Verification</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 py-2 px-2 hover:bg-red-50 text-red-600 rounded cursor-pointer">
                                <FiLogOut size={18} /><h3 className="text-sm font-semibold">Logout</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="sm:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded hover:bg-gray-100 transition">
                    {mobileMenuOpen ? <IoClose size={24}/> : <FiMenu size={24}/>}
                </button>
            </div>
            {mobileMenuOpen && (
                <div className="sm:hidden absolute top-full right-0 w-full bg-white border-t border-gray-200 shadow-md z-40" ref={profileRef}>
                    <ul className="flex flex-col p-4 gap-2">
                        <li className="flex justify-center py-2"><ThemeToggleSwitch /></li> 

                        <li><button className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 w-full"><FiBell/> Notifications</button></li>
                        <li><button className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 w-full"><FiGlobe/> Language</button></li>
                        <li className="relative">
                            <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 w-full"><FiUser/> Profile</button>
                            {profileOpen && (
                                <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-200 shadow-xl rounded-md p-4 z-50">
                                    <div className="flex items-center gap-3 border-b border-gray-300 pb-3 mb-4"><Image src={profile} alt="Profile" width={40} height={40} className="rounded-full"/><div><h3 className="font-semibold">Tomas William</h3><p className="text-sm text-gray-500">william@gmail.com</p></div></div>
                                    <div className="border-b border-gray-300 pb-3 mb-4">{moneyTransfer.map(item => (<div key={item.id} className="flex items-center gap-4 py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"><Image src={item.icon} alt="" width={17} height={17}/><h3 className="text-sm font-semibold text-gray-700">{item.title}</h3></div>))}</div>
                                    <div className="border-b border-gray-300 pb-3 mb-4">
                                        <div className="flex items-center gap-4 py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"><Image src={kycverification} alt="" width={17} height={17}/><h3 className="text-sm font-semibold text-gray-700">KYC Verification</h3></div>
                                        <div className="flex items-center gap-4 py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"><Image src={faverification} alt="" width={17} height={17}/><h3 className="text-sm font-semibold text-gray-700">2FA Verification</h3></div>
                                    </div>
                                    <div className="flex items-center gap-4 py-2 px-2 hover:bg-red-50 text-red-600 rounded cursor-pointer"><FiLogOut size={18}/><h3 className="text-sm font-semibold">Logout</h3></div>
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