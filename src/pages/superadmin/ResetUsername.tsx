import React, { useState } from "react";
import { ChevronUp, Settings, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function ResetUsername() {
  const [isOpen, setIsOpen] = useState(true);
  const [schoolName, setSchoolName] = useState("");
  const [userType, setUserType] = useState("");
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const handleCancel = () => {
    setSchoolName("");
    setUserType("");
    setUser("");
    setUsername("");
  };

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
              <Settings className="h-4 w-4" />
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
                <Settings className="h-5 w-5" />
                Reset Username
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

              {/* Reset Username Form */}
              <div className="px-6 py-4 bg-white">
                <div className="flex items-center gap-2 mb-6">
                  <Settings className="h-5 w-5 text-purple-800" />
                  <h2 className="text-lg font-semibold text-purple-800">Reset Username</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      School Name <span className="text-red-500">*</span>
                    </label>
                    <Select value={schoolName} onValueChange={setSchoolName}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select School--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="future-ratan">Future Ratan Pre School</SelectItem>
                        <SelectItem value="delhi-international">Delhi International Public School</SelectItem>
                        <SelectItem value="central-high">Central High School</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      User Type <span className="text-red-500">*</span>
                    </label>
                    <Select value={userType} onValueChange={setUserType}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select User Type--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="employee">Employee</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      User <span className="text-red-500">*</span>
                    </label>
                    <Select value={user} onValueChange={setUser}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select User--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user1">User 1</SelectItem>
                        <SelectItem value="user2">User 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Username <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button type="button" variant="outline" className="px-6 py-2" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-black text-white hover:bg-gray-800 px-6 py-2">
                      Update
                    </Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}
