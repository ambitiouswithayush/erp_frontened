import React, { useState } from "react";
import { Settings, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function ResetPasswordPage() {
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
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6" />
        <h3 className="text-lg font-semibold">Reset Password</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="schoolName" className="block text-sm font-medium mb-1">
            School Name <span className="text-red-500">*</span>
          </Label>
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

        <div>
          <Label htmlFor="userType" className="block text-sm font-medium mb-1">
            User Type <span className="text-red-500">*</span>
          </Label>
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

        <div>
          <Label htmlFor="user" className="block text-sm font-medium mb-1">
            User <span className="text-red-500">*</span>
          </Label>
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

        <div>
          <Label htmlFor="password" className="block text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-8"
            />
            <Lock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        <div>
          <Label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
            Confirm Password <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pl-8"
            />
            <Lock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="button" variant="outline" className="flex-1" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" className="flex-1 bg-black text-white hover:bg-gray-800">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
