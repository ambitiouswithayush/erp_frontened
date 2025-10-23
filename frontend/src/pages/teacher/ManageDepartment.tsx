import React, { useState } from "react";
import { ChevronUp, Briefcase, Edit, Trash2, List, FileText, Download, Copy, Search, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Department {
  id: number;
  school: string;
  title: string;
  note: string;
}

const ManageDepartment = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [selectedRows, setSelectedRows] = useState("15");
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [departments, setDepartments] = useState<Department[]>([
    {
      id: 1,
      school: "School 1",
      title: "English",
      note: ""
    },
    {
      id: 2,
      school: "School 2",
      title: "Mathematics",
      note: "Department for math subjects"
    }
  ]);
  const [nextId, setNextId] = useState(3);

  return (
    <div className="w-full h-full bg-white">
      {/* Main Page Header */}
      <div className="flex items-center justify-between bg-white px-6 py-4 border-b-2 border-black">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          Manage Department
        </h1>
        <ChevronUp className="h-5 w-5 text-black" />
      </div>

      {/* Quick Links */}
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center">
          <span className="text-sm font-medium mr-4">Quick Link:</span>
          <div className="flex items-center space-x-2 text-blue-600">
            <a href="#" className="hover:underline font-bold text-black">Department</a>
            <span>|</span>
            <a href="#" className="hover:underline">Teacher</a>
            <span>|</span>
            <a href="#" className="hover:underline">Class Lecture</a>
            <span>|</span>
            <a href="#" className="hover:underline">Rating</a>
          </div>
        </div>
      </div>

      {/* Sub-Navigation and Controls */}
      <div className="px-6 py-4 bg-white flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className={`border-gray-300 text-black flex items-center gap-2 ${activeTab === 'list' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActiveTab('list')}
          >
            <List className="h-4 w-4" />
            List
          </Button>
          <Button
            variant="outline"
            className={`border-gray-300 text-black flex items-center gap-2 ${activeTab === 'add' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActiveTab('add')}
          >
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
        {activeTab === 'list' && (
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-40 bg-gray-100">
                <SelectValue placeholder="--Select School--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="school1">School 1</SelectItem>
                <SelectItem value="school2">School 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {activeTab === 'list' ? (
        <>
          {/* Action Buttons and Controls */}
          <div className="px-6 py-4 bg-white flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
                <Copy className="h-4 w-4" />
                Copy
              </Button>
              <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
                <FileText className="h-4 w-4" />
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

          {/* Separator Line */}
          <div className="px-6 py-2 bg-white">
            <hr className="border-gray-300 opacity-50" />
          </div>

          {/* Data Table */}
          <div className="px-6 py-4 bg-white">
            <Table className="border-collapse">
              <TableHeader>
                <TableRow className="border-b">
                  <TableHead className="w-12 border-r border-gray-200">#SL <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">School <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Title <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Note <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead>Action <ChevronUp className="inline h-4 w-4" /></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departments.length > 0 ? (
                  departments.map((department, index) => (
                    <TableRow key={department.id}>
                      <TableCell className="border-r border-gray-200">{index + 1}</TableCell>
                      <TableCell className="border-r border-gray-200">{department.school}</TableCell>
                      <TableCell className="border-r border-gray-200">{department.title}</TableCell>
                      <TableCell className="border-r border-gray-200">{department.note}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="text-blue-600">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600" onClick={() => setDepartments(departments.filter(d => d.id !== department.id))}>
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
          <div className="px-6 py-4 bg-white flex items-center justify-between border-t">
            <span className="text-sm text-gray-600">Showing {departments.length > 0 ? 1 : 0} to {departments.length} of {departments.length} entries</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Separator Line */}
          <div className="px-6 py-2 bg-white">
            <hr className="border-gray-300 opacity-50" />
          </div>

          {/* Add Form */}
          <div className="px-6 py-4 bg-white">
            <div className="flex justify-end mb-4">
              <Select value={school} onValueChange={setSchool}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="--Select School--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school1">School 1</SelectItem>
                  <SelectItem value="school2">School 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <form className="grid grid-cols-2 gap-4" onSubmit={(e) => {
              e.preventDefault();
              if (!school || !title) {
                alert("Please fill all required fields.");
                return;
              }
              // Handle form submission
              const newDepartment: Department = {
                id: nextId,
                school,
                title,
                note,
              };
              setDepartments([...departments, newDepartment]);
              setNextId(nextId + 1);
              // Reset form
              setSchool("");
              setTitle("");
              setNote("");
              setActiveTab('list');
            }}>
              <Label htmlFor="school" className="text-right self-center">School Name *:</Label>
              <Select value={school} onValueChange={setSchool}>
                <SelectTrigger>
                  <SelectValue placeholder="--Select School--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school1">School 1</SelectItem>
                  <SelectItem value="school2">School 2</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="title" className="text-right self-center">Title *:</Label>
              <Input
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Label htmlFor="note" className="text-right self-start pt-2">Note:</Label>
              <Textarea
                id="note"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="resize"
              />

              <div className="col-span-2 border-t pt-4 flex justify-end gap-2">
                <Button variant="outline" type="button">Cancel</Button>
                <Button type="submit" className="bg-black text-white">Submit</Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageDepartment;
