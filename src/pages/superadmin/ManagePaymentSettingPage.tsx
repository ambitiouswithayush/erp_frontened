import React, { useState } from "react";
import { Settings, Copy, FileText, FileSpreadsheet, File, Search, ChevronUp, ChevronDown, CreditCard, DollarSign, Banknote, Smartphone, Globe, List, SquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ManagePaymentSettingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedGateway, setSelectedGateway] = useState("paypal");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const paymentGateways = [
    { id: "paypal", name: "Paypal", icon: CreditCard },
    { id: "stripe", name: "Stripe", icon: DollarSign },
    { id: "payumoney", name: "PayUMoney", icon: Banknote },
    { id: "ccavenue", name: "CCAvenue", icon: Globe },
    { id: "paytm", name: "PayTM", icon: Smartphone },
    { id: "paystack", name: "Pay Stack", icon: CreditCard },
  ];

  const renderListTab = () => (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          <Button variant="outline" size="sm">
            <FileSpreadsheet className="h-4 w-4 mr-1" />
            Excel
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-1" />
            CSV
          </Button>
          <Button variant="outline" size="sm">
            <File className="h-4 w-4 mr-1" />
            PDF
          </Button>
          <Select defaultValue="10">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Show 10</SelectItem>
              <SelectItem value="25">Show 25</SelectItem>
              <SelectItem value="50">Show 50</SelectItem>
              <SelectItem value="100">Show 100</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search..." className="pl-8 w-64" />
        </div>
      </div>

      {/* Data Table */}
      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #SL
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    School
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 -mb-1" />
                      <ChevronDown className="h-3 w-3 -mt-1" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    Paypal
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 -mb-1" />
                      <ChevronDown className="h-3 w-3 -mt-1" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    PayUMoney
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 -mb-1" />
                      <ChevronDown className="h-3 w-3 -mt-1" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    CCAvenue
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 -mb-1" />
                      <ChevronDown className="h-3 w-3 -mt-1" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    PayTM
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 -mb-1" />
                      <ChevronDown className="h-3 w-3 -mt-1" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    Pay Stack
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3 -mb-1" />
                      <ChevronDown className="h-3 w-3 -mt-1" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing 0 to 0 of 0 entries
        </div>
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );

  const renderAddTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Column - Gateway Navigation */}
      <div className="md:col-span-1">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-2">
              {paymentGateways.map((gateway) => (
                <button
                  key={gateway.id}
                  onClick={() => setSelectedGateway(gateway.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedGateway === gateway.id
                      ? "bg-blue-100 text-blue-700 border-blue-200"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <gateway.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{gateway.name}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Configuration Form */}
      <div className="md:col-span-3">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <Label htmlFor="schoolName" className="block text-sm font-medium mb-1">
                  School Name <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select School" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school1">School 1</SelectItem>
                    <SelectItem value="school2">School 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="paypalEmail" className="block text-sm font-medium mb-1">
                  Paypal Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="paypalEmail"
                  type="email"
                  placeholder="Enter Paypal Email"
                />
              </div>

              <div>
                <Label htmlFor="isDemo" className="block text-sm font-medium mb-1">
                  Is Demo? <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="extraCharge" className="block text-sm font-medium mb-1">
                  Extra Charge (%) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="extraCharge"
                  type="number"
                  placeholder="0.00"
                />
              </div>

              <div>
                <Label htmlFor="isActive" className="block text-sm font-medium mb-1">
                  Is Active? <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* PayPal Logo */}
              <div className="flex justify-center">
                <div className="w-32 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PayPal</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-black text-white hover:bg-gray-800">
                  Submit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Manage Payment Setting
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
                  <DialogTitle>Payment Settings</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  {renderAddTab()}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {activeTab === 'list' && (
            <div className="px-6 py-4">
              {renderListTab()}
            </div>
          )}


        </CardContent>
      </Card>
    </div>
  );
};

export default ManagePaymentSettingPage;
