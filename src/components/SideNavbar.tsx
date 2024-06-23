import React from "react";
import { Link } from "react-router-dom";
import MemoLogo from "@/icons/Logo";
import { Dashboard, CUSTOMERS, BUSINESSES, SETTINGS } from "@/lib/data";
import SelectOrganization from "./SelectOrganization";

type NavItem = {
  to: string;
  icon: React.MemoExoticComponent<
    (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  >;
  label: string;
};

const renderNavItems = (items: NavItem[]) => {
  return items.map(({ to, icon: Icon, label }) => (
    <Link
      key={label}
      to={to}
      className="flex items-center gap-3 rounded-lg px-3 py-4 text-[#213F7D] dark:text-white transition-all hover:text-primary">
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  ));
};

const SideNavbar: React.FC = () => {
  return (
    <div className="work-sans hidden md:block w-[20%] h-screen overflow-y-auto ">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center my-5 px-6 lg:h-[60px] lg:px-10">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <MemoLogo className="w-28 h-28" />
          </Link>
        </div>
        <SelectOrganization />
            <div className="grid items-start px-2 my-4 text-sm font-medium lg:px-4">{renderNavItems(Dashboard)}</div>
        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-2 my-4 text-sm font-medium lg:px-4">
            <div className="mt-2">
              <h2 className="text-[#545F7D] dark:text-white px-3 text-sm mb-1">
                Customers
              </h2>
              {renderNavItems(CUSTOMERS)}
            </div>
            <div className="mt-2">
              <h2 className="text-[#545F7D] dark:text-white px-3 text-sm mb-1">
                Businesses
              </h2>
              {renderNavItems(BUSINESSES)}
            </div>
            <div className="mt-2">
              <h2 className="text-[#545F7D] dark:text-white px-3 text-sm mb-1">
                Settings
              </h2>
              {renderNavItems(SETTINGS)}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
