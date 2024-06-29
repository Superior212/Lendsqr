import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Savings() {
  return (
    <div className="grid gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-[#213F7D]">Savings Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="text-[#545F7D]">
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
  );
}
