import MemoActiveUser from "@/icons/ActiveUser";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import MemoUserIcon from "@/icons/UserIcon";
import MemoUserWithLoan from "@/icons/UserWithLoan";
import MemoUserWithSavings from "@/icons/UserWithSavings";
import { useEffect, useState } from "react";
import axios from "axios";

const UserCard = () => {
  let url = "http://localhost:3000/api/users/count";
  let activeUrl = "http://localhost:3000/api/active";
  let loanUrl = "http://localhost:3000/api/loans";
  let SavingsUrl = "http://localhost:3000/api/savings";
  const [users, setUser] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [loanUsers, setLoanUsers] = useState([]);
  const [savingsUsers, setSavingsUsers] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setUser(response.data.count);
    });
    axios.get(activeUrl).then((response) => {
      setActiveUsers(response.data.count);
    });
    axios.get(loanUrl).then((response) => {
      setLoanUsers(response.data.count);
    });
    axios.get(SavingsUrl).then((response) => {
      setSavingsUsers(response.data.count);
    });
  }, []);

  return (
    <div className="my-8">
      <div className="grid gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-col items-start justify-between space-y-0 pb-2">
            <MemoUserIcon className="h-8 w-8 text-muted-foreground mb-2" />
            <CardTitle className="text-base font-[500] my-2 text-[#545F7D]">
              Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#213F7D]">{users}</div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-col items-start justify-between space-y-0 pb-2">
            <MemoActiveUser className="h-8 w-8 text-muted-foreground mb-2" />
            <CardTitle className="text-base font-[500] my-2 text-[#545F7D]">
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#213F7D]">
              {activeUsers}
            </div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-col items-start justify-between space-y-0 pb-2">
            <MemoUserWithLoan className="h-8 w-8 text-muted-foreground mb-2" />
            <CardTitle className="text-base font-[500] my-2 text-[#545F7D]">
              Users with Loans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#213F7D]">{loanUsers}</div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-col items-start justify-between space-y-0 pb-2">
            <MemoUserWithSavings className="h-8 w-8 text-muted-foreground mb-2" />
            <CardTitle className="text-base font-[500] my-2 text-[#545F7D]">
              Users with Savings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#213F7D]">
              {savingsUsers}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserCard;
