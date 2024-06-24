import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function BankDetails() {
  return (
    <div className="grid gap-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="bank-name">Bank Name</Label>
          <Input id="bank-name" defaultValue="Chase Bank" disabled />
        </div>
        <div className="space-y-1">
          <Label htmlFor="account-number">Account Number</Label>
          <Input id="account-number" defaultValue="1234567890" disabled />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="routing-number">Routing Number</Label>
          <Input id="routing-number" defaultValue="123456789" disabled />
        </div>
        <div className="space-y-1">
          <Label htmlFor="account-type">Account Type</Label>
          <Input id="account-type" defaultValue="Checking" disabled />
        </div>
      </div>
    </div>
  );
}
