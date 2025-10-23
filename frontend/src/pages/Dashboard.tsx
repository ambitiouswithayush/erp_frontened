import { StatCard } from "@/components/StatCard";
import { FilterBar } from "@/components/FilterBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Users, GraduationCap, BookOpen, TrendingUp, Award, UserCheck } from "lucide-react";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const performanceData = [
    { name: "Excellent", value: 35, color: "hsl(var(--success))" },
    { name: "Good", value: 40, color: "hsl(var(--info))" },
    { name: "Average", value: 20, color: "hsl(var(--warning))" },
    { name: "Below Average", value: 5, color: "hsl(var(--destructive))" },
  ];

  const attendanceData = [
    { name: "Present", value: 85, color: "hsl(var(--success))" },
    { name: "Absent", value: 10, color: "hsl(var(--destructive))" },
    { name: "Late", value: 5, color: "hsl(var(--warning))" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your school overview</p>
      </div>

      <FilterBar />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Students"
          value="2,543"
          icon={Users}
          trend={{ value: "12%", isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Total Teachers"
          value="187"
          icon={GraduationCap}
          trend={{ value: "5%", isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Active Classes"
          value="42"
          icon={BookOpen}
          variant="default"
        />
        <StatCard
          title="Attendance Rate"
          value="94.5%"
          icon={UserCheck}
          trend={{ value: "2.3%", isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Average Grade"
          value="B+"
          icon={Award}
          trend={{ value: "0.5", isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Performance Index"
          value="8.7"
          icon={TrendingUp}
          trend={{ value: "0.8", isPositive: true }}
          variant="success"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2 bg-white/20 backdrop-blur-md border border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle>Student Performance Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-md border border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white/20 backdrop-blur-md border border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle>Today's Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={attendanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {attendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-md border border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">New Admissions (This Month)</span>
              <span className="text-lg font-bold text-primary">156</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">Pending Leave Requests</span>
              <span className="text-lg font-bold text-warning">23</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">Upcoming Exams</span>
              <span className="text-lg font-bold text-info">8</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">Active Scholarships</span>
              <span className="text-lg font-bold text-success">342</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
