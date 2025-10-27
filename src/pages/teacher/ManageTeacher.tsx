import React, { useState } from "react";
import { ChevronUp, ChevronDown, Users, List, Search, Edit, Eye, Trash2, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Teacher {
  sl: number;
  name: string;
  photo: string;
  designation: string;
  phone: string;
  email: string;
  joiningDate: string;
  isViewOnWeb: string;
  displayOrder: string;
  department: string;
  qualification: string;
  experience: string;
}

export default function ManageTeacher() {
  const [selectedRows, setSelectedRows] = useState("15");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // State for teachers (empty by default)
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (item: Teacher) => {
    // Placeholder for edit functionality
    console.log("Edit", item);
  };

  const handleDelete = (id: number) => {
    setTeachers(prev => prev.filter(item => item.sl !== id));
  };

  const exportData = (format: "copy" | "csv" | "excel" | "pdf") => {
    // Placeholder for export functionality
    console.log(`Exporting data as ${format}`);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Main Header Bar */}
      <div className="bg-purple-800 text-white p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <ArrowLeft className="h-6 w-6 cursor-pointer" />
          <h1 className="text-xl font-bold">Manage Teacher</h1>
          <Users className="h-6 w-6" />
        </div>
      </div>

      {/* Sub-Navigation & Controls */}
      <div className="bg-white p-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Quick Links */}
          <div className="flex items-center mb-4">
            <span className="text-sm font-medium mr-4">Quick Link:</span>
            <div className="flex items-center space-x-2 text-blue-600 text-sm">
              <a href="/teacher/department" className="hover:underline">Department</a>
              <span>|</span>
              <span className="font-semibold">Teacher</span>
              <span>|</span>
              <a href="/teacher/class-lecture" className="hover:underline">Class Lecture</a>
              <span>|</span>
              <a href="/teacher/rating" className="hover:underline">Rating</a>
            </div>
          </div>

          {/* Tab Controls */}
          <div className="flex gap-2">
            <Button
              variant='default'
              className="flex items-center gap-2 bg-blue-600 text-white"
            >
              <List className="h-4 w-4" />
              List
            </Button>
          </div>

          {/* List View */}
          <div className="mt-6">
              <div className="bg-white p-4 border-b">
                <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Select value={selectedRows} onValueChange={setSelectedRows}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">Show 15 rows</SelectItem>
                        <SelectItem value="25">Show 25 rows</SelectItem>
                        <SelectItem value="50">Show 50 rows</SelectItem>
                        <SelectItem value="100">Show 100 rows</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm" onClick={() => exportData("pdf")} className="border-gray-300">
                      PDF
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => exportData("csv")} className="border-gray-300">
                      CSV
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => exportData("excel")} className="border-gray-300">
                      Excel
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => exportData("copy")} className="border-gray-300">
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
              <div className="bg-white overflow-x-auto border rounded">
                <div className="max-w-7xl mx-auto">
                  <Table className="min-w-full">
                    <TableHeader>
                      <TableRow className="bg-gray-50 border-b">
                        <TableHead className="border-r px-4 py-3 text-left font-semibold">#SL</TableHead>
                        <TableHead className="border-r px-4 py-3 text-left font-semibold">Photo</TableHead>
                        <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("name")}>
                          Name {sortField === "name" && (sortDirection === "asc" ? <ChevronUp className="inline h-4 w-4" /> : <ChevronDown className="inline h-4 w-4" />)}
                        </TableHead>
                        <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("department")}>
                          Department {sortField === "department" && (sortDirection === "asc" ? <ChevronUp className="inline h-4 w-4" /> : <ChevronDown className="inline h-4 w-4" />)}
                        </TableHead>
                        <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("phone")}>
                          Phone {sortField === "phone" && (sortDirection === "asc" ? <ChevronUp className="inline h-4 w-4" /> : <ChevronDown className="inline h-4 w-4" />)}
                        </TableHead>
                        <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("email")}>
                          Email {sortField === "email" && (sortDirection === "asc" ? <ChevronUp className="inline h-4 w-4" /> : <ChevronDown className="inline h-4 w-4" />)}
                        </TableHead>
                        <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("joiningDate")}>
                          Joining Date {sortField === "joiningDate" && (sortDirection === "asc" ? <ChevronUp className="inline h-4 w-4" /> : <ChevronDown className="inline h-4 w-4" />)}
                        </TableHead>
                        <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("isViewOnWeb")}>
                          Is View on Web? {sortField === "isViewOnWeb" && (sortDirection === "asc" ? <ChevronUp className="inline h-4 w-4" /> : <ChevronDown className="inline h-4 w-4" />)}
                        </TableHead>
                        <TableHead className="border-r px-4 py-3 text-left font-semibold">Display Order</TableHead>
                        <TableHead className="px-4 py-3 text-left font-semibold">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTeachers.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={11} className="text-center py-8 text-gray-500">
                            No data available in table
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredTeachers.map((teacher) => (
                          <TableRow key={teacher.sl} className="border-b hover:bg-gray-50">
                            <TableCell className="border-r px-4 py-3">{teacher.sl}</TableCell>
                            <TableCell className="border-r px-4 py-3">
                              {teacher.photo ? (
                                <img src={teacher.photo} alt={teacher.name} className="w-10 h-10 rounded-full object-cover" />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                  <Users className="h-5 w-5 text-gray-600" />
                                </div>
                              )}
                            </TableCell>
                            <TableCell className="border-r px-4 py-3">{teacher.name}</TableCell>
                            <TableCell className="border-r px-4 py-3">{teacher.department}</TableCell>
                            <TableCell className="border-r px-4 py-3">{teacher.phone}</TableCell>
                            <TableCell className="border-r px-4 py-3">{teacher.email}</TableCell>
                            <TableCell className="border-r px-4 py-3">{teacher.joiningDate}</TableCell>
                            <TableCell className="border-r px-4 py-3">{teacher.isViewOnWeb}</TableCell>
                            <TableCell className="border-r px-4 py-3">{teacher.displayOrder}</TableCell>
                            <TableCell className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleEdit(teacher)}
                                  className="bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100"
                                >
                                  <Edit className="h-3 w-3 mr-1" />
                                  Edit
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="bg-green-50 border-green-200 text-green-600 hover:bg-green-100"
                                >
                                  <Eye className="h-3 w-3 mr-1" />
                                  View
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDelete(teacher.sl)}
                                  className="bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                                >
                                  <Trash2 className="h-3 w-3 mr-1" />
                                  Delete
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Table Footer */}
              <div className="bg-white p-4 border-t">
                <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
                  <span className="text-sm text-gray-600">
                    Showing {filteredTeachers.length > 0 ? ((currentPage - 1) * parseInt(selectedRows)) + 1 : 0} to {Math.min(currentPage * parseInt(selectedRows), filteredTeachers.length)} of {filteredTeachers.length} entries
                  </span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} className="border-gray-300">
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-300 bg-blue-50">{currentPage}</Button>
                    <Button variant="outline" size="sm" disabled={currentPage * parseInt(selectedRows) >= filteredTeachers.length} onClick={() => setCurrentPage(prev => prev + 1)} className="border-gray-300">
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
