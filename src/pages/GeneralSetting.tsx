import { useState } from "react";
import { ChevronUp, Settings, Cloud, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function GeneralSetting() {
  const [brandName, setBrandName] = useState("Caz Brain");
  const [brandTitle, setBrandTitle] = useState("SCHOOL SYSTEM");
  const [globalLanguage, setGlobalLanguage] = useState("English");
  const [currency, setCurrency] = useState("INR");
  const [currencySymbol, setCurrencySymbol] = useState("₹");
  const [enableRtl, setEnableRtl] = useState("No");
  const [enableFrontend, setEnableFrontend] = useState("No");
  const [theme, setTheme] = useState("Black");
  const [timeZone, setTimeZone] = useState("(GMT+05:30) Kolkata");
  const [dateFormat, setDateFormat] = useState("Jul 13, 2018");
  const [brandFooter, setBrandFooter] = useState("EDU PLUS ERP");
  const [googleAnalytics, setGoogleAnalytics] = useState("Google Analytics");
  const [faviconChecked, setFaviconChecked] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white rounded-lg">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            General Setting
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <a href="#" className="hover:underline font-semibold text-blue-800">General Setting</a>
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

          {/* Secondary Heading */}
          <div className="px-6 py-4 bg-white border-b">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Settings className="h-5 w-5" />
              General Setting
            </h2>
          </div>

          {/* Form */}
          <div className="px-6 py-6 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Brand Name */}
                <div>
                  <Label htmlFor="brandName" className="block text-sm font-medium">
                    Brand Name
                  </Label>
                  <Input
                    id="brandName"
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="mt-1 block w-full border-gray-300 bg-white px-3 py-2"
                  />
                </div>

                {/* Brand Title */}
                <div>
                  <Label htmlFor="brandTitle" className="block text-sm font-medium">
                    Brand Title
                  </Label>
                  <Input
                    id="brandTitle"
                    type="text"
                    value={brandTitle}
                    onChange={(e) => setBrandTitle(e.target.value)}
                    className="mt-1 block w-full border-gray-300 bg-white px-3 py-2"
                  />
                </div>

                {/* Global Language */}
                <div>
                  <Label htmlFor="globalLanguage" className="block text-sm font-medium">
                    Global Language <span className="text-red-500">*</span>
                  </Label>
                  <Select value={globalLanguage} onValueChange={setGlobalLanguage}>
                    <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Spanish">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Currency */}
                <div>
                  <Label htmlFor="currency" className="block text-sm font-medium">
                    Currency
                  </Label>
                  <Input
                    id="currency"
                    type="text"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="mt-1 block w-full border-gray-300 bg-white px-3 py-2"
                  />
                </div>

                {/* Currency Symbol */}
                <div>
                  <Label htmlFor="currencySymbol" className="block text-sm font-medium">
                    Currency Symbol
                  </Label>
                  <Input
                    id="currencySymbol"
                    type="text"
                    value={currencySymbol}
                    onChange={(e) => setCurrencySymbol(e.target.value)}
                    className="mt-1 block w-full border-gray-300 bg-white px-3 py-2"
                  />
                </div>

                {/* Enable RTL */}
                <div>
                  <Label htmlFor="enableRtl" className="block text-sm font-medium">
                    Enable RTL <span className="text-red-500">*</span>
                  </Label>
                  <Select value={enableRtl} onValueChange={setEnableRtl}>
                    <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Enable Frontend */}
                <div>
                  <Label htmlFor="enableFrontend" className="block text-sm font-medium">
                    Enable Frontend <span className="text-red-500">*</span>
                  </Label>
                  <Select value={enableFrontend} onValueChange={setEnableFrontend}>
                    <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Theme */}
                <div>
                  <Label htmlFor="theme" className="block text-sm font-medium">
                    Theme <span className="text-red-500">*</span>
                  </Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="White">White</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Default Time Zone */}
                <div>
                  <Label htmlFor="timeZone" className="block text-sm font-medium">
                    Default Time Zone <span className="text-red-500">*</span>
                  </Label>
                  <Select value={timeZone} onValueChange={setTimeZone}>
                    <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="(GMT+05:30) Kolkata">(GMT+05:30) Kolkata</SelectItem>
                      <SelectItem value="(GMT+00:00) London">(GMT+00:00) London</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Format */}
                <div>
                  <Label htmlFor="dateFormat" className="block text-sm font-medium">
                    Date Format <span className="text-red-500">*</span>
                  </Label>
                  <Select value={dateFormat} onValueChange={setDateFormat}>
                    <SelectTrigger className="mt-1 block w-full border-gray-300 bg-white px-3 py-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Jul 13, 2018">Jul 13, 2018</SelectItem>
                      <SelectItem value="13/07/2018">13/07/2018</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Brand Logo Upload */}
                <div className="md:col-span-2">
                  <Label htmlFor="brandLogo" className="block text-sm font-medium">
                    Brand Logo
                  </Label>
                  <div className="mt-1 flex items-center space-x-4">
                    <img src="/placeholder.svg" alt="Brand Logo" className="w-16 h-16 border border-gray-300 rounded" />
                    <div>
                      <Button type="button" variant="outline" className="flex items-center gap-2">
                        <Cloud className="h-4 w-4" />
                        Upload
                      </Button>
                      <p className="text-xs text-gray-500 mt-1">Dimension- Max-W: 100px, Max-H: 110px</p>
                    </div>
                  </div>
                </div>

                {/* Favicon Icon Upload */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <Checkbox
                      id="faviconCheckbox"
                      checked={faviconChecked}
                      onCheckedChange={(checked) => setFaviconChecked(checked === true)}
                    />
                    <Label htmlFor="faviconCheckbox" className="text-sm font-medium">
                      Favicon Icon
                    </Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button type="button" variant="outline" className="flex items-center gap-2">
                      <Cloud className="h-4 w-4" />
                      Upload
                    </Button>
                    <p className="text-xs text-gray-500">Dimension- Max-W: 20px, Max-H: 20px</p>
                  </div>
                </div>

                {/* Brand Footer */}
                <div>
                  <Label htmlFor="brandFooter" className="block text-sm font-medium">
                    Brand Footer
                  </Label>
                  <Input
                    id="brandFooter"
                    type="text"
                    value={brandFooter}
                    onChange={(e) => setBrandFooter(e.target.value)}
                    className="mt-1 block w-full border-gray-300 bg-white px-3 py-2"
                  />
                </div>

                {/* Google Analytics */}
                <div>
                  <Label htmlFor="googleAnalytics" className="block text-sm font-medium">
                    Google Analytics
                  </Label>
                  <Input
                    id="googleAnalytics"
                    type="text"
                    value={googleAnalytics}
                    onChange={(e) => setGoogleAnalytics(e.target.value)}
                    className="mt-1 block w-full border-gray-300 bg-white px-3 py-2"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-4 pt-6 border-t">
                <Button type="button" variant="outline" className="px-6 py-2">
                  Cancel
                </Button>
                <Button type="submit" className="bg-black text-white px-6 py-2 hover:bg-gray-800">
                  Update
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
