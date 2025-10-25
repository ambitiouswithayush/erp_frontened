import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, Mail, List, SquarePlus, Copy, FileText, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FilterBar } from "@/components/FilterBar";

export default function ManageEmailSettingsPage() {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedRows, setSelectedRows] = useState("15");

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Top Filter Bar */}
      <FilterBar />

      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Manage Email Setting
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">

          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <Link to="/admin/general" className="hover:underline">General Setting</Link>
                <span>|</span>
                <Link to="/admin/schools" className="hover:underline">Manage School</Link>
                <span>|</span>
                <Link to="/admin/payment" className="hover:underline">Payment Setting</Link>
                <span>|</span>
                <Link to="/admin/sms" className="hover:underline">SMS Setting</Link>
                <span>|</span>
                <Link to="/admin/email" className="hover:underline font-semibold text-blue-800">Email Setting</Link>
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
              <div className="px-6 py-4 bg-white flex items-center justify-between flex-wrap">
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
                    <TableRow className="border-b bg-gray-700">
                      <TableHead className="border-r border-gray-200 text-white">#SL</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">School</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">Email Protocol</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">Email Type</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">Char Set</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">From Name</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">From Email</TableHead>
                      <TableHead className="text-white">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={8} className="text-center text-gray-500 py-8">
                        No data available in table
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Table Footer / Pagination */}
              <div className="px-6 py-4 bg-white flex items-center justify-between border-t flex-wrap">
                <span className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Next
                  </Button>
                </div>
              </div>

              {/* Pagination Bar */}
              <div className="px-6 pb-4 bg-white">
                <div className="w-full h-2 bg-gray-200 rounded"></div>
              </div>
            </>
          )}

          {activeTab === 'add' && (
            <div className="px-6 py-6 bg-white">
              <form className="space-y-6 max-w-2xl" onSubmit={(e) => { e.preventDefault(); setActiveTab('list'); }}>
                <div className="bg-white p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Email Configuration</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                        School Name <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="-select-">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-select-">-Select School-</SelectItem>
                          <SelectItem value="school1">School 1</SelectItem>
                          <SelectItem value="school2">School 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="emailProtocol" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Protocol <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="-select-">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-select-">-Select-</SelectItem>
                          <SelectItem value="smtp">SMTP</SelectItem>
                          <SelectItem value="sendmail">Sendmail</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="smtpHost" className="block text-sm font-medium text-gray-700 mb-1">
                        SMTP Host <span className="text-red-500">*</span>
                      </Label>
                      <Input id="smtpHost" type="text" placeholder="SMTP Host" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>

                    <div>
                      <Label htmlFor="smtpPort" className="block text-sm font-medium text-gray-700 mb-1">
                        SMTP Port <span className="text-red-500">*</span>
                      </Label>
                      <Input id="smtpPort" type="text" placeholder="SMTP Port" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>

                    <div>
                      <Label htmlFor="smtpUsername" className="block text-sm font-medium text-gray-700 mb-1">
                        SMTP Username <span className="text-red-500">*</span>
                      </Label>
                      <Input id="smtpUsername" type="text" placeholder="SMTP Username" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>

                    <div>
                      <Label htmlFor="smtpPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        SMTP Password <span className="text-red-500">*</span>
                      </Label>
                      <Input id="smtpPassword" type="password" placeholder="SMTP Password" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>

                    <div>
                      <Label htmlFor="smtpSecurity" className="block text-sm font-medium text-gray-700 mb-1">
                        SMTP Security
                      </Label>
                      <Select defaultValue="-select-">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-select-">-Select-</SelectItem>
                          <SelectItem value="tls">TLS</SelectItem>
                          <SelectItem value="ssl">SSL</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="smtpTimeout" className="block text-sm font-medium text-gray-700 mb-1">
                        SMTP Timeout
                      </Label>
                      <Input id="smtpTimeout" type="text" placeholder="SMTP Timeout" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                      <p className="text-xs text-blue-600 mt-1">SMTP Timeout (in seconds) [ 5 - 10 ].</p>
                    </div>

                    <div>
                      <Label htmlFor="emailType" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Type
                      </Label>
                      <Select defaultValue="-select-">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-select-">-Select-</SelectItem>
                          <SelectItem value="html">HTML</SelectItem>
                          <SelectItem value="text">Text</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="charSet" className="block text-sm font-medium text-gray-700 mb-1">
                        Char Set
                      </Label>
                      <Select defaultValue="-select-">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-select-">-Select-</SelectItem>
                          <SelectItem value="utf-8">UTF-8</SelectItem>
                          <SelectItem value="iso-8859-1">ISO-8859-1</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                        Priority
                      </Label>
                      <Select defaultValue="-select-">
                        <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-select-">-Select-</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="fromName" className="block text-sm font-medium text-gray-700 mb-1">
                        From Name
                      </Label>
                      <Input id="fromName" type="text" placeholder="From Name" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                    </div>

                    <div>
                      <Label htmlFor="fromEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        From Email
                      </Label>
                      <Input id="fromEmail" type="email" placeholder="From Email" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
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
