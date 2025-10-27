import React, { useState } from "react";
import { ChevronUp, ChevronDown, Users, List, Search, FileText, Download, Copy, Edit, Eye, Trash2, ChevronLeft, ChevronRight, ArrowLeft, Plus, Upload, X, Folder, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

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
  const [activeTab, setActiveTab] = useState("list");
  const [selectedRows, setSelectedRows] = useState("15");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedSessionYear, setSelectedSessionYear] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");

  // Form state for Add Teacher
  const [formData, setFormData] = useState({
    // Top filter
    schoolName: "",
    // Basic Information
    name: "",
    nationalId: "",
    department: "",
    phone: "",
    gender: "",
    bloodGroup: "",
    religion: "",
    birthDate: "",
    presentAddress: "",
    permanentAddress: "",
    // Academic Information
    email: "",
    username: "",
    password: "",
    salaryGrade: "",
    salaryType: "",
    role: "",
    joiningDate: "",
    // Other Information
    isViewOnWeb: "",
    facebookUrl: "",
    linkedinUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    youtubeUrl: "",
    pinterestUrl: "",
    otherInfo: "",
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // State for teachers with sample data
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      sl: 1,
      name: "John Doe",
      photo: "",
      designation: "Senior Teacher",
      phone: "+1 234-567-8900",
      email: "john.doe@school.com",
      joiningDate: "2020-01-15",
      isViewOnWeb: "Yes",
      displayOrder: "1",
      department: "Mathematics",
      qualification: "M.Sc Mathematics",
      experience: "5 years"
    },
    {
      sl: 2,
      name: "Jane Smith",
      photo: "",
      designation: "Teacher",
      phone: "+1 234-567-8901",
      email: "jane.smith@school.com",
      joiningDate: "2021-03-20",
      isViewOnWeb: "No",
      displayOrder: "2",
      department: "Science",
      qualification: "B.Sc Physics",
      experience: "3 years"
    },
    {
      sl: 3,
      name: "Robert Johnson",
      photo: "",
      designation: "Head Teacher",
      phone: "+1 234-567-8902",
      email: "robert.j@school.com",
      joiningDate: "2018-08-10",
      isViewOnWeb: "Yes",
      displayOrder: "3",
      department: "English",
      qualification: "M.A English",
      experience: "8 years"
    }
  ]);

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
    console.log("Edit", item);
  };

  const handleDelete = (id: number) => {
    setTeachers(prev => prev.filter(item => item.sl !== id));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, photoFile, resumeFile);
    // Reset form
    setFormData({
      schoolName: "",
      name: "",
      nationalId: "",
      department: "",
      phone: "",
      gender: "",
      bloodGroup: "",
      religion: "",
      birthDate: "",
      presentAddress: "",
      permanentAddress: "",
      email: "",
      username: "",
      password: "",
      salaryGrade: "",
      salaryType: "",
      role: "",
      joiningDate: "",
      isViewOnWeb: "",
      facebookUrl: "",
      linkedinUrl: "",
      twitterUrl: "",
      instagramUrl: "",
      youtubeUrl: "",
      pinterestUrl: "",
      otherInfo: "",
    });
    setPhotoFile(null);
    setResumeFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "photo" | "resume") => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === "photo") {
        setPhotoFile(file);
      } else {
        setResumeFile(file);
      }
    }
  };

  const removeFile = (type: "photo" | "resume") => {
    if (type === "photo") {
      setPhotoFile(null);
    } else {
      setResumeFile(null);
    }
  };

  const handleCancel = () => {
    setFormData({
      schoolName: "",
      name: "",
      nationalId: "",
      department: "",
      phone: "",
      gender: "",
      bloodGroup: "",
      religion: "",
      birthDate: "",
      presentAddress: "",
      permanentAddress: "",
      email: "",
      username: "",
      password: "",
      salaryGrade: "",
      salaryType: "",
      role: "",
      joiningDate: "",
      isViewOnWeb: "",
      facebookUrl: "",
      linkedinUrl: "",
      twitterUrl: "",
      instagramUrl: "",
      youtubeUrl: "",
      pinterestUrl: "",
      otherInfo: "",
    });
    setPhotoFile(null);
    setResumeFile(null);
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
                  <SelectItem value="school2">शासकीय क्वालिस</SelectItem>
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
              <GraduationCap className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Manage Teacher</h2>
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
              <Link to="/superadmin/department" className="hover:underline text-blue-600 hover:text-blue-800">Department</Link>
              <span className="text-gray-400">|</span>
              <Link to="/superadmin/manage-teacher" className="hover:underline text-blue-600 hover:text-blue-800 font-semibold">Teacher</Link>
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
                          <TableCell colSpan={10} className="text-center py-8 text-gray-500">
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
              <div className="bg-white p-4 mt-4">
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
          )}

          {/* Add View */}
          {activeTab === 'add' && (
            <div>
              {/* School Filter */}
              <div className="mb-6">
                <Label htmlFor="schoolFilter" className="text-sm font-medium text-gray-700">School Name</Label>
                <Select value={formData.schoolName} onValueChange={(value) => setFormData(prev => ({ ...prev, schoolName: value }))}>
                  <SelectTrigger className="mt-1 max-w-md">
                    <SelectValue placeholder="Select school" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school1">Delhi International Public School</SelectItem>
                    <SelectItem value="school2">शासकीय क्वालिस</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Basic Information Section */}
                <div>
                  <div className="bg-gray-100 px-4 py-2 mb-4">
                    <h3 className="text-sm font-semibold text-gray-800">Basic Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        className="mt-1"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="nationalId" className="text-sm font-medium text-gray-700">
                        National ID <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="nationalId"
                        className="mt-1"
                        value={formData.nationalId}
                        onChange={(e) => setFormData(prev => ({ ...prev, nationalId: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                        Department <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.department} onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        className="mt-1"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
                        Gender <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="bloodGroup" className="text-sm font-medium text-gray-700">Blood Group</Label>
                      <Select value={formData.bloodGroup} onValueChange={(value) => setFormData(prev => ({ ...prev, bloodGroup: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="religion" className="text-sm font-medium text-gray-700">Religion</Label>
                      <Input
                        id="religion"
                        className="mt-1"
                        value={formData.religion}
                        onChange={(e) => setFormData(prev => ({ ...prev, religion: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthDate" className="text-sm font-medium text-gray-700">
                        Birth Date <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="birthDate"
                        type="date"
                        className="mt-1"
                        value={formData.birthDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, birthDate: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="presentAddress" className="text-sm font-medium text-gray-700">Present Address</Label>
                      <Textarea
                        id="presentAddress"
                        className="mt-1"
                        rows={3}
                        value={formData.presentAddress}
                        onChange={(e) => setFormData(prev => ({ ...prev, presentAddress: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="permanentAddress" className="text-sm font-medium text-gray-700">Permanent Address</Label>
                      <Textarea
                        id="permanentAddress"
                        className="mt-1"
                        rows={3}
                        value={formData.permanentAddress}
                        onChange={(e) => setFormData(prev => ({ ...prev, permanentAddress: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information Section */}
                <div>
                  <div className="bg-gray-100 px-4 py-2 mb-4">
                    <h3 className="text-sm font-semibold text-gray-800">Academic Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="mt-1"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                        Username <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="username"
                        className="mt-1"
                        value={formData.username}
                        onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        className="mt-1"
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="salaryGrade" className="text-sm font-medium text-gray-700">
                        Salary Grade <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.salaryGrade} onValueChange={(value) => setFormData(prev => ({ ...prev, salaryGrade: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="grade1">Grade 1</SelectItem>
                          <SelectItem value="grade2">Grade 2</SelectItem>
                          <SelectItem value="grade3">Grade 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <Label htmlFor="salaryType" className="text-sm font-medium text-gray-700">
                        Salary Type <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.salaryType} onValueChange={(value) => setFormData(prev => ({ ...prev, salaryType: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="hourly">Hourly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                        Role <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="teacher">Teacher</SelectItem>
                          <SelectItem value="senior-teacher">Senior Teacher</SelectItem>
                          <SelectItem value="head-teacher">Head Teacher</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="joiningDate" className="text-sm font-medium text-gray-700">
                        Joining Date <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="joiningDate"
                        type="date"
                        className="mt-1"
                        value={formData.joiningDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, joiningDate: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="resume" className="text-sm font-medium text-gray-700">Resume</Label>
                      <div className="mt-1">
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
                          onChange={(e) => handleFileChange(e, "resume")}
                        />
                        <p className="text-xs text-gray-500 mt-1">Document file format: .pdf, .doc/docx, .ppt/pptx or .txt</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Information Section */}
                <div>
                  <div className="bg-gray-100 px-4 py-2 mb-4">
                    <h3 className="text-sm font-semibold text-gray-800">Other Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <Label htmlFor="isViewOnWeb" className="text-sm font-medium text-gray-700">Is View on Web?</Label>
                      <Select value={formData.isViewOnWeb} onValueChange={(value) => setFormData(prev => ({ ...prev, isViewOnWeb: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="facebookUrl" className="text-sm font-medium text-gray-700">Facebook URL</Label>
                      <Input
                        id="facebookUrl"
                        className="mt-1"
                        value={formData.facebookUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, facebookUrl: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedinUrl" className="text-sm font-medium text-gray-700">LinkedIn URL</Label>
                      <Input
                        id="linkedinUrl"
                        className="mt-1"
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitterUrl" className="text-sm font-medium text-gray-700">Twitter URL</Label>
                      <Input
                        id="twitterUrl"
                        className="mt-1"
                        value={formData.twitterUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, twitterUrl: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <Label htmlFor="instagramUrl" className="text-sm font-medium text-gray-700">Instagram URL</Label>
                      <Input
                        id="instagramUrl"
                        className="mt-1"
                        value={formData.instagramUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, instagramUrl: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="youtubeUrl" className="text-sm font-medium text-gray-700">Youtube URL</Label>
                      <Input
                        id="youtubeUrl"
                        className="mt-1"
                        value={formData.youtubeUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, youtubeUrl: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="pinterestUrl" className="text-sm font-medium text-gray-700">Pinterest URL</Label>
                      <Input
                        id="pinterestUrl"
                        className="mt-1"
                        value={formData.pinterestUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, pinterestUrl: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="photo" className="text-sm font-medium text-gray-700">Photo</Label>
                      <div className="mt-1">
                        <Input
                          id="photo"
                          type="file"
                          accept=".jpg,.jpeg,.png,.gif"
                          onChange={(e) => handleFileChange(e, "photo")}
                        />
                        <p className="text-xs text-gray-500 mt-1">Dimension:- Max-W: 120px, Max-H: 130px</p>
                        <p className="text-xs text-gray-500">Image file format: .jpg, .jpeg, .png or .gif</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="otherInfo" className="text-sm font-medium text-gray-700">Other Info</Label>
                      <Textarea
                        id="otherInfo"
                        className="mt-1"
                        rows={4}
                        value={formData.otherInfo}
                        onChange={(e) => setFormData(prev => ({ ...prev, otherInfo: e.target.value }))}
                      />
                    </div>
                  </div>
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
}
