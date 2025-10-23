import { useState } from "react";
import { ChevronUp, Home, List, SquarePlus, Copy, FileText, Download, Search, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function ManageClassLecture() {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedRows, setSelectedRows] = useState("15");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const classLectures = [
    // Sample data - will be empty initially
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Manage Class Lecture
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <a href="#" className="hover:underline">Department</a>
                <span>|</span>
                <a href="#" className="hover:underline">Teacher</a>
                <span>|</span>
                <a href="#" className="hover:underline font-semibold">Class Lecture</a>
                <span>|</span>
                <a href="#" className="hover:underline">Rating</a>
              </div>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="px-6 py-4 bg-white flex gap-2">
            <Button
              variant={activeTab === 'list' ? 'default' : 'outline'}
              className={`flex items-center gap-2 ${activeTab === 'list' ? 'bg-blue-600 text-white' : 'border-gray-300 text-black'}`}
              onClick={() => setActiveTab('list')}
            >
              <List className="h-4 w-4" />
              List
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-gray-300 text-black"
                  onClick={() => setIsAddDialogOpen(true)}
                >
                  <SquarePlus className="h-4 w-4" />
                  Add
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-full sm:max-w-5xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add Class Lecture</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="schoolName" className="block text-sm font-medium">
                          School Name <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                            <SelectValue placeholder="-Select School-" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="school1">School 1</SelectItem>
                            <SelectItem value="school2">School 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="title" className="block text-sm font-medium">
                          Title <span className="text-red-500">*</span>
                        </Label>
                        <Input id="title" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                      </div>
                      <div>
                        <Label htmlFor="class" className="block text-sm font-medium">
                          Class <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                            <SelectValue placeholder="-Select-" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="class1">Class 1</SelectItem>
                            <SelectItem value="class2">Class 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="section" className="block text-sm font-medium">
                          Section <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                            <SelectValue placeholder="-Select-" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="section1">Section A</SelectItem>
                            <SelectItem value="section2">Section B</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subject" className="block text-sm font-medium">
                          Subject <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                            <SelectValue placeholder="-Select-" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="math">Mathematics</SelectItem>
                            <SelectItem value="science">Science</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="lectureType" className="block text-sm font-medium">
                          Lecture Type <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                            <SelectValue placeholder="-Select-" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="theory">Theory</SelectItem>
                            <SelectItem value="practical">Practical</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="note" className="block text-sm font-medium">
                        Note
                      </Label>
                      <Textarea id="note" rows={4} className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" placeholder="Enter any additional notes..." />
                    </div>
                    {/* Form Actions */}
                    <div className="flex justify-end gap-4">
                      <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {activeTab === 'list' && (
            <>
              {/* Sub-filters */}
              <div className="px-6 py-4 bg-white flex items-center gap-4 flex-wrap">
                <Select>
                  <SelectTrigger className="w-48 bg-gray-100">
                    <SelectValue placeholder="--Select School--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school1">School 1</SelectItem>
                    <SelectItem value="school2">School 2</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-48 bg-gray-100">
                    <SelectValue placeholder="--Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-white flex items-center justify-end flex-wrap">
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
              <div className="px-6 py-4 bg-white">
                <Table className="border-collapse">
                  <TableHeader>
                    <TableRow className="border-b">
                      <TableHead className="w-12 border-r border-gray-200">#SL</TableHead>
                      <TableHead className="border-r border-gray-200">School <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Title <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Class <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Section <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Subject <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Teacher <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Class Lecture <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Academic Year <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {classLectures.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={10} className="text-center py-8 text-gray-500">
                          No data available in table
                        </TableCell>
                      </TableRow>
                    ) : (
                      classLectures.map((lecture, index) => (
                        <TableRow key={index} className="border-b">
                          <TableCell className="border-r border-gray-200">{index + 1}</TableCell>
                          <TableCell className="border-r border-gray-200">{lecture.school}</TableCell>
                          <TableCell className="border-r border-gray-200">{lecture.title}</TableCell>
                          <TableCell className="border-r border-gray-200">{lecture.class}</TableCell>
                          <TableCell className="border-r border-gray-200">{lecture.section}</TableCell>
                          <TableCell className="border-r border-gray-200">{lecture.subject}</TableCell>
                          <TableCell className="border-r border-gray-200">{lecture.teacher}</TableCell>
                          <TableCell className="border-r border-gray-200">{lecture.classLecture}</TableCell>
                          <TableCell className="border-r border-gray-200">{lecture.academicYear}</TableCell>
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
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Table Footer / Pagination */}
              <div className="px-6 py-4 bg-white flex items-center justify-between border-t flex-wrap">
                <span className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</span>
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
        </CardContent>
      </Card>
    </div>
  );
}
