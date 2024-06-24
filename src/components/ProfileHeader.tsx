import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function ProfileHeader() {
  return (
    <header className="  py-3 ">
      <Link
        to="#"
        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-thin text-[#545F7D]">
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to Users
      </Link>
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center space-x-4">
          <Link
            to="#"
            className="inline-flex items-center text-[#213F7D] text-base rounded-md  px-3 py-2  font-medium  transition-colors ">
            User Details
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="inline-flex items-center rounded-md bg-transparent border border-[#E4033B]  px-3 py-2 text-sm font-medium text-[#E4033B] transition-colors hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
            Blacklist User
          </Button>

          <Button className="inline-flex items-center rounded-md bg-transparent border border-[#39CDCC] px-3 py-2 text-sm font-medium text-[#39CDCC] transition-colors hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
            Activate User
          </Button>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
