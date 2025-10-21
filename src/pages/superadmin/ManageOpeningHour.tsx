import React, { useState } from "react";
import { ChevronUp, Clock, List, SquarePlus, Search, FileText, Download, Copy, Edit, Eye, Trash2, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface OpeningHour {
  sl: number;
  school: string;
  status: string;
}

export default function ManageOpeningHour() {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedRows, setSelectedRows] = useState("15");
  const [searchTerm, setSearchTerm] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [saturday, setSaturday] = useState("");
  const [sunday, setSunday] = useState("");

  // State for opening hours (empty by default)
  const [openingHours, setOpeningHours] = useState<OpeningHour[]>([]);

  const filteredOpeningHours = openingHours.filter(hour =>
    hour.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hour.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    // Reset form
    setSchoolName("");
    setMonday("");
    setTuesday("");
    setWednesday("");
    setThursday("");
    setFriday("");
    setSaturday("");
    setSunday("");
  };

  const handleCancel = () => {
    setSchoolName("");
    setMonday("");
    setTuesday("");
    setWednesday("");
    setThursday("");
    setFriday("");
    setSaturday("");
    setSunday("");
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
              <Clock className="h-4 w-4" />
            </div>
            <span className="text-sm">Administrator</span>
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
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Manage Opening Hour
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
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
              <span className="font-semibold text-blue-600">Opening Hour</span>
            </div>
          </div>

          {/* Tab Controls */}
          <div className="px-6 py-4 bg-white flex gap-2">
            <Button
              variant={activeTab === 'list' ? 'default' : 'outline'}
              className={`flex items-center gap-2 px-4 py-2 ${activeTab === 'list' ? 'bg-blue-600 text-white' : 'border-gray-300 text-black'}`}
              onClick={() => setActiveTab('list')}
            >
              <List className="h-4 w-4" />
              List
            </Button>
            <Button
              variant={activeTab === 'add' ? 'default' : 'outline'}
              className={`flex items-center gap-2 px-4 py-2 ${activeTab === 'add' ? 'bg-blue-600 text-white' : 'border-gray-300 text-black'}`}
              onClick={() => setActiveTab('add')}
            >
              <SquarePlus className="h-4 w-4" />
              Add
            </Button>
          </div>

          {/* List View */}
          {activeTab === 'list' && (
            <>
              {/* Table Controls Section */}
              <div className="px-6 py-4 bg-white flex items-center justify-between flex-wrap">
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
                  <Label className="text-sm">Search:</Label>
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

              {/* Separator Line */}
              <div className="px-6 py-2 bg-white">
                <hr className="border-gray-300 opacity-50" />
              </div>

              {/* Data Table */}
              <div className="px-6 py-4 bg-white overflow-x-auto">
                <Table className="border-collapse min-w-full">
                  <TableHeader>
                    <TableRow className="border-b bg-gray-50">
                      <TableHead className="w-12 border-r border-gray-200">#SL</TableHead>
                      <TableHead className="border-r border-gray-200">School <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Status <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOpeningHours.length > 0 ? (
                      filteredOpeningHours.map((hour) => (
                        <TableRow key={hour.sl} className="border-b">
                          <TableCell className="border-r border-gray-200">{hour.sl}</TableCell>
                          <TableCell className="border-r border-gray-200">{hour.school}</TableCell>
                          <TableCell className="border-r border-gray-200">{hour.status}</TableCell>
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
                        <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                          No data available in table
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Table Footer / Pagination */}
              <div className="px-6 py-4 bg-white flex items-center justify-between border-t flex-wrap">
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
              <div className="px-6 py-2 bg-white">
                <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
              </div>
            </>
          )}

          {/* Add View */}
          {activeTab === 'add' && (
            <div className="px-6 py-4 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* School Name */}
                <div className="max-w-md">
                  <Label htmlFor="schoolName" className="block text-sm font-medium mb-2">
                    School Name <span className="text-red-500">*</span>
                  </Label>
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

                {/* Days of the Week */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                  <div className="text-right md:text-right">
                    <Label className="block text-sm font-medium mb-2">Monday</Label>
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="9:00 AM - 5:00 PM"
                      value={monday}
                      onChange={(e) => setMonday(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">-</span>
                  </div>

                  <div className="text-right md:text-right">
                    <Label className="block text-sm font-medium mb-2">Tuesday</Label>
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="9:00 AM - 5:00 PM"
                      value={tuesday}
                      onChange={(e) => setTuesday(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">-</span>
                  </div>

                  <div className="text-right md:text-right">
                    <Label className="block text-sm font-medium mb-2">Wednesday</Label>
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="9:00 AM - 5:00 PM"
                      value={wednesday}
                      onChange={(e) => setWednesday(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">-</span>
                  </div>

                  <div className="text-right md:text-right">
                    <Label className="block text-sm font-medium mb-2">Thursday</Label>
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="9:00 AM - 5:00 PM"
                      value={thursday}
                      onChange={(e) => setThursday(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">-</span>
                  </div>

                  <div className="text-right md:text-right">
                    <Label className="block text-sm font-medium mb-2">Friday</Label>
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="9:00 AM - 5:00 PM"
                      value={friday}
                      onChange={(e) => setFriday(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">-</span>
                  </div>

                  <div className="text-right md:text-right">
                    <Label className="block text-sm font-medium mb-2">Saturday</Label>
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="9:00 AM - 5:00 PM"
                      value={saturday}
                      onChange={(e) => setSaturday(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">-</span>
                  </div>

                  <div className="text-right md:text-right">
                    <Label className="block text-sm font-medium mb-2">Sunday</Label>
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Closed"
                      value={sunday}
                      onChange={(e) => setSunday(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">-</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  <Button type="button" variant="outline" className="px-6 py-2" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-black text-white hover:bg-gray-800 px-6 py-2">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
