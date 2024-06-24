import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import profile from "@/assets/images/profile.svg";
import MemoStar from "@/icons/Star";
import MemoStarLight from "@/icons/StarLight";
import GeneralDetails from "./GeneralDetails";
import Documents from "./Documents";
import BankDetails from "./BankDetails";
import Loans from "./Loans";
import Savings from "./Savings";
import AppAndSystem from "./AppAndSystem";



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
              <p>User’s Tier</p>
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
          <TabsList className="bg-white grid w-full grid-cols-6 ">
            <TabsTrigger value="general-details">General Details</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="bank-details">Bank Details</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
            <TabsTrigger value="app-and-system">App and System</TabsTrigger>
          </TabsList>
        </Tabs>
      </Card>
      <Tabs
        defaultValue="general-details"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full">
        <TabsContent value="general-details">
          <GeneralDetails />
        </TabsContent>
        <TabsContent value="documents">
          <Documents />
        </TabsContent>
        <TabsContent value="bank-details">
          <BankDetails />
        </TabsContent>
        <TabsContent value="loans">
          <Loans />
        </TabsContent>
        <TabsContent value="savings">
          <Savings />
        </TabsContent>
        <TabsContent value="app-and-system">
          <AppAndSystem />
        </TabsContent>
      </Tabs>
    </div>
  );
}
