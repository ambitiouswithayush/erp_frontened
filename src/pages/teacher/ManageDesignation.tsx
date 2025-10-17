import React from "react";
import { ChevronUp, User, Link, List, Search, FileText, Download, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ManageDesignation = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header Bar */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
        <ChevronUp className="h-5 w-5" />
        <h1 className="text-xl font-semibold">Manage Designation</h1>
        <User className="h-5 w-5" />
      </div>

      {/* Sub-Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Manage Designation | Manage Employee</span>
          <Link className="h-4 w-4 text-blue-600" />
          <span className="text-blue-600 text-sm">:Quick Link</span>
        </div>
        <div className="flex items-center gap-2">
          <List className="h-4 w-4 text-gray-600" />
          <span className="text-gray-700">List</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
            Show 15 rows
          </Button>
          <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
            <FileText className="h-4 w-4 mr-1" />
            PDF
          </Button>
          <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
            <Download className="h-4 w-4 mr-1" />
            CSV
          </Button>
          <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700">:Search</span>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              className="pl-10 w-64 border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="px-6 py-4">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200">
              <TableHead className="font-bold text-gray-700">
                Action <ChevronUp className="inline h-3 w-3 ml-1" />
              </TableHead>
              <TableHead className="font-bold text-gray-700">
                Note <ChevronUp className="inline h-3 w-3 ml-1" />
              </TableHead>
              <TableHead className="font-bold text-gray-700">
                Designation <ChevronUp className="inline h-3 w-3 ml-1" />
              </TableHead>
              <TableHead className="font-bold text-gray-700">
                Sl.# <ChevronUp className="inline h-3 w-3 ml-1" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-gray-100">
              <TableCell colSpan={4} className="text-center text-gray-500 py-8">
                No data available in table
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-gray-600 text-sm">Showing 0 to 0 of 0 entries</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled className="text-gray-400 border-gray-300">
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled className="text-gray-400 border-gray-300">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageDesignation;
