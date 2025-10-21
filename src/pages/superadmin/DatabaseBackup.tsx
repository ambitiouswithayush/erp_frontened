import React, { useState } from "react";
import { ChevronUp, Database, Menu, Search, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function DatabaseBackup() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      {/* Global Header - Top Bar */}
      <div className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Menu className="h-6 w-6 cursor-pointer" />
            <h1 className="text-xl font-bold uppercase">SCHOOL SYSTEM</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <Database className="h-4 w-4" />
            </div>
            <span className="text-sm">Future Ratan Pre School</span>
          </div>
        </div>
      </div>

      {/* Global Header - Filter Bar */}
      <div className="bg-gray-800 text-white p-4">
        <div className="flex flex-wrap items-center gap-4 max-w-7xl mx-auto">
          <Select>
            <SelectTrigger className="w-48 bg-white text-black">
              <SelectValue placeholder="--Select School--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="future-ratan">Future Ratan Pre School</SelectItem>
              <SelectItem value="delhi-international">Delhi International Public School</SelectItem>
              <SelectItem value="central-high">Central High School</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-48 bg-white text-black">
              <SelectValue placeholder="--Select School--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="future-ratan">Future Ratan Pre School</SelectItem>
              <SelectItem value="delhi-international">Delhi International Public School</SelectItem>
              <SelectItem value="central-high">Central High School</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-48 bg-white text-black">
              <SelectValue placeholder="--Session Year--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-2024">2023-2024</SelectItem>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Global Search" className="pl-10 bg-white text-black" />
          </div>

          <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6">Update</Button>
        </div>
      </div>

      {/* Main Content Card */}
      <Card className="max-w-7xl mx-auto my-8 shadow-lg bg-white">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="bg-purple-800 text-white flex items-center justify-between cursor-pointer">
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Backup Database
              </CardTitle>
              <ChevronUp className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="p-0">
              {/* Quick Links */}
              <div className="px-6 py-4 bg-gray-50">
                <div className="flex items-center flex-wrap gap-2 text-sm">
                  <span className="font-medium mr-2">Quick Link:</span>
                  <a href="#" className="text-blue-600 hover:underline">General Setting</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Manage School</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Payment Setting</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">SMS Setting</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Email Setting</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Academic Year</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">User Role</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Role Permission</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Super Admin</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Manage User</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Reset User Password</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Reset Username</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">User Credential</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Activity Log</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Feedback</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Backup</a>
                  <span>|</span>
                  <a href="#" className="text-blue-600 hover:underline">Opening Hour</a>
                </div>
              </div>

              {/* Backup Database Section */}
              <div className="px-6 py-4 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="h-5 w-5 text-purple-800" />
                  <h2 className="text-lg font-semibold text-purple-800">Backup Database</h2>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="px-6 py-2">
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}
