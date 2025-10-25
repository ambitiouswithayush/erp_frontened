import React, { useState } from "react";
import { Settings, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function ResetPassword() {
  const [schoolName, setSchoolName] = useState("");
  const [userType, setUserType] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    // Reset form
    setSchoolName("");
    setUserType("");
    setUser("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleCancel = () => {
    setSchoolName("");
    setUserType("");
    setUser("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="bg-purple-800 text-white">
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Reset Password
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-right md:text-right">
                  <Label className="block text-sm font-medium mb-2">School Name <span className="text-red-500">*</span></Label>
                </div>
                <div className="relative">
                  <Select value={schoolName} onValueChange={setSchoolName}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select School" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school1">School 1</SelectItem>
                      <SelectItem value="school2">School 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-right md:text-right">
                  <Label className="block text-sm font-medium mb-2">User Type <span className="text-red-500">*</span></Label>
                </div>
                <div className="relative">
                  <Select value={userType} onValueChange={setUserType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select User Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-right md:text-right">
                  <Label className="block text-sm font-medium mb-2">User <span className="text-red-500">*</span></Label>
                </div>
                <div className="relative">
                  <Select value={user} onValueChange={setUser}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select User" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user1">User 1</SelectItem>
                      <SelectItem value="user2">User 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-right md:text-right">
                  <Label className="block text-sm font-medium mb-2">Password <span className="text-red-500">*</span></Label>
                </div>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-8"
                  />
                  <Lock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>

                <div className="text-right md:text-right">
                  <Label className="block text-sm font-medium mb-2">Confirm Password <span className="text-red-500">*</span></Label>
                </div>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-8"
                  />
                  <Lock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <Button type="button" variant="outline" className="px-6 py-2" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-black text-white hover:bg-gray-800 px-6 py-2">
                  Update
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
