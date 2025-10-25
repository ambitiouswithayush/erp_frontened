import { useState } from "react";
import { ChevronUp, Bell, SquarePlus, Copy, FileText, Download, Search, Edit, Trash2, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { FilterBar } from "@/components/FilterBar";

export default function ManageLeaveApplication() {
  const [selectedRows, setSelectedRows] = useState("15");
  const [activeTab, setActiveTab] = useState("list");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [applicantType, setApplicantType] = useState("");
  const [applicant, setApplicant] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [leaveFrom, setLeaveFrom] = useState("");
  const [leaveTo, setLeaveTo] = useState("");
  const [leaveReason, setLeaveReason] = useState("");

  const leaveApplications = []; // Empty array for now, as per spec

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ schoolName, applicantType, applicant, leaveType, applicationDate, leaveFrom, leaveTo, leaveReason });
    setIsAddDialogOpen(false);
    // Reset form
    setSchoolName("");
    setApplicantType("");
    setApplicant("");
    setLeaveType("");
    setApplicationDate("");
    setLeaveFrom("");
    setLeaveTo("");
    setLeaveReason("");
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Top Header Bar */}
      <FilterBar />

      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-600 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Manage Leave Application
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <a href="#" className="hover:underline">Leave Type</a>
                <span>|</span>
                <span className="font-bold text-blue-800">Leave Application</span>
                <span>|</span>
                <a href="#" className="hover:underline">Approved Application</a>
                <span>|</span>
                <a href="#" className="hover:underline">Waiting Application</a>
                <span>|</span>
                <a href="#" className="hover:underline">Declined Application</a>
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
              <DialogContent className="w-full max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Add Leave Application</DialogTitle>
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

                    <Label htmlFor="applicant" className="text-right self-center">Applicant <span className="text-red-500">*</span></Label>
                    <Select value={applicant} onValueChange={setApplicant}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="applicant1">Applicant 1</SelectItem>
                        <SelectItem value="applicant2">Applicant 2</SelectItem>
                      </SelectContent>
                    </Select>

                    <Label htmlFor="leaveType" className="text-right self-center">Leave Type <span className="text-red-500">*</span></Label>
                    <Select value={leaveType} onValueChange={setLeaveType}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="casual">Casual Leave</SelectItem>
                        <SelectItem value="sick">Sick Leave</SelectItem>
                        <SelectItem value="annual">Annual Leave</SelectItem>
                      </SelectContent>
                    </Select>

                    <Label htmlFor="applicationDate" className="text-right self-center">Application Date <span className="text-red-500">*</span></Label>
                    <Input
                      id="applicationDate"
                      placeholder="Application Date"
                      value={applicationDate}
                      onChange={(e) => setApplicationDate(e.target.value)}
                      required
                    />

                    <Label htmlFor="leaveFrom" className="text-right self-center">Leave From <span className="text-red-500">*</span></Label>
                    <Input
                      id="leaveFrom"
                      placeholder="Leave From"
                      value={leaveFrom}
                      onChange={(e) => setLeaveFrom(e.target.value)}
                      required
                    />

                    <Label htmlFor="leaveTo" className="text-right self-center">Leave To <span className="text-red-500">*</span></Label>
                    <Input
                      id="leaveTo"
                      placeholder="Leave To"
                      value={leaveTo}
                      onChange={(e) => setLeaveTo(e.target.value)}
                      required
                    />

                    <Label htmlFor="leaveReason" className="text-right self-center">Leave Reason <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="leaveReason"
                      placeholder="Leave Reason"
                      value={leaveReason}
                      onChange={(e) => setLeaveReason(e.target.value)}
                      required
                      className="min-h-[80px]"
                    />

                    <Label htmlFor="attachment" className="text-right self-center">Attachment</Label>
                    <div className="space-y-2">
                      <Button type="button" variant="outline" className="bg-gray-100 text-gray-600">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </Button>
                      <p className="text-sm text-blue-600">Please select a valid file format.</p>
                    </div>
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
                      <TableHead className="border-r border-gray-200">Academic Year <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Applicant Type <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Leave Type <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Applicant <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Status <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead>Action <ChevronUp className="inline h-4 w-4" /></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaveApplications.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                          No data available in table
                        </TableCell>
                      </TableRow>
                    ) : (
                      leaveApplications.map((application) => (
                        <TableRow key={application.sl} className="border-b">
                          <TableCell className="border-r border-gray-200">{application.sl}</TableCell>
                          <TableCell className="border-r border-gray-200">{application.school}</TableCell>
                          <TableCell className="border-r border-gray-200">{application.academicYear}</TableCell>
                          <TableCell className="border-r border-gray-200">{application.applicantType}</TableCell>
                          <TableCell className="border-r border-gray-200">{application.leaveType}</TableCell>
                          <TableCell className="border-r border-gray-200">{application.applicant}</TableCell>
                          <TableCell className="border-r border-gray-200">{application.status}</TableCell>
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
