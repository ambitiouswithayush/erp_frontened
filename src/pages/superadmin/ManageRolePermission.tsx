import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, Settings, Copy, FileText, Download, Search, ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

export default function ManageRolePermission() {
  const [selectedRows, setSelectedRows] = useState("15");
  const navigate = useNavigate();

  const userRoles = [
    {
      sl: 1,
      name: "Super Admin",
      note: "Full system access",
      isDefault: "Yes"
    },
    {
      sl: 2,
      name: "Admin",
      note: "Administrative access",
      isDefault: "Yes"
    },
    {
      sl: 3,
      name: "Teacher",
      note: "Teaching staff access",
      isDefault: "Yes"
    },
    {
      sl: 4,
      name: "Student",
      note: "Student access",
      isDefault: "Yes"
    },
    {
      sl: 5,
      name: "Custom Role",
      note: "Custom permissions",
      isDefault: "No"
    }
  ];

  const handleRolePermissionSetting = (roleId: number, roleName: string) => {
    // Navigate to permission settings page with role ID
    navigate(`/admin/role-permission-setting/${roleId}?role=${encodeURIComponent(roleName)}`);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Manage Role Permission
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
                <Link to="/admin/email" className="hover:underline">Email Setting</Link>
                <span>|</span>
                <Link to="/admin/academic-year" className="hover:underline">Academic Year</Link>
                <span>|</span>
                <Link to="/admin/user-roles" className="hover:underline">User Role</Link>
                <span>|</span>
                <Link to="/admin/permissions" className="hover:underline font-semibold text-blue-800">Permission</Link>
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

          {/* Back Link */}
          <div className="px-6 py-4 bg-white border-b">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-gray-900 p-0 h-auto font-normal flex items-center"
              onClick={() => navigate(-1)}
            >
              <Settings className="h-4 w-4 mr-2" />
              Role Permission
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 bg-white flex items-center justify-between flex-wrap">
            <div className="flex gap-2 mb-2 md:mb-0">
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
            <div className="flex items-center gap-2 flex-wrap">
              <Select>
                <SelectTrigger className="w-48 bg-gray-100">
                  <SelectValue placeholder="--Select School--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school1">School 1</SelectItem>
                  <SelectItem value="school2">School 2</SelectItem>
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
          <div className="px-6 py-4 bg-white overflow-x-auto">
            <Table className="border-collapse min-w-full">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="border-r border-gray-200">#SL <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Role/ Name <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Note <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Is Default? <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead>Action <ChevronUp className="inline h-4 w-4" /></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userRoles.map((role) => (
                  <TableRow key={role.sl} className="border-b">
                    <TableCell className="border-r border-gray-200">{role.sl}</TableCell>
                    <TableCell className="border-r border-gray-200">{role.name}</TableCell>
                    <TableCell className="border-r border-gray-200">{role.note}</TableCell>
                    <TableCell className="border-r border-gray-200">{role.isDefault}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        className="bg-black text-white hover:bg-gray-800 flex items-center gap-2"
                        onClick={() => handleRolePermissionSetting(role.sl, role.name)}
                      >
                        <Settings className="h-4 w-4" />
                        Role Permission Setting
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="px-6 py-4 bg-white flex items-center justify-between border-t flex-wrap">
            <span className="text-sm text-gray-600">Showing 1 to {userRoles.length} of {userRoles.length} entries</span>
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
        </CardContent>
      </Card>
    </div>
  );
}
