import React, { useState } from "react";
import { ChevronUp, ChevronDown, Users, List, Search, FileText, Download, Copy, Edit, Eye, Trash2, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface Employee {
  sl: number;
  name: string;
  designation: string;
  phone: string;
  email: string;
  joiningDate: string;
  isViewOnWeb: string;
  displayOrder: string;
}

export default function ManageEmployee() {
  const [selectedRows, setSelectedRows] = useState("15");
  const [searchTerm, setSearchTerm] = useState("");

  // State for employees (empty by default)
  const [employees, setEmployees] = useState<Employee[]>([]);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (item: Employee) => {
    // Placeholder for edit functionality
    console.log("Edit", item);
  };

  const handleDelete = (id: number) => {
    setEmployees(prev => prev.filter(item => item.sl !== id));
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Main Header Bar */}
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <ArrowLeft className="h-6 w-6 cursor-pointer" />
          <h1 className="text-xl font-bold">Manage Employee</h1>
          <Users className="h-6 w-6" />
        </div>
      </div>

      {/* Sub-Navigation & List Controls */}
      <div className="bg-white p-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Quick Links */}
          <div className="flex items-center mb-4">
            <span className="text-sm font-medium mr-4">Quick Link:</span>
            <div className="flex items-center space-x-2 text-blue-600 text-sm">
              <a href="#" className="hover:underline">Manage Designation</a>
              <span>|</span>
              <span className="font-semibold">Manage Employee</span>
            </div>
          </div>

          {/* List Button */}
          <div className="flex justify-end">
            <Button className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700">
              <List className="h-4 w-4" />
              List
            </Button>
          </div>
        </div>
      </div>

      {/* Table Actions & Search Bar */}
      <div className="bg-white p-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="outline" size="sm" className="border-gray-300">
              Show 15 rows
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300">
              PDF
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300">
              CSV
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300">
              Copy
            </Button>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Search:</span>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-10 w-48 border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="border-b">
                <TableHead className="border-r px-4 py-2">#SL</TableHead>
                <TableHead className="border-r px-4 py-2">Action</TableHead>
                <TableHead className="border-r px-4 py-2">Display Order</TableHead>
                <TableHead className="border-r px-4 py-2">Is View on Web <ChevronUp className="inline h-4 w-4" /></TableHead>
                <TableHead className="border-r px-4 py-2">Joining Date <ChevronUp className="inline h-4 w-4" /></TableHead>
                <TableHead className="border-r px-4 py-2">Email <ChevronUp className="inline h-4 w-4" /></TableHead>
                <TableHead className="border-r px-4 py-2">Phone <ChevronUp className="inline h-4 w-4" /></TableHead>
                <TableHead className="border-r px-4 py-2">Designation <ChevronUp className="inline h-4 w-4" /></TableHead>
                <TableHead className="border-r px-4 py-2">Name <ChevronUp className="inline h-4 w-4" /></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                  No data available in table
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Table Footer */}
      <div className="bg-white p-4 border-t">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="text-sm text-gray-600">
            Showing 0 to 0 of 0 entries
          </span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled className="border-gray-300">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300">1</Button>
            <Button variant="outline" size="sm" disabled className="border-gray-300">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-white p-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Human Resource</h2>
          <p className="text-lg text-gray-600">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
