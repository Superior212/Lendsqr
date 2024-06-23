import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { Dashboard, CUSTOMERS, BUSINESSES, SETTINGS } from "@/lib/data";
import { Bell, Menu } from "lucide-react";

type NavItem = {
  to: string;
  icon:
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | React.MemoExoticComponent<React.ComponentType<React.SVGProps<SVGSVGElement>>>
    | React.MemoExoticComponent<(props: React.SVGProps<SVGSVGElement>) => JSX.Element>;
  label: string;
};

const renderNavItems = (items: NavItem[]) => {
  return items.map(({ to, icon: Icon, label }) => (
    <Link
      key={label}
      to={to}
      className="flex items-center gap-3 rounded-lg px-3 py-4 text-white transition-all hover:text-primary">
      <Icon className="h-5 w-5" />
      {label}
      {label === "My Profile" && (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      )}
    </Link>
  ));
};

const DashHeader: React.FC = () => {
  return (
    <>
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[75px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col bg-Primary-full">
            <nav className="grid gap-2 text-lg font-medium">
              <div>
                <h2 className="text-white text-lg mb-2">Dashboard</h2>
                {renderNavItems(Dashboard)}
              </div>
              <div className="mt-6">
                <h2 className="text-white text-lg mb-2">Customers</h2>
                {renderNavItems(CUSTOMERS)}
              </div>
              <div className="mt-6">
                <h2 className="text-white text-lg mb-2">Businesses</h2>
                {renderNavItems(BUSINESSES)}
              </div>
              <div className="mt-6">
                <h2 className="text-white text-lg mb-2">Settings</h2>
                {renderNavItems(SETTINGS)}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1"></div>
        <div className="relative">
          <Bell className="h-8 w-8" />
          <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs">
            2
          </Badge>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="icon" className="rounded-full">
                <span className="sr-only">Toggle user menu</span>
              </Button>
              <div className="cursor-pointer md:block hidden">
                <h1 className="text-base font-bold">Tappi</h1>
                <p className="text-sm font-light">Program Co-ordinator</p>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="bg-Primary-50 gap-2 hidden md:flex text-Primary-full hover:bg-Primary-hover hover:text-white transition duration-500 ease-in-out">
          Connect Wallet
        </Button>

        <ModeToggle />
      </header>
    </>
  );
};

export default DashHeader;
