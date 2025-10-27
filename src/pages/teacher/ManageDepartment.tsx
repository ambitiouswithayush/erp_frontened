import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, Edit, Trash2, List, FileText, Download, Copy, Search, Plus, ChevronLeft, ChevronRight, HelpCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Department {
  id: number;
  title: string;
  note: string;
}

const ManageDepartment = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [selectedRows, setSelectedRows] = useState("15");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [departments, setDepartments] = useState<Department[]>([
    {
      id: 1,
      title: "English",
      note: ""
    }
  ]);
  const [nextId, setNextId] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert("Please fill all required fields.");
      return;
    }
    const newDepartment: Department = {
      id: nextId,
      title,
      note,
    };
    setDepartments([...departments, newDepartment]);
    setNextId(nextId + 1);
    setTitle("");
    setNote("");
    setActiveTab('list');
  };

  const handleCancel = () => {
    setTitle("");
    setNote("");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header with Global Search */}
      <div className="bg-white px-6 py-4 flex justify-between items-center border-b shadow-sm">
        <div></div>
        <div className="flex gap-3">
          <Input placeholder="Global Search" className="w-64 border-gray-300" />
          <span className="text-sm text-gray-700 self-center">Global Search</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-white px-6 py-4 border-b-4 border-black">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="h-5 w-5 text-black" />
            <h1 className="text-2xl font-bold text-black">Manage Department</h1>
          </div>
          <ChevronUp className="h-5 w-5 text-purple-600 cursor-pointer" />
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white px-6 py-3 border-b">
        <div className="flex items-center flex-wrap">
          <span className="text-sm font-semibold mr-4 text-gray-700">Quick Link:</span>
          <div className="flex items-center space-x-2 text-sm flex-wrap">
            <Link to="/teacher/department" className="hover:underline text-purple-600 hover:text-purple-800 font-semibold">Department</Link>
            <span className="text-gray-400">|</span>
            <Link to="/teacher/manage-teacher" className="hover:underline text-purple-600 hover:text-purple-800">Teacher</Link>
            <span className="text-gray-400">|</span>
            <Link to="/teacher/class-lecture" className="hover:underline text-purple-600 hover:text-purple-800">Class Lecture</Link>
            <span className="text-gray-400">|</span>
            <Link to="/teacher/rating" className="hover:underline text-purple-600 hover:text-purple-800">Rating</Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white px-6 py-3 border-b flex gap-2">
        <Button
          variant="outline"
          className={`border-gray-300 text-gray-700 flex items-center gap-2 ${activeTab === 'list' ? 'bg-purple-50 border-purple-600 text-purple-600' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          <List className="h-4 w-4" />
          List
        </Button>
        <Button
          variant="outline"
          className={`border-gray-300 text-gray-700 flex items-center gap-2 ${activeTab === 'add' ? 'bg-purple-50 border-purple-600 text-purple-600' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>

      {activeTab === 'list' ? (
        <>
          {/* Table Controls */}
          <div className="bg-white px-6 py-4 flex items-center justify-between border-b">
            <div className="flex gap-2 items-center">
              <Select value={selectedRows} onValueChange={setSelectedRows}>
                <SelectTrigger className="w-36 bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">Show 15 rows</SelectItem>
                  <SelectItem value="25">Show 25 rows</SelectItem>
                  <SelectItem value="50">Show 50 rows</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
                <Download className="h-4 w-4 mr-1" />
                PDF
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
                <FileText className="h-4 w-4 mr-1" />
                CSV
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
                <FileText className="h-4 w-4 mr-1" />
                Excel
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search" className="pl-10 w-48 border-gray-300" />
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white px-6 py-4">
            <Table className="border-collapse w-full">
              <TableHeader>
                <TableRow className="border-b border-gray-300">
                  <TableHead className="border-r border-gray-200 text-left">
                    #SL <ChevronUp className="inline h-4 w-4" />
                  </TableHead>
                  <TableHead className="border-r border-gray-200 text-left">
                    Title <ChevronUp className="inline h-4 w-4" />
                  </TableHead>
                  <TableHead className="border-r border-gray-200 text-left">
                    Note <ChevronUp className="inline h-4 w-4" />
                  </TableHead>
                  <TableHead className="text-left">
                    Action <ChevronUp className="inline h-4 w-4" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departments.length > 0 ? (
                  departments.map((department, index) => (
                    <TableRow key={department.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <TableCell className="border-r border-gray-200">{index + 1}</TableCell>
                      <TableCell className="border-r border-gray-200">{department.title}</TableCell>
                      <TableCell className="border-r border-gray-200">{department.note}</TableCell>
                      <TableCell>
                        <Button variant="link" size="sm" className="text-purple-600 hover:text-purple-800 p-0">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
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

          {/* Pagination */}
          <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <span className="text-sm text-gray-600">
              Showing {departments.length > 0 ? 1 : 0} to {departments.length} of {departments.length} entries
            </span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled className="border-gray-300">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled className="border-gray-300">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Add Form */}
          <div className="bg-white px-6 py-8">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-[150px_1fr] gap-4 items-center">
                <Label htmlFor="title" className="text-right font-semibold text-gray-700">
                  Title <span className="text-red-500">*</span>:
                </Label>
                <Input
                  id="title"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="border-gray-300"
                />

                <Label htmlFor="note" className="text-right font-semibold text-gray-700 self-start pt-2">
                  Note:
                </Label>
                <Textarea
                  id="note"
                  placeholder="Enter note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={6}
                  className="border-gray-300 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="px-6 border-gray-300 text-gray-700"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-6 bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageDepartment;
