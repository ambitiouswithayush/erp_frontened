import { useState } from "react";
import { ChevronUp, Copy, FileText, Download, Search, User, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ManageUser() {
  const [selectedRows, setSelectedRows] = useState("15");

  const users = []; // Empty array for initial state

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Global Filter Bar */}
      <div className="bg-white px-6 py-4 border-b flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select School" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school1">School 1</SelectItem>
              <SelectItem value="school2">School 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Session Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-2024">2023-2024</SelectItem>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Global Search..." className="pl-10 w-64" />
          </div>
          <Button className="bg-black text-white">Update</Button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-6 py-4 bg-gray-50">
        <div className="flex items-center flex-wrap">
          <span className="text-sm font-medium mr-4">Quick Link:</span>
          <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
            <a href="#" className="hover:underline">Dashboard</a>
            <span>|</span>
            <a href="#" className="hover:underline">General Setting</a>
            <span>|</span>
            <a href="#" className="hover:underline">Manage School</a>
            <span>|</span>
            <a href="#" className="hover:underline">Payment Setting</a>
            <span>|</span>
            <a href="#" className="hover:underline">SMS Setting</a>
            <span>|</span>
            <a href="#" className="hover:underline">Email Setting</a>
            <span>|</span>
            <a href="#" className="hover:underline">Academic Year</a>
            <span>|</span>
            <a href="#" className="hover:underline">User Role</a>
            <span>|</span>
            <a href="#" className="hover:underline">Permission</a>
            <span>|</span>
            <a href="#" className="hover:underline">Super Admin</a>
            <span>|</span>
            <a href="#" className="hover:underline font-semibold text-blue-800">Manage User</a>
            <span>|</span>
            <a href="#" className="hover:underline">Reset User Password</a>
            <span>|</span>
            <a href="#" className="hover:underline">Reset Username</a>
            <span>|</span>
            <a href="#" className="hover:underline">User Credential</a>
            <span>|</span>
            <a href="#" className="hover:underline">Activity Log</a>
            <span>|</span>
            <a href="#" className="hover:underline">Feedback</a>
            <span>|</span>
            <a href="#" className="hover:underline">Backup</a>
            <span>|</span>
            <a href="#" className="hover:underline">Opening Hour</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Manage User
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* User Filter Section */}
          <div className="px-6 py-4 bg-white border-b">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">School Name *</label>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="--Select School--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school1">School 1</SelectItem>
                    <SelectItem value="school2">School 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">User Type *</label>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="--Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="guardian">Guardian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">User</label>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="--Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user1">User 1</SelectItem>
                    <SelectItem value="user2">User 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-black text-white">Find</Button>
            </div>
          </div>

          {/* User List Section */}
          <div className="px-6 py-4 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-purple-800" />
              <h3 className="text-lg font-semibold">User</h3>
            </div>

            {/* Table Controls */}
            <div className="flex items-center justify-between flex-wrap mb-4">
              <div className="flex gap-2 mb-2 md:mb-0">
                <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
                  Excel
                </Button>
                <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
                  <FileText className="h-4 w-4" />
                  CSV
                </Button>
                <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
                  <Download className="h-4 w-4" />
                  PDF
                </Button>
                <Select value={selectedRows} onValueChange={setSelectedRows}>
                  <SelectTrigger className="w-32 bg-gray-100">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">Show 15 rows</SelectItem>
                    <SelectItem value="25">Show 25 rows</SelectItem>
                    <SelectItem value="50">Show 50 rows</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-10 w-48" />
              </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <Table className="border-collapse min-w-full">
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className="border-r border-gray-200">#SL <ChevronUp className="inline h-4 w-4" /></TableHead>
                    <TableHead className="border-r border-gray-200">Photo <ChevronUp className="inline h-4 w-4" /></TableHead>
                    <TableHead className="border-r border-gray-200">Name <ChevronUp className="inline h-4 w-4" /></TableHead>
                    <TableHead className="border-r border-gray-200">Phone <ChevronUp className="inline h-4 w-4" /></TableHead>
                    <TableHead className="border-r border-gray-200">Email <ChevronUp className="inline h-4 w-4" /></TableHead>
                    <TableHead className="border-r border-gray-200">Created <ChevronUp className="inline h-4 w-4" /></TableHead>
                    <TableHead>Status <ChevronUp className="inline h-4 w-4" /></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                        No data available in table
                      </TableCell>
                    </TableRow>
                  ) : (
                    users.map((user) => (
                      <TableRow key={user.sl} className="border-b">
                        <TableCell className="border-r border-gray-200">{user.sl}</TableCell>
                        <TableCell className="border-r border-gray-200">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-400" />
                          </div>
                        </TableCell>
                        <TableCell className="border-r border-gray-200">{user.name}</TableCell>
                        <TableCell className="border-r border-gray-200">{user.phone}</TableCell>
                        <TableCell className="border-r border-gray-200">{user.email}</TableCell>
                        <TableCell className="border-r border-gray-200">{user.created}</TableCell>
                        <TableCell>{user.status}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Table Footer */}
            <div className="flex items-center justify-between border-t pt-4 flex-wrap">
              <span className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-white border-gray-300">1</Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instructional Alert Box */}
      <div className="max-w-6xl mx-auto mb-8">
        <Alert className="bg-yellow-50 border-yellow-200">
          <Info className="h-4 w-4 text-yellow-600" />
          <AlertTitle className="text-yellow-800 font-bold">Instruction:</AlertTitle>
          <AlertDescription className="text-yellow-700">
            Please add Teacher, Employee, Student and Guardian before manage users.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
