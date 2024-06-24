import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import MemoFilterIcon from "@/icons/FilterIcon";
import MemoMoreIcon from "@/icons/MoreIcon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import MemoViewIcon from "@/icons/ViewIcon";
import MemoBlaclistIcon from "@/icons/BlaclistIcon";
import MemoActivateIcon from "@/icons/ActivateIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Datte } from "./Date";
import { users } from "@/lib/users";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type UserStatus = "Active" | "Pending" | "Blacklisted" | "Inactive";
interface PersonalInfo {
  full_name: string;
  phone_number: string;
  email_address: string;
  bvn: string;
  gender: string;
  marital_status: string;
  children: number;
  type_of_residence: string;
}
interface User {
  org: string;
  username: string;
  personal_info: PersonalInfo;
  status: UserStatus;
  date_joined: string;
}

const getBadgeClass = (status: UserStatus) => {
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
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const handleMoreIconClick = (user: User) => {
    setSelectedUser(user);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleUsersPerPageChange = (value: string) => {
    setUsersPerPage(Number(value));
    setCurrentPage(1);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

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
            ].map((header) => (
              <th
                key={header}
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  {header}
                  {header !== "Actions" && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <div>
                          <MemoFilterIcon className="cursor-pointer inline h-4 w-4 ml-1" />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="p-4 bg-white shadow-md rounded-md w-52">
                        <div className="flex flex-col space-y-2">
                          <div className="grid gap-3">
                            <Label className="text-[#545F7D]">
                              Organization
                            </Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="system">System</SelectItem>
                                <SelectItem value="user">User</SelectItem>
                                <SelectItem value="assistant">
                                  Assistant
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Input
                            type="text"
                            placeholder={`Filter by ${header}`}
                            className="w-full h-8"
                          />
                          <Label className="text-[#545F7D]">Username</Label>
                          <Input
                            type="text"
                            placeholder={`Filter by ${header}`}
                            className="w-full h-8"
                          />
                          <Label className="text-[#545F7D]">Email</Label>
                          <Input
                            type="text"
                            placeholder={`Filter by ${header}`}
                            className="w-full h-8"
                          />
                          <Label className="text-[#545F7D]">Date</Label>
                          <Datte />
                          <Label className="text-[#545F7D]">Phone Number</Label>
                          <Input
                            type="text"
                            placeholder={`Filter by ${header}`}
                            className="w-full h-8"
                          />
                          <div className="grid gap-3">
                            <Label className="text-[#545F7D]">Status</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="blacklisted">
                                  Blacklisted
                                </SelectItem>
                                <SelectItem value="inactive">
                                  Inactive
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center gap-4">
                            <Button className="w-full mt-2" variant="outline">
                              Reset
                            </Button>
                            <Button
                              className="w-full mt-2 bg-[#39CDCC] text-white"
                              variant="outline">
                              Filter
                            </Button>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentUsers.map((row: User, index: number) => (
            <tr key={index}>
              <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.org}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.username}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.personal_info.email_address}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.personal_info.phone_number}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.date_joined}
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
                            className="cursor-pointer flex items-center gap-2 text-sm font-thin text-[#545F7D]"
                            to={"#"}>
                            <MemoViewIcon className="h-5 w-5 text-gray-400" />
                            View Details
                          </Link>
                          <Link
                            className="cursor-pointer flex items-center gap-2 text-sm font-thin text-[#545F7D]"
                            to={"#"}>
                            <MemoBlaclistIcon className="h-5 w-5 text-gray-400" />
                            Blacklist User
                          </Link>
                          <Link
                            className="cursor-pointer flex items-center gap-2 text-sm font-thin text-[#545F7D]"
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
      <div className="items-center flex justify-between my-4">
        <div className="flex space-x-2 items-center mb-4">
          <div className="flex items-center space-x-2">
            <Label>Showing</Label>
            <Select onValueChange={handleUsersPerPageChange}>
              <SelectTrigger>
                <SelectValue placeholder={`${usersPerPage}`} />
              </SelectTrigger>
              <SelectContent>
                {[10, 20, 30, 40, 50].map((value) => (
                  <SelectItem key={value} value={String(value)}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p>out of {users.length}</p>
        </div>
        <div className="w-[20%] flex justify-end">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                    isActive={index + 1 === currentPage}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
