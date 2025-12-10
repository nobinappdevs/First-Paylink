import DashboardHomeLeft from "./DashboardHomeLeft";
import DashboardHomeRight from "./DashboardHomeRight";
import Navbar from "./Navbar";

const DashboardHome = () => {

  return (
    <div className="lg:pr-6">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-5 2xl:gap-x-9">
        <div className="xl:col-span-3 col-span-5">
          <DashboardHomeLeft />
        </div>
        <div className="xl:col-span-2 col-span-5">
          <DashboardHomeRight />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
