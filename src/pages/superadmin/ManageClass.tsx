import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, List, SquarePlus, Copy, FileText, Download, Search, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ManageClass() {
  const [selectedRows, setSelectedRows] = useState("15");
  const [activeTab, setActiveTab] = useState("list");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [school, setSchool] = useState("");
  const [className, setClassName] = useState("");
  const [numericName, setNumericName] = useState("");
  const [classTeacher, setClassTeacher] = useState("");
  const [note, setNote] = useState("");

  const classes = [
    {
      sl: 1,
      school: "हिंदी माध्यमिक विद्यालय",
      class: "MCA",
      numericName: "2",
      classTeacher: "Grish Deshpande"
    },
    {
      sl: 2,
      school: "Delhi International Public School",
      class: "BSC",
      numericName: "1",
      classTeacher: "Ayush"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ school, className, numericName, classTeacher, note });
    setIsAddDialogOpen(false);
    // Reset form
    setSchool("");
    setClassName("");
    setNumericName("");
    setClassTeacher("");
    setNote("");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Global Header Bar */}
      <div className="bg-white text-gray-900 px-6 py-4 flex items-center justify-between flex-wrap shadow-lg border-b">
        <div className="flex items-center gap-4 flex-wrap">
          <Select>
            <SelectTrigger className="w-48 bg-white text-gray-900">
              <SelectValue placeholder="--Select School--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school1">School 1</SelectItem>
              <SelectItem value="school2">School 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-48 bg-white text-gray-900">
              <SelectValue placeholder="--Select Branch--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="branch1">Main Branch</SelectItem>
              <SelectItem value="branch2">Secondary Branch</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-48 bg-white text-gray-900">
              <SelectValue placeholder="--Session Year--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-2024">2023-2024</SelectItem>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-2 md:mt-0">
          <Input placeholder="Global Search" className="w-48 bg-white text-gray-900" />
          <Button className="bg-gray-700 hover:bg-gray-800 text-white">Update</Button>
        </div>
      </div>

      <Card className="max-w-7xl mx-auto my-8 shadow-2xl bg-white border-0">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white flex flex-row items-center justify-between rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-xl">
            <List className="h-6 w-6" />
            Manage Class
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-semibold mr-4 text-gray-700">Quick Link:</span>
              <div className="flex items-center space-x-2 text-sm flex-wrap">
                <Link to="/superadmin/class" className="hover:underline font-bold text-blue-800">Class</Link>
                <span className="text-gray-400">|</span>
                <Link to="/superadmin/section" className="hover:underline text-blue-600 hover:text-blue-800">Section</Link>
                <span className="text-gray-400">|</span>
                <Link to="/superadmin/subject" className="hover:underline text-blue-600 hover:text-blue-800">Subject</Link>
                <span className="text-gray-400">|</span>
                <Link to="/superadmin/syllabus" className="hover:underline text-blue-600 hover:text-blue-800">Syllabus</Link>
                <span className="text-gray-400">|</span>
                <Link to="/superadmin/material" className="hover:underline text-blue-600 hover:text-blue-800">Material</Link>
                <span className="text-gray-400">|</span>
                <Link to="/superadmin/live-class" className="hover:underline text-blue-600 hover:text-blue-800">Live Class</Link>
                <span className="text-gray-400">|</span>
                <Link to="/superadmin/assignment" className="hover:underline text-blue-600 hover:text-blue-800">Assignment</Link>
                <span className="text-gray-400">|</span>
                <Link to="/superadmin/submission" className="hover:underline text-blue-600 hover:text-blue-800">Submission</Link>
              </div>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="px-6 py-4 bg-white flex gap-2 border-b">
            <Button
              variant={activeTab === 'list' ? 'default' : 'outline'}
              className={`${activeTab === 'list' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('list')}
            >
              <List className="h-4 w-4 mr-2" />
              List
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300"
                  onClick={() => setIsAddDialogOpen(true)}
                >
                  <SquarePlus className="h-4 w-4" />
                  Add
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-blue-800">Add Class</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 items-start">
                    {/* School Name */}
                    <Label htmlFor="school" className="text-right self-center text-indigo-800 font-bold pt-2">
                      School Name <span className="text-red-500">*</span>:
                    </Label>
                    <Select value={school} onValueChange={setSchool} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="--Select School--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school1">School 1</SelectItem>
                        <SelectItem value="school2">School 2</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Class Name */}
                    <Label htmlFor="className" className="text-right self-center text-indigo-800 font-bold">
                      Class Name <span className="text-red-500">*</span>:
                    </Label>
                    <Input
                      id="className"
                      placeholder="Enter Class Name (e.g., 10th, MCA)"
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                      required
                      className="w-full"
                    />

                    {/* Numeric Name */}
                    <Label htmlFor="numericName" className="text-right self-center text-indigo-800 font-bold">
                      Numeric Name <span className="text-red-500">*</span>:
                    </Label>
                    <Input
                      id="numericName"
                      placeholder="Enter Numeric Name (e.g., 10, 2)"
                      value={numericName}
                      onChange={(e) => setNumericName(e.target.value)}
                      required
                      className="w-full"
                    />

                    {/* Class Teacher */}
                    <Label htmlFor="classTeacher" className="text-right self-center text-indigo-800 font-bold pt-2">
                      Class Teacher <span className="text-red-500">*</span>:
                    </Label>
                    <Select value={classTeacher} onValueChange={setClassTeacher} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="--Select--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher1">Teacher 1</SelectItem>
                        <SelectItem value="teacher2">Teacher 2</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Note */}
                    <Label htmlFor="note" className="text-right self-start pt-2 text-indigo-800 font-bold">
                      Note:
                    </Label>
                    <Textarea
                      id="note"
                      placeholder="Enter any additional notes..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={4}
                      className="w-full resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-4 pt-4 border-t">
                    <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)} className="px-6">
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-gray-700 hover:bg-gray-800 text-white px-6">
                      Submit
                    </Button>
                  </div>

                  {/* Instruction Bar */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-sm text-gray-800">
                      <span className="font-bold text-yellow-800">Instruction:</span> Please add Teacher before add Class.
                    </p>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {activeTab === 'list' && (
            <>
              {/* Action Buttons and Filters */}
              <div className="px-6 py-4 bg-white flex items-center justify-between flex-wrap gap-4 border-b">
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm" className="bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-300">
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" className="bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-300">
                    <FileText className="h-4 w-4 mr-1" />
                    Excel
                  </Button>
                  <Button variant="outline" size="sm" className="bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-300">
                    <Download className="h-4 w-4 mr-1" />
                    CSV
                  </Button>
                  <Button variant="outline" size="sm" className="bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-300">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                  <Select value={selectedRows} onValueChange={setSelectedRows}>
                    <SelectTrigger className="w-36 bg-gray-50 border-gray-300">
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
                <div className="flex items-center gap-2 flex-wrap">
                  <Select>
                    <SelectTrigger className="w-48 bg-gray-50 border-gray-300">
                      <SelectValue placeholder="--Select School--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Schools</SelectItem>
                      <SelectItem value="school1">School 1</SelectItem>
                      <SelectItem value="school2">School 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search..." className="pl-10 w-52 bg-gray-50 border-gray-300" />
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="px-6 py-4 bg-white overflow-x-auto">
                <Table className="border-collapse min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-gray-100 to-gray-200 border-b-2 border-gray-300">
                      <TableHead className="border-r border-gray-300 font-bold text-gray-700">
                        #SL <ChevronUp className="inline h-4 w-4 ml-1" />
                      </TableHead>
                      <TableHead className="border-r border-gray-300 font-bold text-gray-700">
                        School <ChevronUp className="inline h-4 w-4 ml-1" />
                      </TableHead>
                      <TableHead className="border-r border-gray-300 font-bold text-gray-700">
                        Class <ChevronUp className="inline h-4 w-4 ml-1" />
                      </TableHead>
                      <TableHead className="border-r border-gray-300 font-bold text-gray-700">
                        Numeric Name <ChevronUp className="inline h-4 w-4 ml-1" />
                      </TableHead>
                      <TableHead className="border-r border-gray-300 font-bold text-gray-700">
                        Class Teacher <ChevronUp className="inline h-4 w-4 ml-1" />
                      </TableHead>
                      <TableHead className="font-bold text-gray-700">
                        Action <ChevronUp className="inline h-4 w-4 ml-1" />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {classes.map((cls, index) => (
                      <TableRow
                        key={cls.sl}
                        className={`border-b hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <TableCell className="border-r border-gray-200 font-medium">{cls.sl}</TableCell>
                        <TableCell className="border-r border-gray-200">{cls.school}</TableCell>
                        <TableCell className="border-r border-gray-200 font-semibold text-blue-700">{cls.class}</TableCell>
                        <TableCell className="border-r border-gray-200">{cls.numericName}</TableCell>
                        <TableCell className="border-r border-gray-200">{cls.classTeacher}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 border-blue-300"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-800 hover:bg-red-50 border-red-300"
                            >
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
              <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-between border-t-2 border-gray-200 flex-wrap gap-4">
                <span className="text-sm text-gray-600 font-medium">
                  Showing 1 to {classes.length} of {classes.length} entries
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="bg-white border-gray-300"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="bg-white border-gray-300"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
