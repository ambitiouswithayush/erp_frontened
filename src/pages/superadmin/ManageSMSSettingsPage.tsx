import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, Settings, List, SquarePlus, Copy, FileText, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FilterBar } from "@/components/FilterBar";

const smsProviders = [
  { id: "twilio", name: "Twilio", logo: "/twilio-logo.svg" },
  { id: "clickatell", name: "Clickatell", logo: "" },
  { id: "bulk", name: "Bulk", logo: "" },
  { id: "msg91", name: "MSG91", logo: "" },
  { id: "plivo", name: "Plivo", logo: "" },
  { id: "textlocal", name: "Text Local", logo: "" },
  { id: "smscountry", name: "SMS Country", logo: "" },
  { id: "betasms", name: "Beta SMS", logo: "" },
  { id: "bulkpk", name: "Bulk PK", logo: "" },
  { id: "smscluster", name: "SMS Cluster", logo: "" },
  { id: "alphanet", name: "Alpha.net", logo: "" },
  { id: "bdbulk", name: "BD Bulk", logo: "" },
  { id: "mimsms", name: "Mim SMS", logo: "" },
  { id: "bulk360", name: "Bulk 360", logo: "" },
  { id: "smsto", name: "SMSTo", logo: "" },
];

export default function ManageSMSSettingsPage() {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedProvider, setSelectedProvider] = useState("twilio");
  const [selectedRows, setSelectedRows] = useState("15");

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Top Filter Bar */}
      <FilterBar />

      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Manage SMS Setting
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
                <Link to="/admin/sms" className="hover:underline font-semibold text-blue-800">SMS Setting</Link>
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
                      <TableHead className="border-r border-gray-200 text-white">Twilio</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">Bulk</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">MSG91</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">Text Local</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">SMS Country</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">Beta SMS</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">Bulk PK</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">Alpha.net</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">BD Bulk</TableHead>
                      <TableHead className="border-r border-gray-200 text-white">MIM SMS</TableHead>
                      <TableHead className="text-white">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={13} className="text-center text-gray-500 py-8">
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
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Left Sidebar - Provider List */}
                <div className="md:col-span-1 bg-gray-50 rounded-md p-4">
                  <div className="space-y-1">
                    {smsProviders.map((provider) => (
                      <button
                        key={provider.id}
                        onClick={() => setSelectedProvider(provider.id)}
                        className={`w-full text-left px-4 py-2 rounded flex items-center gap-2 ${
                          selectedProvider === provider.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Settings className="h-4 w-4" />
                        {provider.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column - Configuration Form */}
                <div className="md:col-span-3">
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setActiveTab('list'); }}>
                    <div className="bg-white p-6 rounded-md border border-gray-200">
                      <h3 className="text-lg font-bold mb-4 text-gray-800">
                        {smsProviders.find(p => p.id === selectedProvider)?.name} Configuration
                      </h3>

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

                        {selectedProvider === 'twilio' && (
                          <>
                            <div>
                              <Label htmlFor="accountSid" className="block text-sm font-medium text-gray-700 mb-1">
                                Account SID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="accountSid" type="text" placeholder="Account SID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="authToken" className="block text-sm font-medium text-gray-700 mb-1">
                                Auth Token <span className="text-red-500">*</span>
                              </Label>
                              <Input id="authToken" type="text" placeholder="Auth Token" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="fromNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                From Number <span className="text-red-500">*</span>
                              </Label>
                              <Input id="fromNumber" type="text" placeholder="From Number" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'clickatell' && (
                          <>
                            <div>
                              <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-red-500">*</span>
                              </Label>
                              <Input id="username" type="text" placeholder="Username" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password <span className="text-red-500">*</span>
                              </Label>
                              <Input id="password" type="password" placeholder="Password" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
                                Api Key <span className="text-red-500">*</span>
                              </Label>
                              <Input id="apiKey" type="text" placeholder="Api Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="fromNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                From Number <span className="text-red-500">*</span>
                              </Label>
                              <Input id="fromNumber" type="text" placeholder="From Number" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="moNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                Mo Number <span className="text-red-500">*</span>
                              </Label>
                              <Input id="moNumber" type="text" placeholder="Mo Number" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'bulk' && (
                          <>
                            <div>
                              <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-red-500">*</span>
                              </Label>
                              <Input id="username" type="text" placeholder="Username" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password <span className="text-red-500">*</span>
                              </Label>
                              <Input id="password" type="password" placeholder="Password" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'msg91' && (
                          <>
                            <div>
                              <Label htmlFor="authKey" className="block text-sm font-medium text-gray-700 mb-1">
                                Auth Key <span className="text-red-500">*</span>
                              </Label>
                              <Input id="authKey" type="text" placeholder="Auth Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="senderId" className="block text-sm font-medium text-gray-700 mb-1">
                                Sender ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="senderId" type="text" placeholder="Sender ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'plivo' && (
                          <>
                            <div>
                              <Label htmlFor="authId" className="block text-sm font-medium text-gray-700 mb-1">
                                Auth ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="authId" type="text" placeholder="Auth ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="authToken" className="block text-sm font-medium text-gray-700 mb-1">
                                Auth Token <span className="text-red-500">*</span>
                              </Label>
                              <Input id="authToken" type="text" placeholder="Auth Token" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="fromNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                From Number <span className="text-red-500">*</span>
                              </Label>
                              <Input id="fromNumber" type="text" placeholder="From Number" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'textlocal' && (
                          <>
                            <div>
                              <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-red-500">*</span>
                              </Label>
                              <Input id="username" type="text" placeholder="Username" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="hashKey" className="block text-sm font-medium text-gray-700 mb-1">
                                Hash Key <span className="text-red-500">*</span>
                              </Label>
                              <Input id="hashKey" type="text" placeholder="Hash Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="senderId" className="block text-sm font-medium text-gray-700 mb-1">
                                Sender ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="senderId" type="text" placeholder="Sender ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'smscountry' && (
                          <>
                            <div>
                              <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-red-500">*</span>
                              </Label>
                              <Input id="username" type="text" placeholder="Username" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password <span className="text-red-500">*</span>
                              </Label>
                              <Input id="password" type="password" placeholder="Password" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="senderId" className="block text-sm font-medium text-gray-700 mb-1">
                                Sender ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="senderId" type="text" placeholder="Sender ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'betasms' && (
                          <>
                            <div>
                              <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-red-500">*</span>
                              </Label>
                              <Input id="username" type="text" placeholder="Username" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password <span className="text-red-500">*</span>
                              </Label>
                              <Input id="password" type="password" placeholder="Password" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="senderId" className="block text-sm font-medium text-gray-700 mb-1">
                                Sender ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="senderId" type="text" placeholder="Sender ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'bulkpk' && (
                          <>
                            <div>
                              <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-red-500">*</span>
                              </Label>
                              <Input id="username" type="text" placeholder="Username" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password <span className="text-red-500">*</span>
                              </Label>
                              <Input id="password" type="password" placeholder="Password" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="senderId" className="block text-sm font-medium text-gray-700 mb-1">
                                Sender ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="senderId" type="text" placeholder="Sender ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'smscluster' && (
                          <>
                            <div>
                              <Label htmlFor="authKey" className="block text-sm font-medium text-gray-700 mb-1">
                                Auth Key <span className="text-red-500">*</span>
                              </Label>
                              <Input id="authKey" type="text" placeholder="Auth Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="senderId" className="block text-sm font-medium text-gray-700 mb-1">
                                Sender ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="senderId" type="text" placeholder="Sender ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="router" className="block text-sm font-medium text-gray-700 mb-1">
                                Router <span className="text-red-500">*</span>
                              </Label>
                              <Input id="router" type="text" placeholder="Router" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'alphanet' && (
                          <>
                            <div>
                              <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-red-500">*</span>
                              </Label>
                              <Input id="username" type="text" placeholder="Username" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="hashKey" className="block text-sm font-medium text-gray-700 mb-1">
                                Hash Key <span className="text-red-500">*</span>
                              </Label>
                              <Input id="hashKey" type="text" placeholder="Hash Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="smsType" className="block text-sm font-medium text-gray-700 mb-1">
                                SMS Type <span className="text-red-500">*</span>
                              </Label>
                              <Select defaultValue="text">
                                <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="text">Text</SelectItem>
                                  <SelectItem value="unicode">Unicode</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'bdbulk' && (
                          <>
                            <div>
                              <Label htmlFor="hashKey" className="block text-sm font-medium text-gray-700 mb-1">
                                Hash Key <span className="text-red-500">*</span>
                              </Label>
                              <Input id="hashKey" type="text" placeholder="Hash Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="smsType" className="block text-sm font-medium text-gray-700 mb-1">
                                SMS Type <span className="text-red-500">*</span>
                              </Label>
                              <Select defaultValue="text">
                                <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="text">Text</SelectItem>
                                  <SelectItem value="unicode">Unicode</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'mimsms' && (
                          <>
                            <div>
                              <Label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
                                Api Key <span className="text-red-500">*</span>
                              </Label>
                              <Input id="apiKey" type="text" placeholder="Api Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="senderId" className="block text-sm font-medium text-gray-700 mb-1">
                                Sender ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="senderId" type="text" placeholder="Sender ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="smsType" className="block text-sm font-medium text-gray-700 mb-1">
                                SMS Type <span className="text-red-500">*</span>
                              </Label>
                              <Select defaultValue="text">
                                <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="text">Text</SelectItem>
                                  <SelectItem value="unicode">Unicode</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'bulk360' && (
                          <>
                            <div>
                              <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-red-500">*</span>
                              </Label>
                              <Input id="username" type="text" placeholder="Username" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password <span className="text-red-500">*</span>
                              </Label>
                              <Input id="password" type="password" placeholder="Password" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="fromNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                From Number <span className="text-red-500">*</span>
                              </Label>
                              <Input id="fromNumber" type="text" placeholder="From Number" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider === 'smsto' && (
                          <>
                            <div>
                              <Label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
                                Api Key <span className="text-red-500">*</span>
                              </Label>
                              <Input id="apiKey" type="text" placeholder="Api Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="senderId" className="block text-sm font-medium text-gray-700 mb-1">
                                Sender ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="senderId" type="text" placeholder="Sender ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        {selectedProvider !== 'twilio' && selectedProvider !== 'clickatell' && selectedProvider !== 'bulk' && selectedProvider !== 'msg91' && selectedProvider !== 'plivo' && selectedProvider !== 'textlocal' && selectedProvider !== 'smscountry' && selectedProvider !== 'betasms' && selectedProvider !== 'bulkpk' && selectedProvider !== 'smscluster' && selectedProvider !== 'alphanet' && selectedProvider !== 'bdbulk' && selectedProvider !== 'mimsms' && selectedProvider !== 'bulk360' && selectedProvider !== 'smsto' && (
                          <>
                            <div>
                              <Label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
                                API Key <span className="text-red-500">*</span>
                              </Label>
                              <Input id="apiKey" type="text" placeholder="API Key" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="apiSecret" className="block text-sm font-medium text-gray-700 mb-1">
                                API Secret <span className="text-red-500">*</span>
                              </Label>
                              <Input id="apiSecret" type="text" placeholder="API Secret" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>

                            <div>
                              <Label htmlFor="senderId" className="block text-sm font-medium text-gray-700 mb-1">
                                Sender ID <span className="text-red-500">*</span>
                              </Label>
                              <Input id="senderId" type="text" placeholder="Sender ID" className="w-full border-gray-300 rounded bg-white px-3 py-2" />
                            </div>
                          </>
                        )}

                        <div>
                          <Label htmlFor="isActive" className="block text-sm font-medium text-gray-700 mb-1">
                            Is Active? <span className="text-red-500">*</span>
                          </Label>
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

                        {selectedProvider === 'twilio' && (
                          <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                            <div className="text-2xl font-bold text-red-600">twilio</div>
                            <div className="text-xs text-gray-600">CLOUD COMMUNICATIONS</div>
                          </div>
                        )}

                        {selectedProvider === 'clickatell' && (
                          <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                            <div className="text-3xl font-bold text-blue-600">Clickatell</div>
                            <div className="text-xs text-gray-600 mt-1">SMS GATEWAY PROVIDER</div>
                          </div>
                        )}

                        {selectedProvider === 'bulk' && (
                          <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                            <div className="text-3xl font-bold text-orange-600">bulksms.com</div>
                            <div className="text-xs text-gray-600 mt-1">BULK SMS PROVIDER</div>
                          </div>
                        )}

                        {selectedProvider === 'msg91' && (
                          <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                            <div className="text-3xl font-bold text-green-600">MSG91</div>
                            <div className="text-xs text-gray-600 mt-1">SMS & COMMUNICATION API</div>
                          </div>
                        )}

                        {selectedProvider === 'plivo' && (
                          <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                            <div className="text-3xl font-bold text-purple-600">plivo</div>
                            <div className="text-xs text-gray-600 mt-1">SMS COMMUNICATION PLATFORM</div>
                          </div>
                        )}

                        {selectedProvider === 'textlocal' && (
                          <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                            <div className="text-3xl font-bold text-indigo-600">text local</div>
                            <div className="text-xs text-gray-600 mt-1">SMS GATEWAY SERVICE</div>
                          </div>
                        )}

                        {selectedProvider === 'smscountry' && (
                          <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                            <div className="text-3xl font-bold text-teal-600">SMS Country</div>
                            <div className="text-xs text-gray-600 mt-1">GLOBAL SMS PROVIDER</div>
                          </div>
                        )}

                        {selectedProvider === 'betasms' && (
                          <>
                            <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                              <div className="text-3xl font-bold text-yellow-600">betasms.com</div>
                              <div className="text-xs text-gray-600 mt-1">SMS GATEWAY</div>
                            </div>
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                              <p className="text-sm text-gray-700">Nigeria & West African SMS Gateway</p>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'bulkpk' && (
                          <>
                            <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                              <div className="text-3xl font-bold text-pink-600">BulkSMS.com.pk</div>
                              <div className="text-xs text-gray-600 mt-1">PAKISTANI SMS GATEWAY</div>
                            </div>
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                              <p className="text-sm text-gray-700">Pakistani SMS Gateway</p>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'smscluster' && (
                          <>
                            <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                              <div className="text-3xl font-bold text-cyan-600">smscluster</div>
                              <div className="text-xs text-gray-600 mt-1">SMS GATEWAY</div>
                            </div>
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                              <p className="text-sm text-gray-700">Pakistani SMS Gateway</p>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'alphanet' && (
                          <>
                            <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                              <div className="text-3xl font-bold text-emerald-600">alpha.net.bd</div>
                              <div className="text-xs text-gray-600 mt-1">SMS GATEWAY</div>
                            </div>
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                              <p className="text-sm text-gray-700">Bangladeshi SMS Gateway</p>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'bdbulk' && (
                          <>
                            <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                              <div className="text-3xl font-bold text-blue-700">BDSMS.NET</div>
                              <div className="text-xs text-gray-600 mt-1">a service of Green Web BD</div>
                            </div>
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                              <p className="text-sm text-gray-700">Bangladeshi SMS Gateway</p>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'mimsms' && (
                          <>
                            <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                              <div className="text-4xl font-bold text-orange-600">sms</div>
                              <div className="text-xs text-gray-600 mt-1">MIM SMS</div>
                            </div>
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                              <p className="text-sm text-gray-700">Bangladeshi SMS Gateway</p>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'bulk360' && (
                          <>
                            <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                              <div className="text-3xl font-bold text-blue-600">Bulk360</div>
                              <div className="text-xs text-gray-600 mt-1">SMS GATEWAY</div>
                            </div>
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                              <p className="text-sm text-gray-700">Malaysian SMS Gateway</p>
                            </div>
                          </>
                        )}

                        {selectedProvider === 'smsto' && (
                          <>
                            <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                              <div className="text-3xl font-bold text-green-600">SMS.to</div>
                              <div className="text-xs text-gray-600 mt-1">SMS GATEWAY</div>
                            </div>
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                              <p className="text-sm text-gray-700">Multinational SMS Gateway</p>
                            </div>
                          </>
                        )}
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
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
