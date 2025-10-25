import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Settings, Copy, FileText, FileSpreadsheet, File, Search, ChevronUp, ChevronDown, CreditCard, List, SquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterBar } from "@/components/FilterBar";

const ManagePaymentSettingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [selectedGateway, setSelectedGateway] = useState("paypal");

  const paymentGateways = [
    { id: "paypal", name: "Paypal", icon: Settings },
    { id: "stripe", name: "Stripe", icon: Settings },
    { id: "payumoney", name: "PayUMoney", icon: Settings },
    { id: "ccavenue", name: "CCAvenue", icon: Settings },
    { id: "paytm", name: "PayTM", icon: Settings },
    { id: "paystack", name: "Pay Stack", icon: Settings },
    { id: "jazzcash", name: "Jazz Cash", icon: Settings },
    { id: "sslcommerz", name: "SSL Commerz", icon: Settings },
    { id: "dbbl", name: "DBBL", icon: Settings },
    { id: "midtrans", name: "Midtrans", icon: Settings },
    { id: "instamojo", name: "Insta Mojo", icon: Settings },
    { id: "flutterwave", name: "Flutter Wave", icon: Settings },
    { id: "ipay", name: "iPay", icon: Settings },
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
      <div className="md:col-span-1 bg-gray-50 rounded-md p-4">
        <div className="space-y-1">
          {paymentGateways.map((gateway) => (
            <button
              key={gateway.id}
              onClick={() => setSelectedGateway(gateway.id)}
              className={`w-full text-left px-4 py-2 rounded flex items-center gap-2 ${
                selectedGateway === gateway.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Settings className="h-4 w-4" />
              {gateway.name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Column - Configuration Form */}
      <div className="md:col-span-3">
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setActiveTab('list'); }}>
          <div className="bg-white p-6 rounded-md border border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              {paymentGateways.find(g => g.id === selectedGateway)?.name} Configuration
            </h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">
                  School Name <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="--select--">
                  <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="--select--">--Select School--</SelectItem>
                    <SelectItem value="school1">School 1</SelectItem>
                    <SelectItem value="school2">School 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedGateway === 'paypal' && (
                <>
                  <div>
                    <Label htmlFor="paypalEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Paypal Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="paypalEmail"
                      type="email"
                      placeholder="Paypal Email"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'stripe' && (
                <>
                  <div>
                    <Label htmlFor="secretKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Secret Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secretKey"
                      type="text"
                      placeholder="Secret Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="publishableKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Publishable Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="publishableKey"
                      type="text"
                      placeholder="Publishable Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'payumoney' && (
                <>
                  <div>
                    <Label htmlFor="payumoneyKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Payumoney Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="payumoneyKey"
                      type="text"
                      placeholder="Payumoney Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="keySalt" className="block text-sm font-medium text-indigo-900 mb-1">
                      Key Salt <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="keySalt"
                      type="text"
                      placeholder="Key Salt"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'ccavenue' && (
                <>
                  <div>
                    <Label htmlFor="merchantId" className="block text-sm font-medium text-indigo-900 mb-1">
                      Merchant ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="merchantId"
                      type="text"
                      placeholder="Merchant ID"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="workingKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Working Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="workingKey"
                      type="text"
                      placeholder="Working Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="accessCode" className="block text-sm font-medium text-indigo-900 mb-1">
                      Access Code <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="accessCode"
                      type="text"
                      placeholder="Access Code"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'paytm' && (
                <>
                  <div>
                    <Label htmlFor="merchantKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Merchant Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="merchantKey"
                      type="text"
                      placeholder="Merchant Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="merchantMid" className="block text-sm font-medium text-indigo-900 mb-1">
                      Merchant MID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="merchantMid"
                      type="text"
                      placeholder="Merchant MID"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="website" className="block text-sm font-medium text-indigo-900 mb-1">
                      Website <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="website"
                      type="text"
                      placeholder="Website"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="industryType" className="block text-sm font-medium text-indigo-900 mb-1">
                      Industry Type <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="industryType"
                      type="text"
                      placeholder="Industry Type"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'paystack' && (
                <>
                  <div>
                    <Label htmlFor="secretKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Secret Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secretKey"
                      type="text"
                      placeholder="Secret Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="publicKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Public Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="publicKey"
                      type="text"
                      placeholder="Public Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'jazzcash' && (
                <>
                  <div>
                    <Label htmlFor="merchantId" className="block text-sm font-medium text-indigo-900 mb-1">
                      Merchant ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="merchantId"
                      type="text"
                      placeholder="Merchant ID"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="block text-sm font-medium text-indigo-900 mb-1">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="password"
                      type="text"
                      placeholder="Password"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="keySalt" className="block text-sm font-medium text-indigo-900 mb-1">
                      Key Salt <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="keySalt"
                      type="text"
                      placeholder="Key Salt"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'sslcommerz' && (
                <>
                  <div>
                    <Label htmlFor="storeId" className="block text-sm font-medium text-indigo-900 mb-1">
                      Store ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="storeId"
                      type="text"
                      placeholder="Store ID"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="block text-sm font-medium text-indigo-900 mb-1">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="password"
                      type="text"
                      placeholder="Password"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'dbbl' && (
                <>
                  <div>
                    <Label htmlFor="userId" className="block text-sm font-medium text-indigo-900 mb-1">
                      User ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="userId"
                      type="text"
                      placeholder="User ID"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="block text-sm font-medium text-indigo-900 mb-1">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="password"
                      type="text"
                      placeholder="Password"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="submerName" className="block text-sm font-medium text-indigo-900 mb-1">
                      Submer Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="submerName"
                      type="text"
                      placeholder="Submer Name"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="submerId" className="block text-sm font-medium text-indigo-900 mb-1">
                      Submer ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="submerId"
                      type="text"
                      placeholder="Submer ID"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="terminalId" className="block text-sm font-medium text-indigo-900 mb-1">
                      Terminal ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="terminalId"
                      type="text"
                      placeholder="Terminal ID"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'midtrans' && (
                <>
                  <div>
                    <Label htmlFor="clientKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Client Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="clientKey"
                      type="text"
                      placeholder="Client Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serverKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Server Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="serverKey"
                      type="text"
                      placeholder="Server Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'instamojo' && (
                <>
                  <div>
                    <Label htmlFor="apiKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Api Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="apiKey"
                      type="text"
                      placeholder="Api Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="authToken" className="block text-sm font-medium text-indigo-900 mb-1">
                      Auth Token <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="authToken"
                      type="text"
                      placeholder="Auth Token"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="keySalt" className="block text-sm font-medium text-indigo-900 mb-1">
                      Key Salt <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="keySalt"
                      type="text"
                      placeholder="Key Salt"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'flutterwave' && (
                <>
                  <div>
                    <Label htmlFor="publicKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Public Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="publicKey"
                      type="text"
                      placeholder="Public Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="secretKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Secret Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secretKey"
                      type="text"
                      placeholder="Secret Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              {selectedGateway === 'ipay' && (
                <>
                  <div>
                    <Label htmlFor="vendorId" className="block text-sm font-medium text-indigo-900 mb-1">
                      Vendor ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="vendorId"
                      type="text"
                      placeholder="Vendor ID"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hashKey" className="block text-sm font-medium text-indigo-900 mb-1">
                      Hash Key <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="hashKey"
                      type="text"
                      placeholder="Hash Key"
                      className="w-full border-gray-300 rounded bg-white px-3 py-2"
                    />
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="isDemo" className="block text-sm font-medium text-gray-700 mb-1">
                  Is Demo? <span className="text-red-500">*</span>
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
                <Label htmlFor="extraCharge" className="block text-sm font-medium text-gray-700 mb-1">
                  Extra Charge (%)
                </Label>
                <Input
                  id="extraCharge"
                  type="text"
                  placeholder={selectedGateway === 'stripe' ? 'Stripe Extra Charge' : 'Extra Charge'}
                  className="w-full border-gray-300 rounded bg-white px-3 py-2"
                />
              </div>

              <div>
                <Label htmlFor="isActive" className="block text-sm font-medium text-gray-700 mb-1">
                  Is Active? <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="--select--">
                  <SelectTrigger className="w-full border-gray-300 rounded bg-white px-3 py-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="--select--">--Select--</SelectItem>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Logo */}
              {selectedGateway === 'paypal' && (
                <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                  <div className="text-3xl font-bold text-blue-600">PayPal</div>
                  <div className="text-xs text-gray-600 mt-1">PAYMENT GATEWAY</div>
                </div>
              )}

              {selectedGateway === 'stripe' && (
                <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                  <div className="text-4xl font-bold text-gray-800">stripe</div>
                </div>
              )}

              {selectedGateway === 'payumoney' && (
                <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                  <div className="text-4xl font-bold">
                    <span className="text-lime-500">Pay</span>
                    <span className="text-lime-600">U</span>
                    <span className="text-lime-500">money</span>
                  </div>
                </div>
              )}

              {selectedGateway === 'ccavenue' && (
                <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                  <div className="text-4xl font-bold">
                    <span className="text-blue-500">CC</span>
                    <span className="text-gray-800">Avenue</span>
                  </div>
                </div>
              )}

              {selectedGateway === 'paytm' && (
                <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                  <div className="text-4xl font-bold">
                    <span className="text-blue-700">pay</span>
                    <span className="text-blue-400">tm</span>
                  </div>
                </div>
              )}

              {selectedGateway === 'paystack' && (
                <>
                  <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                    <div className="text-4xl font-bold text-gray-900">paystack</div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                    <p className="text-sm text-gray-700">Nigeria & African Payment Gateway</p>
                  </div>
                </>
              )}

              {selectedGateway === 'jazzcash' && (
                <>
                  <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                    <div className="text-4xl font-bold">
                      <span className="text-yellow-500">Jazz</span>
                      <span className="text-orange-500">Cash</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                    <p className="text-sm text-gray-700">Pakistani Payment Gateway</p>
                  </div>
                </>
              )}

              {selectedGateway === 'sslcommerz' && (
                <>
                  <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 rounded-full">
                      <div className="text-3xl font-bold text-white">SSLCommerz</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                    <p className="text-sm text-gray-700">Bangladeshi Payment Gateway</p>
                  </div>
                </>
              )}

              {selectedGateway === 'dbbl' && (
                <>
                  <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                    <div className="text-3xl font-bold text-gray-800">Dutch-Bangla Bank</div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                    <p className="text-sm text-gray-700">Return URL: https://project root url/accounting/gateway/dbbl</p>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                    <p className="text-sm text-gray-700">Bangladeshi Payment Gateway</p>
                  </div>
                </>
              )}

              {selectedGateway === 'midtrans' && (
                <>
                  <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                    <div className="inline-block bg-blue-900 px-8 py-3 rounded-lg">
                      <div className="text-3xl font-bold text-white">midtrans</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                    <p className="text-sm text-gray-700">Indonesian Payment Gateway</p>
                  </div>
                </>
              )}

              {selectedGateway === 'instamojo' && (
                <>
                  <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                    <div className="inline-block bg-indigo-700 px-8 py-3 rounded-lg">
                      <div className="text-3xl font-bold text-white">instamojo</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                    <p className="text-sm text-gray-700">Indian Payment Gateway</p>
                  </div>
                </>
              )}

              {selectedGateway === 'flutterwave' && (
                <>
                  <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                    <div className="text-3xl font-bold text-blue-900">Flutterwave</div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                    <p className="text-sm text-gray-700">Multinational Payment Gateway</p>
                  </div>
                </>
              )}

              {selectedGateway === 'ipay' && (
                <>
                  <div className="mt-6 p-4 bg-gray-100 rounded text-center">
                    <div className="text-4xl font-bold">
                      <span className="text-orange-500">i</span>
                      <span className="text-blue-500">Pay</span>
                    </div>
                    <div className="text-xs mt-1">
                      <span className="text-blue-500">Payments made </span>
                      <span className="text-orange-500">Easy</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                    <p className="text-sm text-gray-700">African Countries Payment Gateway</p>
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
  );

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Top Filter Bar */}
      <FilterBar />

      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
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
                <Link to="/admin/general" className="hover:underline">General Setting</Link>
                <span>|</span>
                <Link to="/admin/schools" className="hover:underline">Manage School</Link>
                <span>|</span>
                <Link to="/admin/payment" className="hover:underline font-semibold text-blue-800">Payment Setting</Link>
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
            <div className="px-6 py-4">
              {renderListTab()}
            </div>
          )}

          {activeTab === 'add' && (
            <div className="px-6 py-6 bg-white">
              {renderAddTab()}
            </div>
          )}


        </CardContent>
      </Card>
    </div>
  );
};

export default ManagePaymentSettingPage;
