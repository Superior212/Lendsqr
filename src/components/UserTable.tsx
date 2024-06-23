import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import MemoFilterIcon from "@/icons/FilterIcon";
import MemoMoreIcon from "@/icons/MoreIcon";
import { userList } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import MemoViewIcon from "@/icons/ViewIcon";
import MemoBlaclistIcon from "@/icons/BlaclistIcon";
import MemoActivateIcon from "@/icons/ActivateIcon";

const getBadgeClass = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-[#39CD62]";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Blacklisted":
      return "bg-red-100 text-[#E4033B]";
    case "Inactive":
      return "bg-gray-100 text-[#545F7D]";
    default:
      return "bg-bg-gray-100 text-[#545F7D]";
  }
};

export default function UserTable() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleMoreIconClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Organization",
              "Username",
              "Email",
              "Phone Number",
              "Date Joined",
              "Status",
              "Actions",
            ].map((header) => (
              <th
                key={header}
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
                <MemoFilterIcon className="cursor-pointer inline h-4 w-4 ml-1" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userList.map((row, index) => (
            <tr key={index}>
              <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.org}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.username}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.email}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.phone}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.date}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm">
                <Badge
                  className={`hover:bg-transparent hover:text-inherit ${getBadgeClass(
                    row.status
                  )}`}>
                  {row.status}
                </Badge>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Popover>
                  <PopoverTrigger asChild>
                    <div>
                      <MemoMoreIcon
                        className="cursor-pointer h-5 w-5 text-gray-400"
                        onClick={() => handleMoreIconClick(row)}
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    {selectedUser && (
                      <div className="flex flex-col">
                        <div className="flex flex-col space-y-2">
                          <Link
                            className=" cursor-pointer flex items-center gap-2 text-sm font-thin text-[#545F7D]"
                            to={"#"}>
                            <MemoViewIcon className="h-5 w-5 text-gray-400" />
                            View Details
                          </Link>
                          <Link
                            className=" cursor-pointer flex items-center gap-2 text-sm font-thin text-[#545F7D]"
                            to={"#"}>
                            <MemoBlaclistIcon className="h-5 w-5 text-gray-400" />
                            Blacklist User
                          </Link>
                          <Link
                            className=" cursor-pointer flex items-center gap-2 text-sm font-thin text-[#545F7D]"
                            to={"#"}>
                            <MemoActivateIcon className="h-5 w-5 text-gray-400" />
                            Activate User
                          </Link>
                        </div>
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
