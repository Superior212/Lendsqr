import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileIcon, FilesIcon } from "lucide-react";
import profile from "@/assets/images/profile.svg";
import MemoStar from "@/icons/Star";
import MemoStarLight from "@/icons/StarLight";

export default function ProfileCard() {
  const [activeTab, setActiveTab] = useState("general-details");
  return (
    <div className="grid gap-6">
      <Card>
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <img src={profile} className="rounded-full" />
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-[500] text-[#213F7D]">
                Grace Effiom
              </h3>
              <p className="text-[#545F7D] text-[12px]">LSQFf587g90</p>
            </div>
            <div className="w-[2px] h-16 bg-gray-100" />
            <div className="flex items-center flex-col gap-2 text-[#545F7D]">
              <p> User’s Tier</p>

              <span className="flex items-center">
                <MemoStar />
                <MemoStarLight />
                <MemoStarLight />
              </span>
            </div>

            <div className="w-[2px] h-16 bg-gray-100" />
            <div className="flex flex-col text-[#213F7D] items-center gap-2">
              <span>₦200,000.00</span>
              <span className="text-[12px]">9912345678/Providus Bank</span>
            </div>
          </div>
        </div>
        <Tabs
          defaultValue="general-details"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full">
          <TabsList className="grid w-full grid-cols-6 border-b">
            <TabsTrigger value="general-details">General Details</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="bank-details">Bank Details</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
            <TabsTrigger value="app-and-system">App & System</TabsTrigger>
          </TabsList>
        </Tabs>
      </Card>
      <Tabs
        defaultValue="general-details"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full">
        <TabsContent value="general-details">
          <div className="grid gap-4 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" disabled />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  defaultValue="john.doe@example.com"
                  disabled
                />
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
        </TabsContent>
        <TabsContent value="documents">
          <div className="grid gap-4 p-4">
            <Card>
              <CardHeader>
                <CardTitle>Uploaded Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document</TableHead>
                      <TableHead>Uploaded On</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FilesIcon className="w-4 h-4" />
                          <span>ID Proof</span>
                        </div>
                      </TableCell>
                      <TableCell>June 15, 2023</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileIcon className="w-4 h-4" />
                          <span>Address Proof</span>
                        </div>
                      </TableCell>
                      <TableCell>June 20, 2023</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="bank-details">
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
        </TabsContent>
        <TabsContent value="loans">
          <div className="grid gap-4 p-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Loan Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Interest Rate</TableHead>
                      <TableHead>Maturity Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Personal Loan</TableCell>
                      <TableCell>$10,000</TableCell>
                      <TableCell>7.5%</TableCell>
                      <TableCell>Dec 31, 2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Home Loan</TableCell>
                      <TableCell>$250,000</TableCell>
                      <TableCell>4.2%</TableCell>
                      <TableCell>Jun 15, 2035</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="savings">
          <div className="grid gap-4 p-4">
            <Card>
              <CardHeader>
                <CardTitle>Savings Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account Type</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Interest Rate</TableHead>
                      <TableHead>Opened On</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Savings Account</TableCell>
                      <TableCell>$25,000</TableCell>
                      <TableCell>2.5%</TableCell>
                      <TableCell>Jan 01, 2020</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>CD Account</TableCell>
                      <TableCell>$50,000</TableCell>
                      <TableCell>3.2%</TableCell>
                      <TableCell>Jun 30, 2021</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="app-and-system">
          <div className="grid gap-4 p-4">
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
