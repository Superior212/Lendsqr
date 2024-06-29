import UserCard from "@/components/UserCard";
import UserTable from "@/components/UserTable";

const User = () => {
  return (
    <div className="hsection">
      <h1 className="text-[#213F7D] font-[500]">Users</h1>
      <UserCard />
      <UserTable />
    </div>
  );
};

export default User;
