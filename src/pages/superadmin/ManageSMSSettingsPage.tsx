import { useState } from "react";
import { ChevronUp, Settings, SquarePlus, Copy, FileText, Download, Search, Eye, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ManageSMSSettingsPage() {
  const [selectedRows, setSelectedRows] = useState("15");
  const [selectedProvider, setSelectedProvider] = useState("twilio");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const smsSettings = [
    {
      sl: 1,
      school: "School A",
      provider: "Twilio",
      status: "Active"
    },
    {
      sl: 2,
      school: "School B",
      provider: "Clickatell",
      status: "Inactive"
    }
  ];

  const renderProviderForm = () => {
    switch (selectedProvider) {
      case "twilio":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img src="/twilio-logo.png" alt="Twilio" className="w-8 h-8" />
              <span className="font-semibold">Twilio Settings</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="accountSid" className="block text-sm font-medium">Account SID <span className="text-red-500">*</span></Label>
                <Input id="accountSid" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
              </div>
              <div>
                <Label htmlFor="authToken" className="block text-sm font-medium">Auth Token <span className="text-red-500">*</span></Label>
                <Input id="authToken" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
              </div>
              <div>
                <Label htmlFor="phoneNumber" className="block text-sm font-medium">Phone Number <span className="text-red-500">*</span></Label>
                <Input id="phoneNumber" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
              </div>
            </div>
          </div>
        );
      case "clickatell":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img src="/clickatell-logo.png" alt="Clickatell" className="w-8 h-8" />
              <span className="font-semibold">Clickatell Settings</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="apiKey" className="block text-sm font-medium">API Key <span className="text-red-500">*</span></Label>
                <Input id="apiKey" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
              </div>
              <div>
                <Label htmlFor="username" className="block text-sm font-medium">Username <span className="text-red-500">*</span></Label>
                <Input id="username" type="text" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
              </div>
              <div>
                <Label htmlFor="password" className="block text-sm font-medium">Password <span className="text-red-500">*</span></Label>
                <Input id="password" type="password" className="mt-1 block w-full border-gray-300 bg-white px-3 py-2" />
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a provider</div>;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Manage SMS Settings
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
                <a href="#" className="hover:underline font-semibold text-blue-800">SMS Setting</a>
                <span>|</span>
                <a href="#" className="hover:underline">Email Setting</a>
              </div>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="px-6 py-4 bg-white flex gap-2">
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
              <DialogContent className="w-full max-w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add SMS Setting</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Navigation */}
                    <div className="lg:col-span-1">
                      <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-4">SMS Providers</h3>
                        <div className="space-y-2">
                          <Button
                            variant={selectedProvider === 'twilio' ? 'default' : 'ghost'}
                            className="w-full justify-start"
                            onClick={() => setSelectedProvider('twilio')}
                          >
                            Twilio
                          </Button>
                          <Button
                            variant={selectedProvider === 'clickatell' ? 'default' : 'ghost'}
                            className="w-full justify-start"
                            onClick={() => setSelectedProvider('clickatell')}
                          >
                            Clickatell
                          </Button>
                          <Button
                            variant={selectedProvider === 'nexmo' ? 'default' : 'ghost'}
                            className="w-full justify-start"
                            onClick={() => setSelectedProvider('nexmo')}
                          >
                            Nexmo
                          </Button>
                          <Button
                            variant={selectedProvider === 'msg91' ? 'default' : 'ghost'}
                            className="w-full justify-start"
                            onClick={() => setSelectedProvider('msg91')}
                          >
                            MSG91
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:col-span-2">
                      <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-4">Configuration</h3>
                        <form className="space-y-4">
                          {renderProviderForm()}
                          <div className="flex justify-end gap-4 pt-4">
                            <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                              Cancel
                            </Button>
                            <Button type="submit" className="bg-black text-white">
                              Submit
                            </Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* List View */}
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
                    <TableHead className="border-r border-gray-200">School</TableHead>
                    <TableHead className="border-r border-gray-200">SMS Provider</TableHead>
                    <TableHead className="border-r border-gray-200">Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {smsSettings.map((setting) => (
                    <TableRow key={setting.sl} className="border-b">
                      <TableCell className="border-r border-gray-200">{setting.sl}</TableCell>
                      <TableCell className="border-r border-gray-200">{setting.school}</TableCell>
                      <TableCell className="border-r border-gray-200">{setting.provider}</TableCell>
                      <TableCell className="border-r border-gray-200">{setting.status}</TableCell>
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
              <span className="text-sm text-gray-600">Showing 1 to {smsSettings.length} of {smsSettings.length} entries</span>
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
        </CardContent>
      </Card>
    </div>
  );
}
