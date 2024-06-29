import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Loans() {
  return (
    <div className="grid gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-[#213F7D]">Active Loans</CardTitle>
        </CardHeader>
        <CardContent className="text-[#545F7D]">
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
  );
}
