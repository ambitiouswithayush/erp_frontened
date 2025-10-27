import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Menu, Users, GraduationCap, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeacherDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 27)); // October 27, 2025
  const [calendarView, setCalendarView] = useState<"month" | "week" | "day">("month");
  const [isStudentStatsCollapsed, setIsStudentStatsCollapsed] = useState(false);
  const [isMessageCollapsed, setIsMessageCollapsed] = useState(false);
  const [isUserTypeCollapsed, setIsUserTypeCollapsed] = useState(false);
  const [isCalendarCollapsed, setIsCalendarCollapsed] = useState(false);

  // Calendar logic
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const goToToday = () => {
    setCurrentDate(new Date(2025, 9, 27));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const days = getDaysInMonth(currentDate);

  // Message data for horizontal bar chart
  const messageData = [
    { label: "New", percentage: 0.0, color: "bg-blue-500" },
    { label: "Inbox", percentage: 0.0, color: "bg-green-500" },
    { label: "Send", percentage: 0.0, color: "bg-yellow-500" },
    { label: "Draft", percentage: 0.0, color: "bg-orange-500" },
    { label: "Trash", percentage: 0.0, color: "bg-red-500" }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Statistics Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Employee Card */}
          <Card className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Employee</p>
                  <p className="text-4xl font-bold text-gray-900">0</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-full">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Teacher Card */}
          <Card className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Teacher</p>
                  <p className="text-4xl font-bold text-gray-900">2</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-full">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Student Card */}
          <Card className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Student</p>
                  <p className="text-4xl font-bold text-gray-900">0</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-full">
                  <UserCheck className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Narrower */}
          <div className="lg:col-span-1 space-y-6">
            {/* Student Statistics Widget */}
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white flex flex-row items-center justify-between p-4 rounded-t-lg">
                <CardTitle className="text-lg font-semibold">Student Statistics</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-purple-800"
                    onClick={() => setIsStudentStatsCollapsed(!isStudentStatsCollapsed)}
                  >
                    {isStudentStatsCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-purple-800">
                    <Menu className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              {!isStudentStatsCollapsed && (
                <CardContent className="p-6">
                  <div className="text-center text-gray-500">
                    <p className="text-sm">No student data available</p>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Message Widget */}
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white flex flex-row items-center justify-between p-4 rounded-t-lg">
                <CardTitle className="text-lg font-semibold">Message</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-purple-800"
                    onClick={() => setIsMessageCollapsed(!isMessageCollapsed)}
                  >
                    {isMessageCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-purple-800">
                    <Menu className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              {!isMessageCollapsed && (
                <CardContent className="p-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Private Messaging</h3>
                  <div className="space-y-4">
                    {messageData.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-700 font-medium">{item.label}</span>
                          <span className="text-gray-600">{item.percentage.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-6">
                          <div
                            className={`${item.color} h-6 rounded-full transition-all duration-300`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* User Type Widget */}
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white flex flex-row items-center justify-between p-4 rounded-t-lg">
                <CardTitle className="text-lg font-semibold">User Type</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-purple-800"
                    onClick={() => setIsUserTypeCollapsed(!isUserTypeCollapsed)}
                  >
                    {isUserTypeCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-purple-800">
                    <Menu className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              {!isUserTypeCollapsed && (
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    {/* Donut Chart */}
                    <div className="relative w-48 h-48 mb-4">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        {/* Teacher segment (large dark gray) - 80% */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#4B5563"
                          strokeWidth="20"
                          strokeDasharray="201 251"
                          strokeDashoffset="0"
                        />
                        {/* Guardian segment (light purple) - 20% */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#C084FC"
                          strokeWidth="20"
                          strokeDasharray="50 251"
                          strokeDashoffset="-201"
                        />
                      </svg>
                    </div>
                    {/* Legend */}
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gray-600 rounded"></div>
                          <span className="text-sm text-gray-700">Teacher</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">80%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-purple-400 rounded"></div>
                          <span className="text-sm text-gray-700">Guardian</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">20%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Right Column - Wider */}
          <div className="lg:col-span-2">
            {/* Calendar Widget */}
            <Card className="bg-white border-gray-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white flex flex-row items-center justify-between p-4 rounded-t-lg">
                <CardTitle className="text-lg font-semibold">Calendar</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-purple-800"
                    onClick={() => setIsCalendarCollapsed(!isCalendarCollapsed)}
                  >
                    {isCalendarCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-purple-800">
                    <Menu className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              {!isCalendarCollapsed && (
                <CardContent className="p-6">
                  {/* Calendar Controls */}
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-gray-300"
                        onClick={goToPreviousMonth}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-gray-300"
                        onClick={goToNextMonth}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 text-purple-600 hover:bg-purple-50"
                        onClick={goToToday}
                      >
                        today
                      </Button>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <div className="flex items-center gap-1 bg-gray-100 rounded-md p-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`text-xs font-medium ${calendarView === "month" ? "bg-white shadow-sm text-gray-900" : "bg-transparent text-gray-700 hover:bg-gray-200"}`}
                        onClick={() => setCalendarView("month")}
                      >
                        month
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`text-xs font-medium ${calendarView === "week" ? "bg-white shadow-sm text-gray-900" : "bg-transparent text-gray-700 hover:bg-gray-200"}`}
                        onClick={() => setCalendarView("week")}
                      >
                        week
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`text-xs font-medium ${calendarView === "day" ? "bg-white shadow-sm text-gray-900" : "bg-transparent text-gray-700 hover:bg-gray-200"}`}
                        onClick={() => setCalendarView("day")}
                      >
                        day
                      </Button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Days of Week Header */}
                    <div className="grid grid-cols-7 bg-gray-100 border-b border-gray-200">
                      {daysOfWeek.map((day) => (
                        <div
                          key={day}
                          className="py-3 text-center text-sm font-semibold text-gray-700 border-r border-gray-200 last:border-r-0"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 bg-white">
                      {days.map((day, index) => (
                        <div
                          key={index}
                          className={`min-h-[80px] border-r border-b border-gray-200 last:border-r-0 p-2 ${
                            day === null ? "bg-gray-50" : ""
                          } ${
                            day === 27 && currentDate.getMonth() === 9 && currentDate.getFullYear() === 2025
                              ? "bg-yellow-50"
                              : "hover:bg-purple-50"
                          } transition-colors cursor-pointer`}
                        >
                          {day !== null && (
                            <div className="text-sm font-medium text-gray-900">{day}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
