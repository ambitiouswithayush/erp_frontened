import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Upload, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddSchool() {
  const [formData, setFormData] = useState({
    schoolUrl: "",
    schoolCode: "",
    schoolName: "",
    address: "",
    phone: "",
    registrationDate: "",
    email: "",
    fax: "",
    footer: "",
    currency: "",
    currencySymbol: "",
    enableFrontend: "yes",
    examFinalResult: "average",
    language: "-select-",
    theme: "-select-",
    onlineAdmission: "-select-",
    enableRtl: "no",
    zoomApiKey: "",
    zoomSecret: "",
    googleMap: "",
    facebookUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    pinterestUrl: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Filter Bar */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <Select>
            <SelectTrigger className="w-48 bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="--Select School--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school1">School 1</SelectItem>
              <SelectItem value="school2">School 2</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Input
              placeholder="Global Search"
              className="pl-4 pr-4 py-2 w-64 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          <Select>
            <SelectTrigger className="w-48 bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="--Select School--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school1">School 1</SelectItem>
              <SelectItem value="school2">School 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-48 bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="--Session Year--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-2024">2023-2024</SelectItem>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-black text-white hover:bg-gray-900 px-6 py-2">
          Update
        </Button>
      </div>

      {/* Main Content Panel */}
      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Manage School
          </CardTitle>
          <div className="flex gap-2">
            <ChevronUp className="h-5 w-5 cursor-pointer" />
            <ChevronDown className="h-5 w-5 cursor-pointer" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {/* Quick Links */}
          <div className="mb-6">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <Link to="/admin/general" className="hover:underline">General Setting</Link>
                <span>|</span>
                <Link to="/admin/schools" className="hover:underline font-semibold text-blue-800">Manage School</Link>
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Basic Information:</h3>
              <hr className="mb-4" />
              <div className="space-y-4">
                <div>
                  <Label htmlFor="schoolUrl">
                    School URL <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="schoolUrl"
                    name="schoolUrl"
                    type="text"
                    placeholder="School URL"
                    value={formData.schoolUrl}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">No Space, No Capital Letter, No Special Character. Ex: south-point OR liverpool</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="schoolCode">School Code</Label>
                    <Input
                      id="schoolCode"
                      name="schoolCode"
                      type="text"
                      value={formData.schoolCode}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="schoolName">
                      School Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="schoolName"
                      name="schoolName"
                      type="text"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">
                      Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="registrationDate">Registration Date</Label>
                    <Input
                      id="registrationDate"
                      name="registrationDate"
                      type="date"
                      value={formData.registrationDate}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fax">Fax</Label>
                    <Input
                      id="fax"
                      name="fax"
                      type="text"
                      value={formData.fax}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="footer">Footer</Label>
                    <Input
                      id="footer"
                      name="footer"
                      type="text"
                      value={formData.footer}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Setting Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Setting Information:</h3>
              <hr className="mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Input
                    id="currency"
                    name="currency"
                    type="text"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="currencySymbol">
                    Currency Symbol <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="currencySymbol"
                    name="currencySymbol"
                    type="text"
                    value={formData.currencySymbol}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="enableFrontend">
                    Enable Frontend <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.enableFrontend} onValueChange={(value) => handleSelectChange("enableFrontend", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="examFinalResult">
                    Exam final result <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.examFinalResult} onValueChange={(value) => handleSelectChange("examFinalResult", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="average">Average of All Exam</SelectItem>
                      <SelectItem value="highest">Highest Score</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="language">
                    Language <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.language} onValueChange={(value) => handleSelectChange("language", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-select-">-Select-</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="theme">
                    Theme <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.theme} onValueChange={(value) => handleSelectChange("theme", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-select-">-Select-</SelectItem>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="onlineAdmission">
                    Online Admission <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.onlineAdmission} onValueChange={(value) => handleSelectChange("onlineAdmission", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-select-">-Select-</SelectItem>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="enableRtl">Enable RTL</Label>
                  <Select value={formData.enableRtl} onValueChange={(value) => handleSelectChange("enableRtl", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <Label htmlFor="zoomApiKey">Zoom Api Key</Label>
                  <Input
                    id="zoomApiKey"
                    name="zoomApiKey"
                    type="text"
                    value={formData.zoomApiKey}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="zoomSecret">Zoom Secret</Label>
                  <Input
                    id="zoomSecret"
                    name="zoomSecret"
                    type="text"
                    value={formData.zoomSecret}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="googleMap">Google Map</Label>
                  <Textarea
                    id="googleMap"
                    name="googleMap"
                    value={formData.googleMap}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Social Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Information:</h3>
              <hr className="mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="facebookUrl">Facebook URL</Label>
                  <Input
                    id="facebookUrl"
                    name="facebookUrl"
                    type="url"
                    value={formData.facebookUrl}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="twitterUrl">Twitter URL</Label>
                  <Input
                    id="twitterUrl"
                    name="twitterUrl"
                    type="url"
                    value={formData.twitterUrl}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="linkedinUrl">Linkedin URL</Label>
                  <Input
                    id="linkedinUrl"
                    name="linkedinUrl"
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="youtubeUrl">Youtube URL</Label>
                  <Input
                    id="youtubeUrl"
                    name="youtubeUrl"
                    type="url"
                    value={formData.youtubeUrl}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="instagramUrl">Instagram URL</Label>
                  <Input
                    id="instagramUrl"
                    name="instagramUrl"
                    type="url"
                    value={formData.instagramUrl}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="pinterestUrl">Pinterest URL</Label>
                  <Input
                    id="pinterestUrl"
                    name="pinterestUrl"
                    type="url"
                    value={formData.pinterestUrl}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Other Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Other Information:</h3>
              <hr className="mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="frontendLogo">Frontend Logo</Label>
                  <div className="mt-1">
                    <Button type="button" variant="outline" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">Dimension:- Max-W: 150px, Max-H: 90px</p>
                  </div>
                </div>
                <div>
                  <Label htmlFor="adminLogo">Admin Logo</Label>
                  <div className="mt-1">
                    <Button type="button" variant="outline" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">Dimension:- Max-W: 100px, Max-H: 110px</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
