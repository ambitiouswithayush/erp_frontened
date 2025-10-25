import { useState } from "react";
import { ChevronUp, Bell, SquarePlus, Copy, FileText, Download, Search, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterBar } from "@/components/FilterBar";

export default function ManageDeclinedApplication() {
  const [selectedRows, setSelectedRows] = useState("15");

  const declinedApplications = []; // Empty array for now, as per spec

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Top Header Bar */}
      <FilterBar />

      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-600 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Manage Decline Application
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
                <a href="#" className="hover:underline">Leave Application</a>
                <span>|</span>
                <a href="#" className="hover:underline">Approved Application</a>
                <span>|</span>
                <a href="#" className="hover:underline">Waiting Application</a>
                <span>|</span>
                <span className="font-bold text-blue-800">Declined Application</span>
              </div>
            </div>
          </div>

          {/* Table Toolbar */}
          <div className="px-6 py-4 bg-white flex items-center justify-between flex-wrap">
            <div className="flex gap-2 mb-2 md:mb-0 flex-wrap">
              <Button
                variant="default"
                className="border-gray-300 bg-blue-600 text-white flex items-center gap-2"
              >
                <SquarePlus className="h-4 w-4" />
                List
              </Button>
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
                  <TableHead>Action <ChevronUp className="inline h-4 w-4" /></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {declinedApplications.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                      No data available in table
                    </TableCell>
                  </TableRow>
                ) : (
                  declinedApplications.map((application) => (
                    <TableRow key={application.sl} className="border-b">
                      <TableCell className="border-r border-gray-200">{application.sl}</TableCell>
                      <TableCell className="border-r border-gray-200">{application.school}</TableCell>
                      <TableCell className="border-r border-gray-200">{application.academicYear}</TableCell>
                      <TableCell className="border-r border-gray-200">{application.applicantType}</TableCell>
                      <TableCell className="border-r border-gray-200">{application.leaveType}</TableCell>
                      <TableCell className="border-r border-gray-200">{application.applicant}</TableCell>
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
        </CardContent>
      </Card>
    </div>
  );
}
