import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, Bell, SquarePlus, Copy, FileText, Download, Search, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterBar } from "@/components/FilterBar";

export default function ManageLeaveType() {
  const [selectedRows, setSelectedRows] = useState("15");
  const [activeTab, setActiveTab] = useState("list");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [applicantType, setApplicantType] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [totalLeave, setTotalLeave] = useState("");

  const leaveTypes = []; // Empty array for now, as per spec

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ schoolName, applicantType, leaveType, totalLeave });
    setIsAddDialogOpen(false);
    // Reset form
    setSchoolName("");
    setApplicantType("");
    setLeaveType("");
    setTotalLeave("");
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Top Header Bar */}
      <FilterBar />

      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-600 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Manage Leave Type
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <Link to="/leaves/type" className="font-bold text-blue-800 hover:underline cursor-pointer">Leave Type</Link>
                <span>|</span>
                <Link to="/leaves/application" className="hover:underline text-blue-600 cursor-pointer">Leave Application</Link>
                <span>|</span>
                <Link to="/leaves/approved" className="hover:underline text-blue-600 cursor-pointer">Approved Application</Link>
                <span>|</span>
                <Link to="/leaves/waiting" className="hover:underline text-blue-600 cursor-pointer">Waiting Application</Link>
                <span>|</span>
                <Link to="/leaves/declined" className="hover:underline text-blue-600 cursor-pointer">Declined Application</Link>
              </div>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="px-6 py-4 bg-white flex gap-2 flex-wrap">
            <Button
              variant={activeTab === 'list' ? 'default' : 'outline'}
              className={`border-gray-300 ${activeTab === 'list' ? 'bg-blue-600 text-white' : 'text-black'} flex items-center gap-2`}
              onClick={() => setActiveTab('list')}
            >
              <SquarePlus className="h-4 w-4" />
              List
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-gray-300 text-black bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setIsAddDialogOpen(true)}
                >
                  <SquarePlus className="h-4 w-4" />
                  Add
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add Leave Type</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Label htmlFor="schoolName" className="text-right self-center">School Name <span className="text-red-500">*</span></Label>
                    <Select value={schoolName} onValueChange={setSchoolName}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select School--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school1">School 1</SelectItem>
                        <SelectItem value="school2">School 2</SelectItem>
                      </SelectContent>
                    </Select>

                    <Label htmlFor="applicantType" className="text-right self-center">Applicant Type <span className="text-red-500">*</span></Label>
                    <Select value={applicantType} onValueChange={setApplicantType}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                      </SelectContent>
                    </Select>

                    <Label htmlFor="leaveType" className="text-right self-center">Leave Type <span className="text-red-500">*</span></Label>
                    <Input
                      id="leaveType"
                      placeholder="Leave Type"
                      value={leaveType}
                      onChange={(e) => setLeaveType(e.target.value)}
                      required
                    />

                    <Label htmlFor="totalLeave" className="text-right self-center">Total Leave <span className="text-red-500">*</span></Label>
                    <Input
                      id="totalLeave"
                      placeholder="Total Leave"
                      value={totalLeave}
                      onChange={(e) => setTotalLeave(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex justify-end gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-black text-white">
                      Submit
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {activeTab === 'list' && (
            <>
              {/* Table Toolbar */}
              <div className="px-6 py-4 bg-white flex items-center justify-between flex-wrap">
                <div className="flex gap-2 mb-2 md:mb-0 flex-wrap">
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
                <div className="flex items-center gap-2 flex-wrap">
                  <Select>
                    <SelectTrigger className="w-48 bg-gray-100">
                      <SelectValue placeholder="--Select School--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school1">School 1</SelectItem>
                      <SelectItem value="school2">School 2</SelectItem>
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
              <div className="px-6 py-4 bg-white overflow-x-auto">
                <Table className="border-collapse min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="border-r border-gray-200">#SL <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">School <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Applicant Type <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Leave Type <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Total Leave <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead>Action <ChevronUp className="inline h-4 w-4" /></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaveTypes.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                          No data available in table
                        </TableCell>
                      </TableRow>
                    ) : (
                      leaveTypes.map((leave) => (
                        <TableRow key={leave.sl} className="border-b">
                          <TableCell className="border-r border-gray-200">{leave.sl}</TableCell>
                          <TableCell className="border-r border-gray-200">{leave.school}</TableCell>
                          <TableCell className="border-r border-gray-200">{leave.applicantType}</TableCell>
                          <TableCell className="border-r border-gray-200">{leave.leaveType}</TableCell>
                          <TableCell className="border-r border-gray-200">{leave.totalLeave}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
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
