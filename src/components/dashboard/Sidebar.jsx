import Image from "next/image";
import logo from "@assets/logo.png";
import {
  FaPaperPlane,
  FaDownload,
  FaMoneyBillWave,
  FaCreditCard,
} from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { Grid2x2 } from "lucide-react";
const Sidebar = () => {
  const moneyTransfer = [
    { id: 1, title: "Send Money", icon: <FaPaperPlane /> },
    { id: 2, title: "Receive Money", icon: <FaDownload /> },
    { id: 3, title: "Request Money", icon: <RiMoneyDollarBoxLine /> },
    { id: 4, title: "Make Payment", icon: <FaMoneyBillWave /> },
  ];

  const walletAction = [
    { id: 1, title: "Send Money", icon: <FaPaperPlane /> },
    { id: 2, title: "Receive Money", icon: <FaDownload /> },
    { id: 3, title: "Request Money", icon: <RiMoneyDollarBoxLine /> },
    { id: 4, title: "Make Payment", icon: <FaMoneyBillWave /> },
    { id: 5, title: "Cards", icon: <FaCreditCard /> },
  ];

  const cards = [
    { id: 1, title: "My Cards", icon: <FaCreditCard /> },
    { id: 2, title: "Payment Cards", icon: <FaMoneyBillWave /> },
  ];

  return (
    <div className="bg-basic font-roboto h-full overflow-y-auto flex flex-col w-full px-8 pt-10">
      {/* Logo Section */}
      <div className="mb-10  cursor-pointer">
        <Image
          className="w-48 h-10"
          src={logo}
          alt="site Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Sidebar Content */}
      <div>
        {/* Dashboard */}
<div className="flex items-center gap-3 text-primary mb-5 cursor-pointer">
        <Grid2x2 size={22} />
        <span className="font-semibold">Dashboard</span>
      </div>

        {/* Money Transfer */}
        <div>
          <h3 className="font-semibold text-sm  pb-5 text-text/60">
            Money Transfer
          </h3>
          {moneyTransfer.map((item) => (
            <div key={item.id} className="flex pb-5 cursor-pointer items-center gap-x-3">
              <span className="text-lg text-text/80 ">{item.icon}</span>
              <h3 className="font-semibold text-sm text-secondery/60">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Wallet Action */}
        <div>
          <h3 className="font-semibold text-sm pt-5 pb-[26px] text-text/60">
            Wallet Action
          </h3>
          {walletAction.map((item) => (
            <div key={item.id} className="flex pb-5 cursor-pointer items-center gap-x-3">
              <span className="text-lg text-text/80 ">{item.icon}</span>
              <h3 className="font-semibold text-sm text-secondery/60">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div>
          <h3 className="font-semibold text-sm pt-5 pb-5 text-text/60">
            Cards
          </h3>
          {cards.map((item) => (
            <div key={item.id} className="flex cursor-pointer pb-5 items-center gap-x-3">
              <span className="text-lg text-text/80 ">{item.icon}</span>
              <h3 className="font-semibold text-sm text-secondery/60">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
