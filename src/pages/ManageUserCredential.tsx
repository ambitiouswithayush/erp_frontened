import React, { useState } from "react";
import { ChevronUp, User, List, Menu, Search, FileText, Download, Copy, Edit, Eye, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface UserCredential {
  sl: number;
  school: string;
  photo: string;
  name: string;
  phone: string;
  email: string;
  username: string;
  password: string;
}

export default function ManageUserCredential() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRows, setSelectedRows] = useState("15");
  const [searchTerm, setSearchTerm] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [userType, setUserType] = useState("");
  const [user, setUser] = useState("");

  // State for user credential data (empty by default)
  const [userCredentials, setUserCredentials] = useState<UserCredential[]>([]);

  const filteredUserCredentials = userCredentials.filter(cred =>
    cred.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cred.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cred.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cred.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFind = () => {
    // Handle find logic here
    console.log("Find button clicked");
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Global Header - Top Bar */}
      <div className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Menu className="h-6 w-6 cursor-pointer" />
            <h1 className="text-xl font-bold uppercase">SCHOOL SYSTEM</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm">Future Ratan Pre School</span>
          </div>
        </div>
      </div>

      {/* Global Header - Filter Bar */}
      <div className="bg-gray-800 text-white p-4">
        <div className="flex flex-wrap items-center gap-4 max-w-7xl mx-auto">
          <Select>
            <SelectTrigger className="w-48 bg-white text-black">
              <SelectValue placeholder="--Select School--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="future-ratan">Future Ratan Pre School</SelectItem>
              <SelectItem value="delhi-international">Delhi International Public School</SelectItem>
              <SelectItem value="central-high">Central High School</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-48 bg-white text-black">
              <SelectValue placeholder="--Select School--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="future-ratan">Future Ratan Pre School</SelectItem>
              <SelectItem value="delhi-international">Delhi International Public School</SelectItem>
              <SelectItem value="central-high">Central High School</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-48 bg-white text-black">
              <SelectValue placeholder="--Session Year--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-2024">2023-2024</SelectItem>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Global Search" className="pl-10 bg-white text-black" />
          </div>

          <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6">Update</Button>
        </div>
      </div>

      {/* Main Content Card */}
      <Card className="max-w-7xl mx-auto my-8 shadow-lg bg-white">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="bg-purple-800 text-white flex items-center justify-between cursor-pointer">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Manage User Credential
              </CardTitle>
              <ChevronUp className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="p-0">
              {/* Quick Links */}
              <div className="px-6 py-4 bg-gray-50">
                <div className="flex items-center flex-wrap gap-2 text-sm">
                  <span className="font-medium mr-2">Quick Link:</span>
                  <a href="#" className="text-blue-600 hover:underline">General Setting</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Manage School</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Payment Setting</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">SMS Setting</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Email Setting</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Academic Year</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">User Role</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Role Permission</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Super Admin</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Manage User</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Reset User Password</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Reset Username</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">User Credential</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Activity Log</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Feedback</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Backup</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Opening Hour</a>
                </div>
              </div>

              {/* User Filter/Search Form */}
              <div className="px-6 py-4 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-purple-800" />
                  <h2 className="text-lg font-semibold text-purple-800">User</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div>
                    <label className="block text-sm font-medium mb-2">School Name *</label>
                    <Select value={schoolName} onValueChange={setSchoolName}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select School--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="future-ratan">Future Ratan Pre School</SelectItem>
                        <SelectItem value="delhi-international">Delhi International Public School</SelectItem>
                        <SelectItem value="central-high">Central High School</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">User Type *</label>
                    <Select value={userType} onValueChange={setUserType}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select User Type--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="employee">Employee</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">User</label>
                    <Select value={user} onValueChange={setUser}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select User--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user1">User 1</SelectItem>
                        <SelectItem value="user2">User 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleFind} className="bg-black text-white hover:bg-gray-800 px-6 py-2">
                      Find
                    </Button>
                  </div>
                </div>
              </div>

              {/* List Section */}
              <div className="px-6 py-4 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <List className="h-5 w-5 text-purple-800" />
                  <h2 className="text-lg font-semibold text-purple-800">List</h2>
                </div>

                {/* Table Controls Section */}
                <div className="flex items-center justify-between flex-wrap mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
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
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Search:</span>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search..."
                        className="pl-10 w-48"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                  <Table className="border-collapse min-w-full">
                    <TableHeader>
                      <TableRow className="border-b bg-gray-50">
                        <TableHead className="w-12 border-r border-gray-200">#SL</TableHead>
                        <TableHead className="border-r border-gray-200">School <ChevronUp className="inline h-4 w-4" /></TableHead>
                        <TableHead className="border-r border-gray-200">Photo <ChevronUp className="inline h-4 w-4" /></TableHead>
                        <TableHead className="border-r border-gray-200">Name <ChevronUp className="inline h-4 w-4" /></TableHead>
                        <TableHead className="border-r border-gray-200">Phone <ChevronUp className="inline h-4 w-4" /></TableHead>
                        <TableHead className="border-r border-gray-200">Email <ChevronUp className="inline h-4 w-4" /></TableHead>
                        <TableHead className="border-r border-gray-200">Username <ChevronUp className="inline h-4 w-4" /></TableHead>
                        <TableHead className="border-r border-gray-200">Password <ChevronUp className="inline h-4 w-4" /></TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUserCredentials.length > 0 ? (
                        filteredUserCredentials.map((cred) => (
                          <TableRow key={cred.sl} className="border-b">
                            <TableCell className="border-r border-gray-200">{cred.sl}</TableCell>
                            <TableCell className="border-r border-gray-200">{cred.school}</TableCell>
                            <TableCell className="border-r border-gray-200">
                              <img src={cred.photo} alt="Photo" className="w-8 h-8 rounded-full" />
                            </TableCell>
                            <TableCell className="border-r border-gray-200">{cred.name}</TableCell>
                            <TableCell className="border-r border-gray-200">{cred.phone}</TableCell>
                            <TableCell className="border-r border-gray-200">{cred.email}</TableCell>
                            <TableCell className="border-r border-gray-200">{cred.username}</TableCell>
                            <TableCell className="border-r border-gray-200">{cred.password}</TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 px-2 py-1">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button size="sm" className="bg-black text-white hover:bg-gray-800 px-2 py-1">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button size="sm" className="bg-red-600 text-white hover:bg-red-700 px-2 py-1">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                            No data available in table
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Table Footer / Pagination */}
                <div className="flex items-center justify-between border-t mt-4 pt-4 flex-wrap">
                  <span className="text-sm text-gray-600">
                    Showing 0 to 0 of 0 entries
                  </span>
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

                {/* Horizontal Scrollbar */}
                <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mt-4">
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
              </div>

              {/* Instruction Message */}
              <div className="px-6 py-4 bg-yellow-100 border-l-4 border-yellow-500 mx-6 mb-4">
                <p className="text-yellow-800 font-medium">
                  Instruction: Please add Teacher, Employee, Student and Guardian before manage users.
                </p>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}
