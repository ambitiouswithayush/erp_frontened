import React, { useState } from "react";
import { ChevronUp, ChevronDown, Search, Edit, Trash2, ChevronLeft, ChevronRight, Plus, Folder, List, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

interface Department {
  sl: number;
  school: string;
  title: string;
  note: string;
}

const ManageDepartment = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [selectedRows, setSelectedRows] = useState("15");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedSessionYear, setSelectedSessionYear] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");

  // Form state for Add Department
  const [formData, setFormData] = useState({
    school: "",
    title: "",
    note: "",
  });

  // Sample data
  const [departments, setDepartments] = useState<Department[]>([
    { sl: 1, school: "Delhi International Public School", title: "English", note: "Hello" },
    { sl: 2, school: "अनुसूचित जाति क्वालिस", title: "Ha", note: "" },
    { sl: 3, school: "शासकीय क्वालिस", title: "Tyff", note: "Tfr" },
    { sl: 4, school: "Delhi International Public School", title: "Pharmacy", note: "" },
    { sl: 5, school: "अनुसूचित जाति क्वालिस", title: "Science", note: "Hello" },
  ]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredDepartments = departments.filter(department =>
    department.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    department.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    department.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (item: Department) => {
    console.log("Edit", item);
  };

  const handleDelete = (id: number) => {
    setDepartments(prev => prev.filter(item => item.sl !== id));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDepartment: Department = {
      sl: departments.length + 1,
      school: formData.school,
      title: formData.title,
      note: formData.note,
    };
    setDepartments([...departments, newDepartment]);
    setFormData({
      school: "",
      title: "",
      note: "",
    });
    setActiveTab("list");
  };

  const handleCancel = () => {
    setFormData({
      school: "",
      title: "",
      note: "",
    });
  };

  const exportData = (format: "copy" | "csv" | "excel" | "pdf") => {
    console.log(`Exporting data as ${format}`);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Area */}
      <div className="bg-white p-4 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <Select value={selectedSchool} onValueChange={setSelectedSchool}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select School" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school1">Delhi International Public School</SelectItem>
                  <SelectItem value="school2">अनुसूचित जाति क्वालिस</SelectItem>
                  <SelectItem value="school3">शासकीय क्वालिस</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSessionYear} onValueChange={setSelectedSessionYear}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Session Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023-2024">2023-2024</SelectItem>
                  <SelectItem value="2024-2025">2024-2025</SelectItem>
                  <SelectItem value="2025-2026">2025-2026</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Global Search"
                  className="pl-10 w-64"
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                />
              </div>
              <Button className="bg-black text-white hover:bg-gray-800">
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="bg-white border-b p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Manage Department</h2>
            </div>
            <ChevronUp className="h-5 w-5 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white border-b p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-700">Quick Link:</span>
            <div className="flex items-center space-x-2 text-sm flex-wrap">
              <Link to="/superadmin/department" className="hover:underline text-blue-600 hover:text-blue-800 font-semibold">Department</Link>
              <span className="text-gray-400">|</span>
              <Link to="/superadmin/manage-teacher" className="hover:underline text-blue-600 hover:text-blue-800">Manage Teacher</Link>
              <span className="text-gray-400">|</span>
              <Link to="/teacher/class-lecture" className="hover:underline text-blue-600 hover:text-blue-800">Class Lecture</Link>
              <span className="text-gray-400">|</span>
              <Link to="/teacher/rating" className="hover:underline text-blue-600 hover:text-blue-800">Rating</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white p-4">
        <div className="max-w-7xl mx-auto">
          {/* Tab Controls */}
          <div className="flex gap-2 mb-6">
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
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>

          {/* List View */}
          {activeTab === 'list' && (
            <div>
              {/* Table Controls */}
              <div className="bg-white p-4 mb-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  {/* Left side controls */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Button variant="outline" size="sm" onClick={() => exportData("copy")} className="border-gray-300 bg-gray-50">
                      Copy
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => exportData("excel")} className="border-gray-300 bg-gray-50">
                      Excel
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => exportData("csv")} className="border-gray-300 bg-gray-50">
                      CSV
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => exportData("pdf")} className="border-gray-300 bg-gray-50">
                      PDF
                    </Button>
                    <Select value={selectedRows} onValueChange={setSelectedRows}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">Show 15 rows</SelectItem>
                        <SelectItem value="25">Show 25 rows</SelectItem>
                        <SelectItem value="50">Show 50 rows</SelectItem>
                        <SelectItem value="100">Show 100 rows</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Right side search */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Select School" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school1">Delhi International Public School</SelectItem>
                        <SelectItem value="school2">अनुसूचित जाति क्वालिस</SelectItem>
                        <SelectItem value="school3">शासकीय क्वालिस</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Search:</span>
                      <Input
                        placeholder=""
                        className="w-48 border-gray-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white overflow-x-auto border rounded">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b">
                      <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("sl")}>
                        #SL {sortField === "sl" && (sortDirection === "asc" ? "▲" : "▼")}
                      </TableHead>
                      <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("school")}>
                        School {sortField === "school" && (sortDirection === "asc" ? "▲" : "▼")}
                      </TableHead>
                      <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("title")}>
                        Title {sortField === "title" && (sortDirection === "asc" ? "▲" : "▼")}
                      </TableHead>
                      <TableHead className="border-r px-4 py-3 text-left font-semibold cursor-pointer" onClick={() => handleSort("note")}>
                        Note {sortField === "note" && (sortDirection === "asc" ? "▲" : "▼")}
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left font-semibold">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDepartments.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                          No data available in table
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredDepartments.slice((currentPage - 1) * parseInt(selectedRows), currentPage * parseInt(selectedRows)).map((department) => (
                        <TableRow key={department.sl} className="border-b hover:bg-gray-50">
                          <TableCell className="border-r px-4 py-3">{department.sl}</TableCell>
                          <TableCell className="border-r px-4 py-3">{department.school}</TableCell>
                          <TableCell className="border-r px-4 py-3">{department.title}</TableCell>
                          <TableCell className="border-r px-4 py-3">{department.note}</TableCell>
                          <TableCell className="px-4 py-3">
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEdit(department)}
                                className="bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100"
                              >
                                <Edit className="h-3 w-3 mr-1" />
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDelete(department.sl)}
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

              {/* Pagination */}
              <div className="bg-white p-4 mt-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="text-sm text-gray-600">
                    Showing {filteredDepartments.length > 0 ? ((currentPage - 1) * parseInt(selectedRows)) + 1 : 0} to {Math.min(currentPage * parseInt(selectedRows), filteredDepartments.length)} of {filteredDepartments.length} entries
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => prev - 1)}
                      className="border-gray-300"
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage * parseInt(selectedRows) >= filteredDepartments.length}
                      onClick={() => setCurrentPage(prev => prev + 1)}
                      className="border-gray-300"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add View */}
          {activeTab === 'add' && (
              <div className="bg-white p-8 border rounded max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Add New Department</h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* School Name */}
                  <div>
                    <Label htmlFor="school" className="text-sm font-medium text-gray-700">
                      School Name <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.school}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, school: value }))}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select school" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Delhi International Public School">Delhi International Public School</SelectItem>
                        <SelectItem value="अनुसूचित जाति क्वालिस">अनुसूचित जाति क्वालिस</SelectItem>
                        <SelectItem value="शासकीय क्वालिस">शासकीय क्वालिस</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Title */}
                  <div>
                    <Label htmlFor="title" className="text-sm font-medium text-gray-700">
                      Title <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="title"
                      className="mt-1"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Note */}
                  <div>
                    <Label htmlFor="note" className="text-sm font-medium text-gray-700">
                      Note
                    </Label>
                    <Textarea
                      id="note"
                      className="mt-1"
                      rows={4}
                      value={formData.note}
                      onChange={(e) => setFormData(prev => ({ ...prev, note: e.target.value }))}
                    />
                  </div>

                  {/* Form Buttons */}
                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCancel}
                      className="border-gray-300"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageDepartment;
