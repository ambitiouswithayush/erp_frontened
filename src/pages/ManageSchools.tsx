import { useState } from "react";
import { ChevronUp, Settings, List, Plus, SquarePlus, Copy, FileText, Download, Search, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function ManageSchools() {
  const [selectedRows, setSelectedRows] = useState("15");

  const schools = [
    {
      sl: 1,
      name: "शासकीय वसतिगृह",
      subscription: "-Select--",
      visitSchool: "शासकीय वसतिगृह",
      address: "10433 Wolverine Way Bellevue, CA 98004",
      phone: "0123456789",
      email: "info@gmsms.com",
      logo: "/placeholder.svg", // Placeholder for "THE FUTURE" logo
      status: "Active"
    },
    {
      sl: 2,
      name: "अनुसुचित जाती वसतिगृह",
      subscription: "-Select--",
      visitSchool: "अनुसुचित जाती वसतिगृह",
      address: "Station Road",
      phone: "6201879393",
      email: "vijf@gmail.com",
      logo: "",
      status: "Active"
    },
    {
      sl: 3,
      name: "व नवद्य मुक्तवी शासकिय",
      subscription: "-Select--",
      visitSchool: "अनुसुचित जाती व नवद्य मुकतवी शासकिय वसतिगृह",
      address: "ना. भागाट गा. रामागड",
      phone: "8149223616",
      email: "maheshgosavi3oct@gmail.com",
      logo: "",
      status: "Active"
    },
    {
      sl: 4,
      name: "Delhi International Public School",
      subscription: "Approved",
      visitSchool: "Delhi International Public School",
      address: "Sector-9, Rohini, Delhi-110085",
      phone: "011-41618613",
      email: "dips@rediffmail.com",
      logo: "",
      status: "Active"
    }
  ];

  return (
    <div className="w-full h-full bg-white">
      {/* Main Page Header */}
      <div className="flex items-center justify-between bg-white px-6 py-4 border-b-2 border-black">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          🏠 Manage School
        </h1>
        <ChevronUp className="h-5 w-5 text-black" />
      </div>

      {/* Quick Links */}
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center">
          <span className="text-sm font-medium mr-4">Quick Link:</span>
          <div className="flex items-center space-x-2 text-blue-600">
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
            <a href="#" className="hover:underline">Role Permission</a>
            <span>|</span>
            <a href="#" className="hover:underline">Super Admin</a>
            <span>|</span>
            <a href="#" className="hover:underline">Manage User</a>
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

      {/* Sub-Navigation and Action Buttons */}
      <div className="px-6 py-4 bg-white flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white border-gray-300 text-black flex items-center gap-2">
            <List className="h-4 w-4" />
            List
          </Button>
          <Button variant="outline" className="bg-white border-gray-300 text-black flex items-center gap-2">
            <SquarePlus className="h-4 w-4" />
            Add
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
            <Download className="h-4 w-4" />
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
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search..." className="pl-10 w-48" />
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="px-6 py-2 bg-white">
        <hr className="border-gray-300 opacity-50" />
      </div>

      {/* Data Table */}
      <div className="px-6 py-4 bg-white">
        <Table className="border-collapse">
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="w-12 border-r border-gray-200">#SL</TableHead>
              <TableHead className="border-r border-gray-200">School Name <ChevronUp className="inline h-4 w-4" /></TableHead>
              <TableHead className="border-r border-gray-200">Subscription <Filter className="inline h-4 w-4" /></TableHead>
              <TableHead className="border-r border-gray-200">Visit School <ChevronUp className="inline h-4 w-4" /></TableHead>
              <TableHead className="border-r border-gray-200">Address <ChevronUp className="inline h-4 w-4" /></TableHead>
              <TableHead className="border-r border-gray-200">Phone <ChevronUp className="inline h-4 w-4" /></TableHead>
              <TableHead className="border-r border-gray-200">Email <ChevronUp className="inline h-4 w-4" /></TableHead>
              <TableHead className="border-r border-gray-200">Admin Logo</TableHead>
              <TableHead className="border-r border-gray-200">Status <Filter className="inline h-4 w-4" /></TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schools.map((school) => (
              <TableRow key={school.sl} className="border-b">
                <TableCell className="border-r border-gray-200">{school.sl}</TableCell>
                <TableCell className="font-medium border-r border-gray-200">{school.name}</TableCell>
                <TableCell className="border-r border-gray-200">
                  <Select defaultValue={school.subscription}>
                    <SelectTrigger className="w-24 bg-gray-100">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-Select--">-Select--</SelectItem>
                      <SelectItem value="Approved">Approved</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="border-r border-gray-200">
                  <Input defaultValue={school.visitSchool} className="bg-gray-800 text-white w-48" />
                </TableCell>
                <TableCell className="border-r border-gray-200">{school.address}</TableCell>
                <TableCell className="border-r border-gray-200">{school.phone}</TableCell>
                <TableCell className="border-r border-gray-200">{school.email}</TableCell>
                <TableCell className="border-r border-gray-200">
                  {school.logo ? <img src={school.logo} alt="Logo" className="w-8 h-8" /> : ""}
                </TableCell>
                <TableCell className="border-r border-gray-200">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-blue-600">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-blue-600">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Table Footer / Pagination */}
      <div className="px-6 py-4 bg-white flex items-center justify-between border-t">
        <span className="text-sm text-gray-600">Showing 1 to 4 of 4 entries</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-white border-gray-300">1</Button>
          <Button variant="outline" size="sm" disabled>
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
