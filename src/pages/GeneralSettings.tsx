import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function GeneralSettings() {
  const [formData, setFormData] = useState({
    brandName: "Caz Brain",
    brandTitle: "SCHOOL SYSTEM",
    globalLanguage: "English",
    currency: "INR",
    currencySymbol: "₹",
    enableRTL: "No",
    enableFrontend: "No",
    theme: "Black",
    defaultTimeZone: "(GMT+05:30) Kolkata",
    dateFormat: "Jul 13, 2018",
    brandFooter: "EDU PLUS ERP",
    googleAnalytics: "",
    brandLogo: null as File | null,
    faviconIcon: null as File | null,
    faviconEnabled: false,
  });

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <div className="w-full h-full bg-white">
      {/* Main Section Header */}
      <div className="flex items-center justify-between bg-white px-6 py-4 border-b-2 border-black">
        <h1 className="text-2xl font-bold text-black">⚙ General Setting</h1>
        <ChevronUp className="h-5 w-5 text-black" />
      </div>

      {/* Quick Links Section */}
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center">
          <span className="text-sm font-medium mr-4">Quick Link:</span>
          <div className="flex items-center space-x-2 text-blue-600">
            <Link to="/admin/general" className="hover:underline font-semibold text-blue-800">General Setting</Link>
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

      {/* General Setting Section with Faded Line */}
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">⚙ General Setting</h2>
        </div>
        <hr className="mt-2 border-gray-300 opacity-50" />
      </div>

      {/* Form Details */}
      <div className="px-6 py-4 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-10 gap-4">
            {/* Brand Name */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="brandName" className="text-sm font-medium">Brand Name <span className="text-red-500">*</span></Label>
            </div>
            <div className="col-span-7">
              <Input
                id="brandName"
                value={formData.brandName}
                onChange={(e) => handleInputChange("brandName", e.target.value)}
                required
              />
            </div>

            {/* Brand Title */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="brandTitle" className="text-sm font-medium">Brand Title <span className="text-red-500">*</span></Label>
            </div>
            <div className="col-span-7">
              <Input
                id="brandTitle"
                value={formData.brandTitle}
                onChange={(e) => handleInputChange("brandTitle", e.target.value)}
                required
              />
            </div>

            {/* Global Language */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="globalLanguage" className="text-sm font-medium">Global Language <span className="text-red-500">*</span></Label>
            </div>
            <div className="col-span-7">
              <Select value={formData.globalLanguage} onValueChange={(value) => handleInputChange("globalLanguage", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Currency */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="currency" className="text-sm font-medium">Currency</Label>
            </div>
            <div className="col-span-7">
              <Input
                id="currency"
                value={formData.currency}
                onChange={(e) => handleInputChange("currency", e.target.value)}
              />
            </div>

            {/* Currency Symbol */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="currencySymbol" className="text-sm font-medium">Currency Symbol</Label>
            </div>
            <div className="col-span-7">
              <Input
                id="currencySymbol"
                value={formData.currencySymbol}
                onChange={(e) => handleInputChange("currencySymbol", e.target.value)}
              />
            </div>

            {/* Enable RTL */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="enableRTL" className="text-sm font-medium">Enable RTL <span className="text-red-500">*</span></Label>
            </div>
            <div className="col-span-7">
              <Select value={formData.enableRTL} onValueChange={(value) => handleInputChange("enableRTL", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Enable Frontend */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="enableFrontend" className="text-sm font-medium">Enable Frontend <span className="text-red-500">*</span></Label>
            </div>
            <div className="col-span-7">
              <Select value={formData.enableFrontend} onValueChange={(value) => handleInputChange("enableFrontend", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Theme */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="theme" className="text-sm font-medium">Theme <span className="text-red-500">*</span></Label>
            </div>
            <div className="col-span-7">
              <Select value={formData.theme} onValueChange={(value) => handleInputChange("theme", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Black">Black</SelectItem>
                  <SelectItem value="White">White</SelectItem>
                  <SelectItem value="Blue">Blue</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Default Time Zone */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="defaultTimeZone" className="text-sm font-medium">Default Time Zone <span className="text-red-500">*</span></Label>
            </div>
            <div className="col-span-7">
              <Select value={formData.defaultTimeZone} onValueChange={(value) => handleInputChange("defaultTimeZone", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="(GMT+05:30) Kolkata">(GMT+05:30) Kolkata</SelectItem>
                  <SelectItem value="(GMT+00:00) London">(GMT+00:00) London</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Format */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="dateFormat" className="text-sm font-medium">Date Format <span className="text-red-500">*</span></Label>
            </div>
            <div className="col-span-7">
              <Select value={formData.dateFormat} onValueChange={(value) => handleInputChange("dateFormat", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Jul 13, 2018">Jul 13, 2018</SelectItem>
                  <SelectItem value="13/07/2018">13/07/2018</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Brand Logo */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="brandLogo" className="text-sm font-medium">Brand Logo</Label>
            </div>
            <div className="col-span-7">
              <div className="space-y-2">
                <img src="/placeholder.svg" alt="Brand Logo" className="w-[100px] h-[110px] object-cover border" />
                <div>
                  <Button type="button" variant="outline" size="sm">Upload</Button>
                  <p className="text-xs text-muted-foreground mt-1">Dimension:- Max-W: 100px, Max-H: 110px</p>
                </div>
              </div>
            </div>

            {/* Favicon Icon */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="faviconEnabled"
                  checked={formData.faviconEnabled}
                  onCheckedChange={(checked) => handleInputChange("faviconEnabled", checked as boolean)}
                />
                <Label htmlFor="faviconEnabled" className="text-sm font-medium">Favicon Icon</Label>
              </div>
            </div>
            <div className="col-span-7">
              <div className="space-y-2">
                <Button type="button" variant="outline" size="sm" disabled={!formData.faviconEnabled}>Upload</Button>
                <p className="text-xs text-muted-foreground">Dimension:- Max-W: 20px, Max-H: 20px</p>
              </div>
            </div>

            {/* Brand Footer */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="brandFooter" className="text-sm font-medium">Brand Footer</Label>
            </div>
            <div className="col-span-7">
              <Input
                id="brandFooter"
                value={formData.brandFooter}
                onChange={(e) => handleInputChange("brandFooter", e.target.value)}
              />
            </div>

            {/* Google Analytics */}
            <div className="col-span-3 flex items-center justify-end pr-4">
              <Label htmlFor="googleAnalytics" className="text-sm font-medium">Google Analytics</Label>
            </div>
            <div className="col-span-7">
              <Input
                id="googleAnalytics"
                value={formData.googleAnalytics}
                onChange={(e) => handleInputChange("googleAnalytics", e.target.value)}
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-6 border-t bg-gray-50 px-4 py-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" className="bg-black text-white hover:bg-gray-800">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
