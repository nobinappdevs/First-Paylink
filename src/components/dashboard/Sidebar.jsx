"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@assets/logo.webp";

import {
  LayoutGrid,
  CreditCard,
  SendHorizonal,
  Wallet,
  ArrowDownToLine,
  Box,
} from "lucide-react";

const NavItem = ({ icon, title, link, active }) => {
  return (
    <Link
      href={link}
      aria-current={active ? "page" : undefined}
      className={`group flex mb-2 items-center gap-3 w-full transition-all duration-200 lg:py-1
        ${active ? "text-primary_light border-l-3 pl-[35px] -ml-[35px] lg:pl-10 lg:-ml-10 " : "pl-1"}
        ${!active && ""} `}
    >

      <span
        className={`text-lg transition-colors duration-200 
          ${active
            ? "text-primary_light"
            : "text-text/60 group-hover:text-primary_light"
          }`}
      >
        {icon}
      </span>
      <span
        className={`font-semibold text-sm transition-colors duration-200 lg:text-base ${ // *** এখানে lg:text-base যোগ করা হয়েছে ***
          active
            ? "text-primary_light"
            : "font-roboto font-semibold text-sm text-secondery/80 group-hover:text-primary_light"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const moneyTransfer = [
    {
      id: 1,
      title: "Payments",
      icon: <ArrowDownToLine size={20} />,
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
      icon: <Box size={20} />,
      link: "/dashboard/withdraw",
    },
  ];

  const walletAction = [
    {
      id: 2,
      title: "Transactions",
      icon: <SendHorizonal size={20} />,
      link: "/dashboard/transactions",
    },
    {
      id: 3,
      title: "Request Money",
      icon: <Wallet size={20} />,
      link: "/dashboard/requestMoney",
    },
    {
      id: 4,
      title: "Make Payment",
      icon: <ArrowDownToLine size={20} />,
      link: "/dashboard/makePayment",
    },
    {
      id: 5,
      title: "Help Center",
      icon: <CreditCard size={20} />,
      link: "/dashboard/helpCenter",
    },
  ];

  return (
    <aside
      className="font-roboto h-full overflow-y-auto flex flex-col pl-9 pt-5 lg:pt-8 lg:pl-12"
      role="navigation"
      aria-label="Sidebar Navigation"
    >
      <div className="mb-10 cursor-pointer">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="Site Logo"
            loading="eager"
            width={150}
            height={60}
            className="w-44 h-10" 
          />
        </Link>
      </div>

      <div className="mb-5">
        <NavItem
          icon={<LayoutGrid size={22} />}
          title="Dashboard"
          link="/dashboard"
          active={pathname === "/dashboard"}
        />
      </div>

      <div className="">
        <h3 className="font-semibold text-sm mb-4 pl-1 text-text/60 lg:text-base lg:mb-5"> 
          Money Transfer
        </h3>
        <div className="flex flex-col gap-1 lg:gap-2"> 
          {moneyTransfer.map((item) => (
            <NavItem key={item.id} {...item} active={pathname === item.link} />
          ))}
        </div>
      </div>

      <div className="mt-5 lg:mt-6">
        <h3 className="font-semibold text-sm mb-4 pl-1 text-text/60 lg:text-base lg:mb-5">
          Wallet Action
        </h3>
        <div className="flex flex-col gap-1 lg:gap-2">
          {walletAction.map((item) => (
            <NavItem key={item.id} {...item} active={pathname === item.link} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;