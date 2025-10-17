import React from "react";
import { ChevronUp, Briefcase, Edit, List, FileText, Download, Copy, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ManageDepartment = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header Bar */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
        <ChevronUp className="h-5 w-5" />
        <h1 className="text-xl font-semibold">Manage Department</h1>
        <Briefcase className="h-5 w-5" />
      </div>

      {/* Sub-Header / Quick Links */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Quick Link:</span>
          <span className="text-blue-600">Department | Teacher | Class Lecture | Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
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
                Title <ChevronUp className="inline h-3 w-3 ml-1" />
              </TableHead>
              <TableHead className="font-bold text-gray-700">
                Sl.# <ChevronUp className="inline h-3 w-3 ml-1" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-gray-100">
              <TableCell className="text-gray-700">
                <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </TableCell>
              <TableCell className="text-gray-700"></TableCell>
              <TableCell className="text-gray-700">English</TableCell>
              <TableCell className="text-gray-700">1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-gray-600 text-sm">Showing 1 to 1 of 1 entries</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled className="text-gray-400 border-gray-300">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-blue-600 text-white border-blue-600">
            1
          </Button>
          <Button variant="outline" size="sm" disabled className="text-gray-400 border-gray-300">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageDepartment;
