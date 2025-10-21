<<<<<<< HEAD
import { useState } from "react";
import { ChevronUp, User, List, SquarePlus, Copy, FileText, Download, Search, Edit, Trash2, ChevronLeft, ChevronRight, Filter, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Designation {
  sl: number;
  school: string;
  designation: string;
  note: string;
}

export default function ManageDesignation() {
  const [activeTab, setActiveTab] = useState<'list' | 'add' | 'edit'>('list');
  const [selectedRows, setSelectedRows] = useState("15");
  const [schoolName, setSchoolName] = useState("");
  const [designation, setDesignation] = useState("");
  const [note, setNote] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // State for designations
  const [designations, setDesignations] = useState<Designation[]>([
    {
      sl: 1,
      school: "Future Ratan Pre School",
      designation: "Teacher",
      note: "Primary teacher"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId !== null) {
      // Update existing designation
      setDesignations(prev => prev.map(item =>
        item.sl === editingId
          ? { ...item, school: schoolName, designation, note }
          : item
      ));
    } else {
      // Add new designation
      const newDesignation: Designation = {
        sl: designations.length + 1,
        school: schoolName,
        designation,
        note
      };
      setDesignations(prev => [...prev, newDesignation]);
    }

    // Reset form
    setSchoolName("");
    setDesignation("");
    setNote("");
    setEditingId(null);
    setActiveTab('list');
  };

  const handleEdit = (item: Designation) => {
    setSchoolName(item.school);
    setDesignation(item.designation);
    setNote(item.note);
    setEditingId(item.sl);
    setActiveTab('add');
  };

  const handleDelete = (id: number) => {
    setDesignations(prev => prev.filter(item => item.sl !== id));
  };

  const handleCancel = () => {
    setSchoolName("");
    setDesignation("");
    setNote("");
    setEditingId(null);
    setActiveTab('list');
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
            <User className="h-5 w-5" />
            Manage Designation
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <span className="font-semibold">Manage Designation</span>
                <span>|</span>
                <a href="#" className="hover:underline">Manage Employee</a>
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
              {/* Table Controls Section */}
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
                  <Label className="text-sm">Search:</Label>
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
                      <TableHead className="border-r border-gray-200">School Name <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Designation <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Note <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {designations.length > 0 ? (
                      designations.map((item) => (
                        <TableRow key={item.sl} className="border-b">
                          <TableCell className="border-r border-gray-200">{item.sl}</TableCell>
                          <TableCell className="border-r border-gray-200">{item.school}</TableCell>
                          <TableCell className="border-r border-gray-200">{item.designation}</TableCell>
                          <TableCell className="border-r border-gray-200">{item.note}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                className="bg-blue-600 text-white hover:bg-blue-700"
                                onClick={() => handleEdit(item)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                className="bg-red-600 text-white hover:bg-red-700"
                                onClick={() => handleDelete(item.sl)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-gray-500">
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
                  Showing 1 to 1 of 1 entries
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="schoolName" className="block text-sm font-medium mb-2 text-right">
                      School Name <span className="text-red-500">*</span>
                    </Label>
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
                    <Label htmlFor="designation" className="block text-sm font-medium mb-2 text-right">
                      Designation <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="designation"
                      type="text"
                      placeholder="Designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <Label htmlFor="note" className="block text-sm font-medium mb-2 text-right">
                      Note
                    </Label>
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
                  <Button type="button" variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                    {editingId !== null ? 'Update' : 'Submit'}
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
=======
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
>>>>>>> origin/main
