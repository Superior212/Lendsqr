import MemoAuditLogs from "@/icons/AuditLogs";
import MemoDecisionModels from "@/icons/DecisionModels";
import MemoFeesandCharges from "@/icons/FeesandCharges";
import MemoFeesandPricing from "@/icons/FeesandPricing";
import MemoGuarantors from "@/icons/Guarantors";
import MemoHome from "@/icons/Home";
import MemoKarma from "@/icons/Karma";
import MemoLoanProducts from "@/icons/LoanProducts";
import MemoLoanRequests from "@/icons/LoanRequests";
import MemoLoans from "@/icons/Loans";
import MemoOrganization from "@/icons/Organization";
import MemoPreferences from "@/icons/Preferences";
import MemoReports from "@/icons/Reports";
import MemoSavings from "@/icons/Savings";
import MemoSavingsProducts from "@/icons/SavingsProducts";
import MemoServiceAccount from "@/icons/ServiceAccount";
import MemoServices from "@/icons/Services";
import MemoSettlements from "@/icons/Settlements";
import MemoTransactions from "@/icons/Transactions";
import MemoUser from "@/icons/User";
import MemoWhitelist from "@/icons/Whitelist";

export const Dashboard = [
  {
    to: "/user",
    icon: MemoHome,
    label: "Dashboard",
  },
];
export const CUSTOMERS = [
  {
    to: "/",
    icon: MemoUser,
    label: "Users",
  },
  {
    to: "Guarantors",
    icon: MemoGuarantors,
    label: "Guarantors",
  },
  {
    to: "Loans",
    icon: MemoLoans,
    label: "Loans",
  },
  {
    to: "Decision-Models",
    icon: MemoDecisionModels,
    label: "Decision Models",
  },
  {
    to: "Savings",
    icon: MemoSavings,
    label: "Savings",
  },
  {
    to: "Loan-Requests",
    icon: MemoLoanRequests,
    label: "Loan Requests",
  },
  {
    to: "Whitelist",
    icon: MemoWhitelist,
    label: "Whitelist",
  },
  {
    to: "Karma",
    icon: MemoKarma,
    label: "Karma",
  },
];
export const BUSINESSES = [
  {
    to: "Organization",
    icon: MemoOrganization,
    label: "Organization",
  },
  {
    to: "Loan-Products",
    icon: MemoLoanProducts,
    label: "Loan Products",
  },
  {
    to: "Savings-Products",
    icon: MemoSavingsProducts,
    label: "Savings Products",
  },
  {
    to: "Fees-and-Charges",
    icon: MemoFeesandCharges,
    label: "Fees and Charges",
  },
  {
    to: "Transactions",
    icon: MemoTransactions,
    label: "Transactions",
  },
  {
    to: "Services",
    icon: MemoServices,
    label: "Services",
  },
  {
    to: "Service-Account",
    icon: MemoServiceAccount,
    label: "Service Account",
  },
  {
    to: "Settlements",
    icon: MemoSettlements,
    label: "Settlements",
  },
  {
    to: "Reports",
    icon: MemoReports,
    label: "Reports",
  },
];

export const SETTINGS = [
  {
    to: "Preferences",
    icon: MemoPreferences,
    label: "Preferences",
  },
  {
    to: "Audit-Logs",
    icon: MemoAuditLogs,
    label: "Audit Logs",
  },
  {
    to: "Fees-and-Pricing",
    icon: MemoFeesandPricing,
    label: "Fees and Pricing",
  },
];
