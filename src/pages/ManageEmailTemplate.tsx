import { useState } from "react";
import { ChevronUp, List, Plus, Copy, FileText, Download, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ManageEmailTemplate() {
  const [selectedRows, setSelectedRows] = useState("15");
  const [activeTab, setActiveTab] = useState("list");
  const [school, setSchool] = useState("");
  const [receiverType, setReceiverType] = useState("");
  const [title, setTitle] = useState("");
  const [template, setTemplate] = useState("");

  return (
    <div className="w-full h-full bg-white">
      {/* Main Page Header */}
      <div className="flex items-center justify-between bg-white px-6 py-4 border-b-2 border-black">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          ✉ Manage Email Template
        </h1>
        <ChevronUp className="h-5 w-5 text-black" />
      </div>

      {/* Quick Links */}
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center">
          <span className="text-sm font-medium mr-4">Quick Link:</span>
          <div className="flex items-center space-x-2 text-blue-600">
            <a href="#" className="hover:underline font-bold">Email Template</a>
            <span>|</span>
            <a href="#" className="hover:underline">SMS Template</a>
          </div>
        </div>
      </div>

      {/* Sub-Navigation and Controls */}
      <div className="px-6 py-4 bg-white flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className={`border-gray-300 text-black flex items-center gap-2 ${activeTab === 'list' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActiveTab('list')}
          >
            🗊 List
          </Button>
          <Button
            variant="outline"
            className={`border-gray-300 text-black flex items-center gap-2 ${activeTab === 'add' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActiveTab('add')}
          >
            ➕ Add
          </Button>
        </div>
        {activeTab === 'list' && (
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-40 bg-gray-100">
                <SelectValue placeholder="--Select School--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="school1">School 1</SelectItem>
                <SelectItem value="school2">School 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {activeTab === 'list' ? (
        <>
          {/* Action Buttons and Controls */}
          <div className="px-6 py-4 bg-white flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
                <Copy className="h-4 w-4" />
                Copy
              </Button>
              <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
                <FileText className="h-4 w-4" />
                CSV
              </Button>
              <Button variant="outline" size="sm" className="bg-gray-100 text-gray-600">
                <Download className="h-4 w-4" />
                PDF
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
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search..." className="pl-10 w-48" />
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
                  <TableHead className="w-12 border-r border-gray-200">#SL <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">School <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Receiver Type <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Title <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Template <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead>Action <ChevronUp className="inline h-4 w-4" /></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No data available in table
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="px-6 py-4 bg-white flex items-center justify-between border-t">
            <span className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Separator Line */}
          <div className="px-6 py-2 bg-white">
            <hr className="border-gray-300 opacity-50" />
          </div>

          {/* Add Form */}
          <div className="px-6 py-4 bg-white">
            <form className="grid grid-cols-2 gap-4">
              <Label htmlFor="school" className="text-right self-center">School Name *:</Label>
              <Select value={school} onValueChange={setSchool}>
                <SelectTrigger>
                  <SelectValue placeholder="--Select School--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school1">School 1</SelectItem>
                  <SelectItem value="school2">School 2</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="receiverType" className="text-right self-center">Receiver Type *:</Label>
              <Select value={receiverType} onValueChange={setReceiverType}>
                <SelectTrigger>
                  <SelectValue placeholder="--Select --" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="title" className="text-right self-center">Title *:</Label>
              <Input
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Label htmlFor="template" className="text-right self-start pt-2">Template *:</Label>
              <div className="flex flex-col">
                <Textarea
                  id="template"
                  placeholder="Template"
                  value={template}
                  onChange={(e) => setTemplate(e.target.value)}
                  className="resize"
                />
                <span className="text-sm text-gray-600 mt-1">Dynamic Tag</span>
              </div>

              <div className="col-span-2 border-t pt-4 flex justify-end gap-2">
                <Button variant="outline" type="button">Cancel</Button>
                <Button type="submit" className="bg-black text-white">Submit</Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
