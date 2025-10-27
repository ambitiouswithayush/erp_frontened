import { useState } from "react";
import { ChevronUp, Star, List, Copy, FileText, Download, Search, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManageRating() {
  const [selectedRows, setSelectedRows] = useState("15");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedSessionYear, setSelectedSessionYear] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");

  const ratings = [
    // Sample data - will be empty initially
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Area */}
      <div className="bg-white p-4 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <Select value={selectedSchool} onValueChange={setSelectedSchool}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select School" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school1">Delhi International Public School</SelectItem>
                  <SelectItem value="school2">शासकीय क्वालिस</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSessionYear} onValueChange={setSelectedSessionYear}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Session Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023-2024">2023-2024</SelectItem>
                  <SelectItem value="2024-2025">2024-2025</SelectItem>
                  <SelectItem value="2025-2026">2025-2026</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Global Search"
                  className="pl-10 w-64"
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                />
              </div>
              <Button className="bg-black text-white hover:bg-gray-800">
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Card className="max-w-6xl mx-auto my-8 shadow-lg bg-white">
        <CardHeader className="bg-purple-800 text-white flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Manage Rating
          </CardTitle>
          <ChevronUp className="h-5 w-5" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Quick Links */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center flex-wrap">
              <span className="text-sm font-medium mr-4">Quick Link:</span>
              <div className="flex items-center space-x-2 text-blue-600 text-sm flex-wrap">
                <a href="#" className="hover:underline">Department</a>
                <span>|</span>
                <a href="#" className="hover:underline">Teacher</a>
                <span>|</span>
                <a href="#" className="hover:underline">Class Lecture</a>
                <span>|</span>
                <a href="#" className="hover:underline font-semibold">Rating</a>
              </div>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="px-6 py-4 bg-white flex gap-2">
            <Button
              variant="default"
              className="flex items-center gap-2 bg-blue-600 text-white"
            >
              <List className="h-4 w-4" />
              List
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 bg-white flex items-center justify-end flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
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
          <div className="px-6 py-4 bg-white">
            <Table className="border-collapse">
              <TableHeader>
                <TableRow className="border-b">
                  <TableHead className="w-12 border-r border-gray-200">#SL</TableHead>
                  <TableHead className="border-r border-gray-200">School <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Photo</TableHead>
                  <TableHead className="border-r border-gray-200">Teacher <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Department <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Rating <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Comment <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead className="border-r border-gray-200">Student <ChevronUp className="inline h-4 w-4" /></TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ratings.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                      No data available in table
                    </TableCell>
                  </TableRow>
                ) : (
                  ratings.map((rating, index) => (
                    <TableRow key={index} className="border-b">
                      <TableCell className="border-r border-gray-200">{index + 1}</TableCell>
                      <TableCell className="border-r border-gray-200">{rating.school}</TableCell>
                      <TableCell className="border-r border-gray-200">
                        <img src={rating.photo} alt="Teacher" className="w-8 h-8 rounded-full" />
                      </TableCell>
                      <TableCell className="border-r border-gray-200">{rating.teacher}</TableCell>
                      <TableCell className="border-r border-gray-200">{rating.department}</TableCell>
                      <TableCell className="border-r border-gray-200">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < rating.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                          <span className="ml-2">{rating.rating}/5</span>
                        </div>
                      </TableCell>
                      <TableCell className="border-r border-gray-200">{rating.comment}</TableCell>
                      <TableCell className="border-r border-gray-200">{rating.student}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="text-blue-600">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-blue-600">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="px-6 py-4 bg-white flex items-center justify-between border-t flex-wrap">
            <span className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</span>
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
