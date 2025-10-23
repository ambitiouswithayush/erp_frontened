import { useState } from "react";
import { ChevronDown, ChevronUp, Search, Copy, FileText, FileSpreadsheet, File, Download, Edit, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FilterBar } from "@/components/FilterBar";

interface EmailTemplate {
  id: number;
  school: string;
  receiverType: string;
  title: string;
  template: string;
}

const mockEmailTemplates: EmailTemplate[] = [
  {
    id: 1,
    school: "School A",
    receiverType: "Student",
    title: "Welcome Email",
    template: "Dear {student_name}, Welcome to our school..."
  },
  {
    id: 2,
    school: "School B",
    receiverType: "Teacher",
    title: "Monthly Report",
    template: "Dear {teacher_name}, Here is your monthly report..."
  }
];

export default function ManageEmailTemplate() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [activeQuickLink, setActiveQuickLink] = useState('Email Template');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRows, setShowRows] = useState('15');
  const [formData, setFormData] = useState({
    school: '',
    receiverType: '',
    title: '',
    template: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      school: '',
      receiverType: '',
      title: '',
      template: ''
    });
  };

  const filteredTemplates = mockEmailTemplates.filter(template =>
    template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.school.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Global Filter Bar */}
      <FilterBar />

      {/* Main Content Panel */}
      <div className="max-w-7xl mx-auto p-6">
        <Card className="shadow-lg">
          <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              ✉️ Manage Email Template
            </CardTitle>
            <ChevronUp className="h-5 w-5" />
          </CardHeader>

          {!isCollapsed && (
            <CardContent className="space-y-6">
              {/* Quick Links Navigation */}
              <div className="px-6 py-4 bg-gray-50">
                <div className="flex items-center flex-wrap">
                   <span className="text-sm font-medium mr-4">Quick Link:</span>
                  <div className="flex items-center text-blue-600 text-sm flex-wrap">
                    <a href="#" className="hover:underline font-semibold text-blue-800">Email Template</a>
                    <span className="mx-1">|</span>
                    <a href="#" className="hover:underline">SMS Template</a>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 border-b">
                <button
                  onClick={() => setActiveTab('list')}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'list'
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'add'
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Add
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'list' && (
                <div className="space-y-4">
                  {/* Sub-filters */}
                  <div className="flex justify-end space-x-4">
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="--Select School--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Schools</SelectItem>
                        <SelectItem value="school-a">School A</SelectItem>
                        <SelectItem value="school-b">School B</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="--Select--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Table Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileSpreadsheet className="h-4 w-4 mr-1" />
                        Excel
                      </Button>
                      <Button variant="outline" size="sm">
                        <File className="h-4 w-4 mr-1" />
                        CSV
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">Show</span>
                        <Select value={showRows} onValueChange={setShowRows}>
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="15">15</SelectItem>
                            <SelectItem value="25">25</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                          </SelectContent>
                        </Select>
                        <span className="text-sm">rows</span>
                      </div>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Data Table */}
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="w-16">#SL</TableHead>
                          <TableHead>School</TableHead>
                          <TableHead>Receiver Type</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Template</TableHead>
                          <TableHead className="w-24">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredTemplates.length > 0 ? (
                          filteredTemplates.map((template, index) => (
                            <TableRow key={template.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{template.school}</TableCell>
                              <TableCell>
                                <Badge variant="outline">{template.receiverType}</Badge>
                              </TableCell>
                              <TableCell>{template.title}</TableCell>
                              <TableCell className="max-w-xs truncate">{template.template}</TableCell>
                              <TableCell>
                                <div className="flex space-x-1">
                                  <Button variant="ghost" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                              No data available in table
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Table Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div>
                      Showing 0 to {filteredTemplates.length} of {filteredTemplates.length} entries
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'add' && (
                <div className="max-w-2xl mx-auto">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Label htmlFor="school" className="text-right self-center">
                        School <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.school}
                        onValueChange={(value) => setFormData({...formData, school: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="--Select School--" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="school-a">School A</SelectItem>
                          <SelectItem value="school-b">School B</SelectItem>
                        </SelectContent>
                      </Select>

                      <Label htmlFor="receiverType" className="text-right self-center">
                        Receiver Type <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.receiverType}
                        onValueChange={(value) => setFormData({...formData, receiverType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="--Select--" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="teacher">Teacher</SelectItem>
                          <SelectItem value="parent">Parent</SelectItem>
                        </SelectContent>
                      </Select>

                      <Label htmlFor="title" className="text-right self-center">
                        Title <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="Enter template title"
                      />

                      <Label htmlFor="template" className="text-right self-start pt-2">
                        Template <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="template"
                        value={formData.template}
                        onChange={(e) => setFormData({...formData, template: e.target.value})}
                        placeholder="Enter email template content"
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <div className="flex justify-end space-x-4 pt-6 border-t">
                      <Button type="button" variant="outline">
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                        <Plus className="h-4 w-4 mr-2" />
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
