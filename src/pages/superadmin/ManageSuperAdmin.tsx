import { useState } from "react";
import { ChevronUp, SquarePlus, Copy, FileText, Download, Search, Eye, Edit, ChevronLeft, ChevronRight, Shield, Upload, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ManageSuperAdmin() {
  const [selectedRows, setSelectedRows] = useState("15");
  const [activeTab, setActiveTab] = useState("list");

  // Form states for Add tab
  const [formData, setFormData] = useState({
    name: '',
    nationalId: '',
    phone: '',
    gender: '',
    bloodGroup: '',
    religion: '',
    birthDate: '',
    presentAddress: '',
    permanentAddress: '',
    email: '',
    username: '',
    password: '',
    role: '',
    otherInfo: ''
  });

  const superAdmins = [
    {
      sl: 1,
      photo: '/api/placeholder/40/40',
      name: 'John Doe',
      phone: '+1234567890',
      email: 'john@example.com'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      nationalId: '',
      phone: '',
      gender: '',
      bloodGroup: '',
      religion: '',
      birthDate: '',
      presentAddress: '',
      permanentAddress: '',
      email: '',
      username: '',
      password: '',
      role: '',
      otherInfo: ''
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Global Filter Bar */}
      <div className="bg-white px-6 py-4 border-b flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select School" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school1">School 1</SelectItem>
              <SelectItem value="school2">School 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Session Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-2024">2023-2024</SelectItem>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Global Search..." className="pl-10 w-64" />
          </div>
          <Button className="bg-black text-white">Update</Button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-6 py-4 bg-gray-50">
        <div className="flex items-center flex-wrap">
          <span className="text-sm font-medium mr-4">Quick Link:</span>
          <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
            <a href="#" className="hover:underline">Dashboard</a>
            <span>|</span>
            <a href="#" className="hover:underline">General Setting</a>
            <span>|</span>
            <a href="#" className="hover:underline">Manage School</a>
            <span>|</span>
            <a href="#" className="hover:underline">Payment Setting</a>
            <span>|</span>
            <a href="#" className="hover:underline">SMS Setting</a>
            <span>|</span>
            <a href="#" className="hover:underline">Email Setting</a>
            <span>|</span>
            <a href="#" className="hover:underline">Academic Year</a>
            <span>|</span>
            <a href="#" className="hover:underline">User Role</a>
            <span>|</span>
            <a href="#" className="hover:underline">Permission</a>
            <span>|</span>
            <a href="#" className="hover:underline font-semibold text-blue-800">Super Admin</a>
            <span>|</span>
            <a href="#" className="hover:underline">Manage User</a>
            <span>|</span>
            <a href="#" className="hover:underline">Reset User Password</a>
            <span>|</span>
            <a href="#" className="hover:underline">Reset Username</a>
            <span>|</span>
            <a href="#" className="hover:underline">User Credential</a>
            <span>|</span>
            <a href="#" className="hover:underline">Activity Log</a>
            <span>|</span>
            <a href="#" className="hover:underline">Feedback</a>
            <span>|</span>
            <a href="#" className="hover:underline">Backup</a>
            <span>|</span>
            <a href="#" className="hover:underline">Opening Hour</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Manage Super Admin
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="px-6 py-4 bg-white flex gap-2 border-b">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="list">List</TabsTrigger>
                <TabsTrigger value="add">Add</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="list" className="m-0">
              {/* Action Buttons */}
              <div className="px-6 py-4 bg-white flex items-center justify-between flex-wrap">
                <div className="flex gap-2 mb-2 md:mb-0">
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
              <div className="px-6 py-4 bg-white overflow-x-auto">
                <Table className="border-collapse min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="border-r border-gray-200">#SL <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Photo <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Name <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Phone <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Email <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead>Action <ChevronUp className="inline h-4 w-4" /></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {superAdmins.map((admin) => (
                      <TableRow key={admin.sl} className="border-b">
                        <TableCell className="border-r border-gray-200">{admin.sl}</TableCell>
                        <TableCell className="border-r border-gray-200">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-400" />
                          </div>
                        </TableCell>
                        <TableCell className="border-r border-gray-200">{admin.name}</TableCell>
                        <TableCell className="border-r border-gray-200">{admin.phone}</TableCell>
                        <TableCell className="border-r border-gray-200">{admin.email}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-blue-600 text-white">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" className="bg-black text-white">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Table Footer / Pagination */}
              <div className="px-6 py-4 bg-white flex items-center justify-between border-t flex-wrap">
                <span className="text-sm text-gray-600">Showing 1 to {superAdmins.length} of {superAdmins.length} entries</span>
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
            </TabsContent>

            <TabsContent value="add" className="m-0">
              <div className="px-6 py-6 bg-white">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="nationalId">National ID</Label>
                        <Input
                          id="nationalId"
                          placeholder="National ID"
                          value={formData.nationalId}
                          onChange={(e) => handleInputChange('nationalId', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="--Select--" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <Label htmlFor="bloodGroup">Blood Group</Label>
                        <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange('bloodGroup', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="--Select--" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A+">A+</SelectItem>
                            <SelectItem value="A-">A-</SelectItem>
                            <SelectItem value="B+">B+</SelectItem>
                            <SelectItem value="B-">B-</SelectItem>
                            <SelectItem value="O+">O+</SelectItem>
                            <SelectItem value="O-">O-</SelectItem>
                            <SelectItem value="AB+">AB+</SelectItem>
                            <SelectItem value="AB-">AB-</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="religion">Religion</Label>
                        <Input
                          id="religion"
                          placeholder="Religion"
                          value={formData.religion}
                          onChange={(e) => handleInputChange('religion', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="birthDate">Birth Date *</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => handleInputChange('birthDate', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="presentAddress">Present Address</Label>
                        <Textarea
                          id="presentAddress"
                          placeholder="Present Address"
                          value={formData.presentAddress}
                          onChange={(e) => handleInputChange('presentAddress', e.target.value)}
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="permanentAddress">Permanent Address</Label>
                        <Textarea
                          id="permanentAddress"
                          placeholder="Permanent Address"
                          value={formData.permanentAddress}
                          onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="username">Username *</Label>
                        <Input
                          id="username"
                          placeholder="Username"
                          value={formData.username}
                          onChange={(e) => handleInputChange('username', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="password">Password *</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Role *</Label>
                        <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="--Select--" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="super-admin">Super Admin</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <Label>Resume</Label>
                      <div className="flex items-center gap-4">
                        <Button type="button" variant="outline" className="flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          Upload
                        </Button>
                        <span className="text-sm text-gray-500">Document file format: .pdf, .doc/.docx, .ppt/.pptx or .txt</span>
                      </div>
                    </div>
                  </div>

                  {/* Other Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Other Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="otherInfo">Other Info</Label>
                        <Textarea
                          id="otherInfo"
                          placeholder="Other info"
                          value={formData.otherInfo}
                          onChange={(e) => handleInputChange('otherInfo', e.target.value)}
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label>Photo</Label>
                        <div className="flex items-center gap-4">
                          <Button type="button" variant="outline" className="flex items-center gap-2">
                            <Upload className="h-4 w-4" />
                            Upload
                          </Button>
                          <span className="text-sm text-gray-500">Dimension:- Max-W: 120px, Max-H: 130px<br />Image file format: .jpg, .jpeg, .png or .gif</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex justify-end gap-4">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit" className="bg-black text-white">Submit</Button>
                  </div>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
