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
    <div className="grid sm:gap-6">
      <Card>
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <img src={profile} className="rounded-full" />
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-[500] dark:text-white text-[#213F7D]">
                Grace Effiom
              </h3>
              <p className="dark:text-white text-[#545F7D] text-[12px]">
                LSQFf587g90
              </p>
            </div>
            <div className="w-[2px] h-16 bg-gray-100" />
            <div className="flex items-center flex-col gap-2 dark:text-white text-[#545F7D]">
              <p>User’s Tier</p>
              <span className="flex items-center">
                <MemoStar />
                <MemoStarLight />
                <MemoStarLight />
              </span>
            </div>
            <div className="w-[2px] h-16 bg-gray-100" />
            <div className="flex flex-col dark:text-white text-[#213F7D] items-center gap-2">
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
          <TabsList className="bg-white grid px-6 sm:px-0 w-full  grid-cols-6 ">
            <TabsTrigger
              value="general-details"
              className="text-[10px] sm:text-sm dark:text-white text-[#000000CC] dark:bg-gray-400">
              General Details
            </TabsTrigger>
            <TabsTrigger
              className="text-[10px] sm:text-sm dark:text-white text-[#000000CC] dark:bg-gray-400"
              value="documents">
              Documents
            </TabsTrigger>
            <TabsTrigger
              className="text-[10px] sm:text-sm dark:text-white text-[#000000CC] dark:bg-gray-400"
              value="bank-details">
              Bank Details
            </TabsTrigger>
            <TabsTrigger
              className="text-[10px] sm:text-sm dark:text-white text-[#000000CC] dark:bg-gray-400"
              value="loans">
              Loans
            </TabsTrigger>
            <TabsTrigger
              className="text-[10px] sm:text-sm dark:text-white text-[#000000CC] dark:bg-gray-400"
              value="savings">
              Savings
            </TabsTrigger>
            <TabsTrigger
              className="text-[10px] sm:text-sm dark:text-white dark:bg-gray-400"
              value="app-and-system">
              App and System
            </TabsTrigger>
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
