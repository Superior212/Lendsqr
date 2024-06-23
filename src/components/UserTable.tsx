import { Badge } from "@/components/ui/badge";
import MemoFilterIcon from "@/icons/FilterIcon";
import MemoMoreIcon from "@/icons/MoreIcon";
import { userList } from "@/lib/data";

const getBadgeClass = (status: string) => {
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
                <MemoMoreIcon className="cursor-pointer h-5 w-5 text-gray-400" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
