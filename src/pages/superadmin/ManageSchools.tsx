import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, Home, List, SquarePlus, Copy, FileText, Download, Search, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FilterBar } from "@/components/FilterBar";

export default function ManageSchools() {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedRows, setSelectedRows] = useState("15");

  console.log('Current activeTab:', activeTab);

  const schools = [
    {
      sl: 1,
      name: "शासकीय वसतिगृह",
      subscription: "-Select--",
      visitSchool: "शासकीय वसतिगृह",
      address: "10433 Wolverine Way Bellevue, CA 98004",
      phone: "0123456789",
      email: "info@gmsms.com",
      logo: "/placeholder.svg",
      status: "Active"
    },
    {
      sl: 2,
      name: "अनुसुचित जाती वसतिगृह",
      subscription: "-Select--",
      visitSchool: "अनुसुचित जाती वसतिगृह",
      address: "Station Road",
      phone: "6201879393",
      email: "vijf@gmail.com",
      logo: "",
      status: "Active"
    },
    {
      sl: 3,
      name: "व नवद्य मुक्तवी शासकिय",
      subscription: "-Select--",
      visitSchool: "अनुसुचित जाती व नवद्य मुकतवी शासकिय वसतिगृह",
      address: "ना. भागाट गा. रामागड",
      phone: "8149223616",
      email: "maheshgosavi3oct@gmail.com",
      logo: "",
      status: "Active"
    },
    {
      sl: 4,
      name: "Delhi International Public School",
      subscription: "Approved",
      visitSchool: "Delhi International Public School",
      address: "Sector-9, Rohini, Delhi-110085",
      phone: "011-41618613",
      email: "dips@rediffmail.com",
      logo: "",
      status: "Active"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Manage School
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Top Filter Bar */}
          <FilterBar />

          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <Link to="/admin/general" className="hover:underline">General Setting</Link>
                <span>|</span>
                <Link to="/admin/schools" className="hover:underline font-semibold text-blue-800">Manage School</Link>
                <span>|</span>
                <Link to="/admin/payment" className="hover:underline">Payment Setting</Link>
                <span>|</span>
                <Link to="/admin/sms" className="hover:underline">SMS Setting</Link>
                <span>|</span>
                <Link to="/admin/email" className="hover:underline">Email Setting</Link>
                <span>|</span>
                <Link to="/admin/academic-year" className="hover:underline">Academic Year</Link>
                <span>|</span>
                <Link to="/admin/user-roles" className="hover:underline">User Role</Link>
                <span>|</span>
                <Link to="/admin/permissions" className="hover:underline">Role Permission</Link>
                <span>|</span>
                <Link to="/admin/super-admin" className="hover:underline">Super Admin</Link>
                <span>|</span>
                <Link to="/admin/users" className="hover:underline">Manage User</Link>
                <span>|</span>
                <Link to="/admin/reset-password" className="hover:underline">Reset User Password</Link>
                <span>|</span>
                <Link to="/admin/reset-username" className="hover:underline">Reset Username</Link>
                <span>|</span>
                <Link to="/admin/credentials" className="hover:underline">User Credential</Link>
                <span>|</span>
                <Link to="/admin/activity-logs" className="hover:underline">Activity Log</Link>
                <span>|</span>
                <Link to="/admin/feedbacks" className="hover:underline">Feedback</Link>
                <span>|</span>
                <Link to="/admin/backup" className="hover:underline">Backup</Link>
                <span>|</span>
                <Link to="/admin/opening-hours" className="hover:underline">Opening Hour</Link>
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
                      <TableHead className="border-r border-gray-200">School Name <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Subscription <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Visit School <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Address <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Phone <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Email <ChevronUp className="inline h-4 w-4" /></TableHead>
                      <TableHead className="border-r border-gray-200">Admin Logo</TableHead>
                      <TableHead className="border-r border-gray-200">Status <Filter className="inline h-4 w-4" /></TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schools.map((school) => (
                      <TableRow key={school.sl} className="border-b">
                        <TableCell className="border-r border-gray-200">{school.sl}</TableCell>
                        <TableCell className="font-medium border-r border-gray-200">{school.name}</TableCell>
                        <TableCell className="border-r border-gray-200">
                          <Select defaultValue={school.subscription}>
                            <SelectTrigger className="w-24 bg-gray-100">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="-Select--">-Select--</SelectItem>
                              <SelectItem value="Approved">Approved</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="border-r border-gray-200">
                          <Input defaultValue={school.visitSchool} className="bg-gray-800 text-white w-48" />
                        </TableCell>
                        <TableCell className="border-r border-gray-200">{school.address}</TableCell>
                        <TableCell className="border-r border-gray-200">{school.phone}</TableCell>
                        <TableCell className="border-r border-gray-200">{school.email}</TableCell>
                        <TableCell className="border-r border-gray-200">
                          {school.logo ? <img src={school.logo} alt="Logo" className="w-8 h-8" /> : ""}
                        </TableCell>
                        <TableCell className="border-r border-gray-200">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                        </TableCell>
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
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Table Footer / Pagination */}
              <div className="px-6 py-4 bg-white flex items-center justify-between border-t flex-wrap">
                <span className="text-sm text-gray-600">Showing 1 to 4 of 4 entries</span>
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
            <div className="px-6 py-6 bg-gray-50" style={{ minHeight: '400px' }}>
              <div className="mb-4 p-4 bg-blue-500 text-white text-center text-xl font-bold">
                ADD SCHOOL FORM - Dashboard is now visible!
              </div>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setActiveTab('list'); }}>
                {/* Basic Information Section */}
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Basic Information:</h3>
                  <hr className="mb-4 border-gray-300" />
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <Label htmlFor="schoolUrl" className="block text-sm font-medium text-gray-700 mb-1">
                        School URL <span className="text-red-500">*</span>
                      </Label>
                      <Input id="schoolUrl" type="text" placeholder="School URL" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                      <p className="text-xs text-gray-500 mt-1">No Space, No Capital Letter, No Special Character. Ex: south-point OR liverpool</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="schoolCode" className="block text-sm font-medium text-gray-700 mb-1">School Code</Label>
                      <Input id="schoolCode" type="text" placeholder="School Code" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">
                        School Name <span className="text-red-500">*</span>
                      </Label>
                      <Input id="schoolName" type="text" placeholder="School Name" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address <span className="text-red-500">*</span>
                      </Label>
                      <Input id="address" type="text" placeholder="Address" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input id="phone" type="text" placeholder="Phone" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700 mb-1">Registration Date</Label>
                      <Input id="registrationDate" type="date" placeholder="Registration Date" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input id="email" type="email" placeholder="Email" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="fax" className="block text-sm font-medium text-gray-700 mb-1">Fax</Label>
                      <Input id="fax" type="text" placeholder="Fax" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="footer" className="block text-sm font-medium text-gray-700 mb-1">Footer</Label>
                      <Input id="footer" type="text" placeholder="Footer" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                  </div>
                </div>

                {/* Setting Information Section */}
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Setting Information:</h3>
                  <hr className="mb-4 border-gray-300" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">Currency</Label>
                      <Input id="currency" type="text" placeholder="Currency" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="currencySymbol" className="block text-sm font-medium text-gray-700 mb-1">
                        Currency Symbol <span className="text-red-500">*</span>
                      </Label>
                      <Input id="currencySymbol" type="text" placeholder="Currency Symbol" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="enableFrontend" className="block text-sm font-medium text-gray-700 mb-1">
                        Enable Frontend <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="yes">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="examFinalResult" className="block text-sm font-medium text-gray-700 mb-1">
                        Exam final result <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="average">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="average">Average of All Exam</SelectItem>
                          <SelectItem value="highest">Highest Score</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                        Language <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="-select-">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-select-">-Select-</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">
                        Theme <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="-select-">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-select-">-Select-</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="onlineAdmission" className="block text-sm font-medium text-gray-700 mb-1">
                        Online Admission <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="-select-">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-select-">-Select-</SelectItem>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="enableRtl" className="block text-sm font-medium text-gray-700 mb-1">Enable RTL</Label>
                      <Select defaultValue="no">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <Label htmlFor="zoomApiKey" className="block text-sm font-medium text-gray-700 mb-1">Zoom Api Key</Label>
                      <Input id="zoomApiKey" type="text" placeholder="Zoom Api Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="zoomSecret" className="block text-sm font-medium text-gray-700 mb-1">Zoom Secret</Label>
                      <Input id="zoomSecret" type="text" placeholder="Zoom Secret" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="googleMap" className="block text-sm font-medium text-gray-700 mb-1">Google Map</Label>
                      <Input id="googleMap" type="text" placeholder="Google Map" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                  </div>
                </div>

                {/* Social Information Section */}
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Social Information:</h3>
                  <hr className="mb-4 border-gray-300" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="facebookUrl" className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</Label>
                      <Input id="facebookUrl" type="url" placeholder="Facebook URL" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="twitterUrl" className="block text-sm font-medium text-gray-700 mb-1">Twitter URL</Label>
                      <Input id="twitterUrl" type="url" placeholder="Twitter URL" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-1">Linkedin URL</Label>
                      <Input id="linkedinUrl" type="url" placeholder="Linkedin URL" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-700 mb-1">Youtube URL</Label>
                      <Input id="youtubeUrl" type="url" placeholder="Youtube URL" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="instagramUrl" className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</Label>
                      <Input id="instagramUrl" type="url" placeholder="Instagram URL" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                    <div>
                      <Label htmlFor="pinterestUrl" className="block text-sm font-medium text-gray-700 mb-1">Pinterest URL</Label>
                      <Input id="pinterestUrl" type="url" placeholder="Pinterest URL" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>
                  </div>
                </div>

                {/* Other Information Section */}
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Other Information:</h3>
                  <hr className="mb-4 border-gray-300" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="frontendLogo" className="block text-sm font-medium text-gray-700 mb-1">Frontend Logo</Label>
                      <div className="mt-1">
                        <Button type="button" variant="outline" className="flex items-center gap-2 border-gray-300">
                          Upload
                        </Button>
                        <p className="text-xs text-gray-500 mt-1">Dimension:- Max-W: 150px, Max-H: 90px</p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="adminLogo" className="block text-sm font-medium text-gray-700 mb-1">Admin Logo</Label>
                      <div className="mt-1">
                        <Button type="button" variant="outline" className="flex items-center gap-2 border-gray-300">
                          Upload
                        </Button>
                        <p className="text-xs text-gray-500 mt-1">Dimension:- Max-W: 100px, Max-H: 110px</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setActiveTab('list')} className="border-gray-300 text-black px-6 py-2">
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
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
