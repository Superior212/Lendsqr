import MemoActiveUser from "@/icons/ActiveUser";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import MemoUserIcon from "@/icons/UserIcon";
import MemoUserWithLoan from "@/icons/UserWithLoan";
import MemoUserWithSavings from "@/icons/UserWithSavings";

const UserCard = () => {
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
            <div className="text-2xl font-bold text-[#213F7D]">2,453</div>
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
            <div className="text-2xl font-bold text-[#213F7D]">2,453</div>
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
            <div className="text-2xl font-bold text-[#213F7D]">12,453</div>
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
            <div className="text-2xl font-bold text-[#213F7D]">102,453</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserCard;
