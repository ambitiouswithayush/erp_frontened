import { useState } from "react";
import { ChevronUp, Mail, List, SquarePlus, Copy, FileText, Download, Search, Eye, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterBar } from "@/components/FilterBar";

export default function ManageSMSTemplate() {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedRows, setSelectedRows] = useState("15");
  const [schoolName, setSchoolName] = useState("");
  const [receiverType, setReceiverType] = useState("");
  const [title, setTitle] = useState("");
  const [template, setTemplate] = useState("");

  const smsTemplates = [
    {
      sl: 1,
      school: "School 1",
      receiverType: "Student",
      title: "Welcome SMS",
      template: "Welcome to our school! Your admission has been confirmed."
    },
    {
      sl: 2,
      school: "School 2",
      receiverType: "Parent",
      title: "Fee Reminder",
      template: "Dear parent, please pay the pending fees by the end of this month."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Global Filter Bar */}
      <FilterBar />

      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Manage SMS Template
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
               <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center text-blue-600 text-sm flex-wrap">
                <a href="#" className="hover:underline">Email Template</a>
                <span className="mx-1">|</span>
                <a href="#" className="hover:underline font-semibold text-blue-800">SMS Template</a>
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
            <Button
              variant={activeTab === 'add' ? 'default' : 'outline'}
              className={`flex items-center gap-2 ${activeTab === 'add' ? 'bg-blue-600 text-white' : 'border-gray-300 text-black'}`}
              onClick={() => setActiveTab('add')}
            >
              <SquarePlus className="h-4 w-4" />
              Add
            </Button>
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
                      <TableHead className="border-r border-gray-200">School</TableHead>
                      <TableHead className="border-r border-gray-200">Receiver Type</TableHead>
                      <TableHead className="border-r border-gray-200">Title</TableHead>
                      <TableHead className="border-r border-gray-200">Template</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {smsTemplates.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                          No data available in table
                        </TableCell>
                      </TableRow>
                    ) : (
                      smsTemplates.map((template) => (
                        <TableRow key={template.sl} className="border-b">
                          <TableCell className="border-r border-gray-200">{template.sl}</TableCell>
                          <TableCell className="border-r border-gray-200">{template.school}</TableCell>
                          <TableCell className="border-r border-gray-200">{template.receiverType}</TableCell>
                          <TableCell className="border-r border-gray-200">{template.title}</TableCell>
                          <TableCell className="border-r border-gray-200 max-w-xs truncate">{template.template}</TableCell>
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
                <span className="text-sm text-gray-600">Showing {smsTemplates.length > 0 ? 1 : 0} to {smsTemplates.length} of {smsTemplates.length} entries</span>
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

          {activeTab === 'add' && (
            <div className="px-6 py-4 bg-white">
              {/* Top Filter Dropdown */}
              <div className="flex justify-end mb-6">
                <Select>
                  <SelectTrigger className="w-48 bg-gray-100">
                    <SelectValue placeholder="--Select School--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school1">School 1</SelectItem>
                    <SelectItem value="school2">School 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Form */}
              <form className="space-y-6 max-w-2xl mx-auto">
                {/* School Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <Label className="text-right sm:text-right font-medium">
                    School Name <span className="text-red-500">*</span>
                  </Label>
                  <Select value={schoolName} onValueChange={setSchoolName}>
                    <SelectTrigger className="border-gray-300 bg-white px-3 py-2">
                      <SelectValue placeholder="--Select School--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school1">School 1</SelectItem>
                      <SelectItem value="school2">School 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Receiver Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <Label className="text-right sm:text-right font-medium">
                    Receiver Type <span className="text-red-500">*</span>
                  </Label>
                  <Select value={receiverType} onValueChange={setReceiverType}>
                    <SelectTrigger className="border-gray-300 bg-white px-3 py-2">
                      <SelectValue placeholder="--Select --" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <Label className="text-right sm:text-right font-medium">
                    Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-gray-300 bg-white px-3 py-2"
                  />
                </div>

                {/* Template */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  <Label className="text-right sm:text-right font-medium">
                    Template <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    rows={6}
                    value={template}
                    onChange={(e) => setTemplate(e.target.value)}
                    className="border-gray-300 bg-white px-3 py-2 resize-none"
                  />
                </div>

                {/* Dynamic Tag */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <Label className="text-right sm:text-right font-medium">
                    Dynamic Tag
                  </Label>
                  <div></div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 pt-6">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-black text-white px-6 py-2 hover:bg-gray-800">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
