import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, DollarSign, UserCheck, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Students", value: "1,234", icon: Users, color: "text-blue-500", change: "+12%" },
    { title: "Total Teachers", value: "89", icon: GraduationCap, color: "text-green-500", change: "+3%" },
    { title: "Active Classes", value: "45", icon: BookOpen, color: "text-purple-500", change: "+5%" },
    { title: "Monthly Revenue", value: "$45.2K", icon: DollarSign, color: "text-orange-500", change: "+18%" },
  ];

  const attendanceData = [
    { day: "Mon", students: 1150, teachers: 82 },
    { day: "Tue", students: 1180, teachers: 85 },
    { day: "Wed", students: 1120, teachers: 80 },
    { day: "Thu", students: 1200, teachers: 87 },
    { day: "Fri", students: 1190, teachers: 86 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Portal</h1>
        <p className="text-muted-foreground mt-1">Manage your school operations and monitor performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Weekly Attendance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="hsl(var(--primary))" name="Students" />
                <Bar dataKey="teachers" fill="hsl(var(--secondary))" name="Teachers" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <h3 className="font-semibold">Manage Admissions</h3>
              <p className="text-sm text-muted-foreground">Review pending student applications</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <h3 className="font-semibold">Staff Management</h3>
              <p className="text-sm text-muted-foreground">View and manage teaching staff</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <h3 className="font-semibold">Academic Calendar</h3>
              <p className="text-sm text-muted-foreground">Plan and schedule school events</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
