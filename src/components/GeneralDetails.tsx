import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function GeneralDetails() {
  return (
    <div className="grid gap-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="John Doe" disabled />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="john.doe@example.com" disabled />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" defaultValue="+1 (555) 555-5555" disabled />
        </div>
        <div className="space-y-1">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            defaultValue="123 Main St, Anytown USA"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
