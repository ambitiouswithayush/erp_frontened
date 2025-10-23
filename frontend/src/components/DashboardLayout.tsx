import React from "react";
import { Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface DashboardLayoutProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardLayout({ title, icon, children }: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          {/* Top Navigation Bar */}
          <header className="bg-black text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="h-6 w-6 cursor-pointer" />
              <h1 className="text-lg font-semibold">SCHOOL SYSTEM</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Future Ratan Pre School</span>
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
            </div>
          </header>

          {/* Filter Bar */}
          <div className="bg-white border-b px-4 py-4 flex items-center gap-4 flex-wrap">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select School" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="school1">School 1</SelectItem>
                <SelectItem value="school2">School 2</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Global Search" className="pl-8 w-64" />
            </div>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select School" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="school1">School 1</SelectItem>
                <SelectItem value="school2">School 2</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Session Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023-2024">2023-2024</SelectItem>
                <SelectItem value="2024-2025">2024-2025</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-black text-white hover:bg-gray-800">Update</Button>
          </div>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="bg-white rounded-lg shadow p-6">
              {/* Page Title */}
              <div className="flex items-center gap-2 mb-4">
                {icon}
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>

              {/* Quick Links */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Quick Links</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    General Setting
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Manage School
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Payment Setting
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    SMS Setting
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Email Setting
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Academic Year
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    User Role
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Role Permission
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Super Admin
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Manage User
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Reset User Password
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Reset Username
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    User Credential
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Activity Log
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Feedback
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Backup
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Opening Hour
                  </Button>
                </div>
              </div>

              {/* Page Content */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
