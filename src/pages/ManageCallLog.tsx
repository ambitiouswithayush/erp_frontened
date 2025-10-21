import { useState } from "react";
import { ChevronUp, Home, List, SquarePlus, Copy, FileText, Download, Search, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Filter, Menu, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ManageCallLog() {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedRows, setSelectedRows] = useState("15");
  const [schoolName, setSchoolName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [callDuration, setCallDuration] = useState("");
  const [callDate, setCallDate] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [callType, setCallType] = useState("");
  const [note, setNote] = useState("");

  // Sample data for the table
  const callLogs = [
    // Empty for now, will show "No data available"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { schoolName, name, phone, callDuration, callDate, followUp, callType, note });
    // Reset form
    setSchoolName("");
    setName("");
    setPhone("");
    setCallDuration("");
    setCallDate("");
    setFollowUp("");
    setCallType("");
    setNote("");
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

          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Global Search" className="pl-10 bg-white text-black" />
          </div>

          <span className="text-white">|</span>

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

          <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6">Update</Button>
        </div>
      </div>

      {/* Main Content Card */}
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Manage Call Log
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <a href="#" className="hover:underline">Visitor Purpose</a>
                <span>|</span>
                <a href="#" className="hover:underline">Visitor Info</a>
                <span>|</span>
                <span className="font-semibold">Call Log</span>
                <span>|</span>
                <a href="#" className="hover:underline">Postal Dispatch</a>
                <span>|</span>
                <a href="#" className="hover:underline">Postal Receive</a>
              </div>
            </div>
          </div>

          {/* Tab Controls */}
          <div className="px-6 py-4 bg-white flex gap-2">
            <Button
              variant={activeTab === 'list' ? 'default' : 'outline'}
              className={`flex items-center gap-2 ${activeTab === 'list' ? 'bg-blue-600 text-white' : 'border-gray-300 text-black'}`}
              onClick={() => setActiveTab('list')}
            >
              <List className="h-4 w-4" />
              List
            </Button>
            <Button
              variant={activeTab === 'add' ? 'default' : 'outline'}
              className={`flex items-center gap-2 ${activeTab === 'add' ? 'bg-blue-600 text-white' : 'border-gray-300 text-black'}`}
              onClick={() => setActiveTab('add')}
            >
              <SquarePlus className="h-4 w-4" />
              Add
            </Button>
          </div>

          {/* List View */}
          {activeTab === 'list' && (
            <>
              {/* Table Controls */}
              <div className="px-6 py-4 bg-white flex items-center justify-between flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
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
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Search:</span>
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
              <div className="px-6 py-4 bg-white overflow-x-auto">
                <Table className="border-collapse min-w-full">
                  <TableHeader>
                    <TableRow className="border-b bg-gray-50">
                      <TableHead className="w-12 border-r border-gray-200">#SL</TableHead>
                      <TableHead className="border-r border-gray-200">School <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Call Type <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Name <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Phone <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Call Duration <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Call Date <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {callLogs.length > 0 ? (
                      callLogs.map((log) => (
                        <TableRow key={log.sl} className="border-b">
                          <TableCell className="border-r border-gray-200">{log.sl}</TableCell>
                          <TableCell className="border-r border-gray-200">{log.school}</TableCell>
                          <TableCell className="border-r border-gray-200">{log.callType}</TableCell>
                          <TableCell className="border-r border-gray-200">{log.name}</TableCell>
                          <TableCell className="border-r border-gray-200">{log.phone}</TableCell>
                          <TableCell className="border-r border-gray-200">{log.callDuration}</TableCell>
                          <TableCell className="border-r border-gray-200">{log.callDate}</TableCell>
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
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-8 text-gray-500">
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
            </>
          )}

          {/* Add View */}
          {activeTab === 'add' && (
            <div className="px-6 py-4 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="schoolName" className="block text-sm font-medium mb-2 text-right">
                      School Name <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  <div>
                    <Select value={schoolName} onValueChange={setSchoolName}>
                      <SelectTrigger className="w-full">
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
                    <Label htmlFor="name" className="block text-sm font-medium mb-2 text-right">
                      Name <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  <div>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium mb-2 text-right">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  <div>
                    <Input
                      id="phone"
                      type="text"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="callDuration" className="block text-sm font-medium mb-2 text-right">
                      Call Duration <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  <div>
                    <Input
                      id="callDuration"
                      type="text"
                      placeholder="Call Duration"
                      value={callDuration}
                      onChange={(e) => setCallDuration(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="callDate" className="block text-sm font-medium mb-2 text-right">
                      Call Date <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  <div>
                    <Input
                      id="callDate"
                      type="text"
                      placeholder="Call Date"
                      value={callDate}
                      onChange={(e) => setCallDate(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="followUp" className="block text-sm font-medium mb-2 text-right">
                      Follow Up
                    </Label>
                  </div>
                  <div>
                    <Input
                      id="followUp"
                      type="text"
                      placeholder="Follow Up"
                      value={followUp}
                      onChange={(e) => setFollowUp(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium mb-2 text-right">
                      Call Type
                    </Label>
                  </div>
                  <div>
                    <RadioGroup value={callType} onValueChange={setCallType} className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="incoming" id="incoming" />
                        <Label htmlFor="incoming">Incoming</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="outgoing" id="outgoing" />
                        <Label htmlFor="outgoing">Outgoing</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="note" className="block text-sm font-medium mb-2 text-right">
                      Note
                    </Label>
                  </div>
                  <div>
                    <Textarea
                      id="note"
                      placeholder="Note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full"
                      rows={4}
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button type="button" variant="outline" onClick={() => setActiveTab('list')}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
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
