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

export default function ManageSchools() {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedRows, setSelectedRows] = useState("15");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

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
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
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
                <a href="#" className="hover:underline">Role Permission</a>
                <span>|</span>
                <a href="#" className="hover:underline">Super Admin</a>
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
                  <DialogTitle>School Settings</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <form className="space-y-6">
                    {/* Basic Information Section */}
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                      <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                          <Label htmlFor="schoolUrl" className="block text-sm font-medium">
                            School URL <span className="text-red-500">*</span>
                          </Label>
                          <Input id="schoolUrl" type="text" placeholder="e.g., south-point" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                          <p className="text-xs text-gray-500 mt-1">No space, no capital letter, no special character.</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <Label htmlFor="schoolCode" className="block text-sm font-medium">School Code</Label>
                          <Input id="schoolCode" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="schoolName" className="block text-sm font-medium">
                            School Name <span className="text-red-500">*</span>
                          </Label>
                          <Input id="schoolName" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="address" className="block text-sm font-medium">
                            Address <span className="text-red-500">*</span>
                          </Label>
                          <Input id="address" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="block text-sm font-medium">
                            Phone <span className="text-red-500">*</span>
                          </Label>
                          <Input id="phone" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="registrationDate" className="block text-sm font-medium">Registration Date</Label>
                          <Input id="registrationDate" type="date" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="email" className="block text-sm font-medium">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input id="email" type="email" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="fax" className="block text-sm font-medium">Fax</Label>
                          <Input id="fax" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="footer" className="block text-sm font-medium">Footer</Label>
                          <Input id="footer" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                      </div>
                    </div>

                    {/* Setting Information Section */}
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h3 className="text-lg font-semibold mb-4">Setting Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <Label htmlFor="currency" className="block text-sm font-medium">Currency</Label>
                          <Input id="currency" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="currencySymbol" className="block text-sm font-medium">
                            Currency Symbol <span className="text-red-500">*</span>
                          </Label>
                          <Input id="currencySymbol" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="enableFrontend" className="block text-sm font-medium">
                            Enable Frontend <span className="text-red-500">*</span>
                          </Label>
                          <Select>
                            <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="examFinalResult" className="block text-sm font-medium">
                            Exam Final Result <span className="text-red-500">*</span>
                          </Label>
                          <Select>
                            <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="average">Average of All Exam</SelectItem>
                              <SelectItem value="highest">Highest Score</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="language" className="block text-sm font-medium">Language</Label>
                          <Select>
                            <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="spanish">Spanish</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="theme" className="block text-sm font-medium">Theme</Label>
                          <Select>
                            <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="onlineAdmission" className="block text-sm font-medium">Online Admission</Label>
                          <Select>
                            <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="enableRtl" className="block text-sm font-medium">Enable RTL</Label>
                          <Select>
                            <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Zoom Integration Section */}
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h3 className="text-lg font-semibold mb-4">Zoom Integration</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="zoomApiKey" className="block text-sm font-medium">Zoom API Key</Label>
                          <Input id="zoomApiKey" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="zoomSecret" className="block text-sm font-medium">Zoom Secret</Label>
                          <Input id="zoomSecret" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                      </div>
                    </div>

                    {/* Google Map Section */}
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h3 className="text-lg font-semibold mb-4">Google Map</h3>
                      <div>
                        <Label htmlFor="googleMap" className="block text-sm font-medium">Embed Map Iframe</Label>
                        <textarea id="googleMap" rows={4} className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" placeholder="Paste your Google Map embed code here"></textarea>
                      </div>
                    </div>

                    {/* Social Information Section */}
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h3 className="text-lg font-semibold mb-4">Social Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="facebookUrl" className="block text-sm font-medium">Facebook URL</Label>
                          <Input id="facebookUrl" type="url" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="twitterUrl" className="block text-sm font-medium">Twitter URL</Label>
                          <Input id="twitterUrl" type="url" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="linkedinUrl" className="block text-sm font-medium">LinkedIn URL</Label>
                          <Input id="linkedinUrl" type="url" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="youtubeUrl" className="block text-sm font-medium">YouTube URL</Label>
                          <Input id="youtubeUrl" type="url" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="instagramUrl" className="block text-sm font-medium">Instagram URL</Label>
                          <Input id="instagramUrl" type="url" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                        <div>
                          <Label htmlFor="pinterestUrl" className="block text-sm font-medium">Pinterest URL</Label>
                          <Input id="pinterestUrl" type="url" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                        </div>
                      </div>
                    </div>

                    {/* Other Information Section */}
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h3 className="text-lg font-semibold mb-4">Other Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="frontendLogo" className="block text-sm font-medium">Upload Frontend Logo</Label>
                          <Input id="frontendLogo" type="file" accept="image/*" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                          <p className="text-xs text-gray-500 mt-1">Max-width: 150px, Max-height: 90px</p>
                        </div>
                        <div>
                          <Label htmlFor="adminLogo" className="block text-sm font-medium">Upload Admin Logo</Label>
                          <Input id="adminLogo" type="file" accept="image/*" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
                          <p className="text-xs text-gray-500 mt-1">Max-width: 100px, Max-height: 110px</p>
                        </div>
                      </div>
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


        </CardContent>
      </Card>
    </div>
  );
}
