"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@assets/logo.webp";

import {
  LayoutGrid,
  Wallet,
  Box,
  ArrowUpRight,
  Headset,
  ArrowRightLeft,
} from "lucide-react";
import { FiCreditCard, FiLogOut, FiSend } from "react-icons/fi";

const NavItem = ({ icon, title, link, active, onClick }) => {
  return (
    <Link
      href={link}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={`group flex mb-2 items-center gap-3 w-full transition-all duration-200 lg:py-1
        ${
          active
            ? "text-primary border-l-3 pl-[35px] -ml-[35px] lg:pl-12 lg:-ml-12 "
            : "pl-1"
        }
        ${!active && ""} `}
    >
      <span
        className={`text-lg transition-colors duration-200 
          ${active ? "text-primary" : "text-text/60 group-hover:text-primary"}`}
      >
        {icon}
      </span>
      <span
        className={`font-semibold text-sm transition-colors duration-200 lg:text-base ${
          active
            ? "text-primary"
            : " font-semibold text-sm text-secondery/80 group-hover:text-primary"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};

const Sidebar = ({ onLinkClick }) => {
  const pathname = usePathname();
  const moneyTransfer = [
    {
      id: 1,
      title: "Payments",
      icon: <FiSend size={20} />,
      link: "/dashboard/payments",
    },
    {
      id: 2,
      title: "Invoice",
      icon: <Wallet size={20} />,
      link: "/dashboard/invoice",
    },
    {
      id: 3,
      title: "Products",
      icon: <Box size={20} />,
      link: "/dashboard/products",
    },
    {
      id: 4,
      title: "Money Out",
      icon: <ArrowUpRight size={20} />,
      link: "/dashboard/withdraw",
    },
  ];

  const walletAction = [
    {
      id: 2,
      title: "Transactions",
      icon: <ArrowRightLeft size={20} />,
      link: "/dashboard/transactions",
    },
    {
      id: 5,
      title: "Help Center",
      icon: <Headset size={20} />,
      link: "/dashboard/helpCenter",
    },
  ];

  return (
    <aside
      className=" h-full flex flex-col pl-9 pt-5 lg:pt-6 lg:pl-12 overflow-y-auto  scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="navigation"
      aria-label="Sidebar Navigation"
    >
      <div className="pb-[18px] mb-6 cursor-pointer pl-9 -ml-9 lg:-ml-12 lg:pl-[54px] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.03)]">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="Site Logo"
            loading="eager"
            width={150}
            height={60}
            className="w-auto h-8 "
          />
        </Link>
      </div>

      <div className="mb-5">
        <NavItem
          onClick={onLinkClick}
          icon={<LayoutGrid size={22} />}
          title="Dashboard"
          link="/dashboard"
          active={pathname === "/dashboard"}
        />
      </div>

      <div className="">
        <h6 className="mb-4 pl-1lg:mb-5">Money Transfer</h6>
        <div className="flex flex-col gap-1.5 lg:gap-2">
          {moneyTransfer.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              active={pathname === item.link}
              onClick={onLinkClick}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 lg:mt-6">
        <h6 className="mb-4 pl-1lg:mb-5">Wallet Action</h6>
        <div className="flex flex-col gap-1.5 lg:gap-2">
          {walletAction.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              active={pathname === item.link}
              onClick={onLinkClick}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
