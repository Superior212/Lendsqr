import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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

export default function Documents() {
  return (
    <div className="grid gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-[#213F7D]">Uploaded Documents</CardTitle>
        </CardHeader>
        <CardContent className="text-[#545F7D]">
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
  );
}
