import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function AppAndSystem() {
  return (
    <div className="grid gap-4 p-4 text-[#545F7D]">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="last-login">Last Login</Label>
          <Input id="last-login" defaultValue="June 23, 2023" disabled />
        </div>
        <div className="space-y-1">
          <Label htmlFor="device">Device</Label>
          <Input id="device" defaultValue="iPhone 13 Pro" disabled />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="ip-address">IP Address</Label>
          <Input id="ip-address" defaultValue="192.168.1.100" disabled />
        </div>
        <div className="space-y-1">
          <Label htmlFor="location">Location</Label>
          <Input id="location" defaultValue="New York, NY" disabled />
        </div>
      </div>
    </div>
  );
}
