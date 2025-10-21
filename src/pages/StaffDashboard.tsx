import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, ClipboardList, Calendar, CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StaffDashboard() {
  const stats = [
    { title: "My Classes Today", value: "4", icon: BookOpen, color: "text-blue-500" },
    { title: "Total Students", value: "180", icon: Users, color: "text-green-500" },
    { title: "Pending Assignments", value: "8", icon: ClipboardList, color: "text-purple-500" },
    { title: "Attendance Rate", value: "94%", icon: CheckCircle, color: "text-orange-500" },
  ];

  const todaySchedule = [
    { time: "09:00 AM", subject: "Mathematics", class: "Grade 10-A", status: "upcoming" },
    { time: "10:30 AM", subject: "Physics", class: "Grade 11-B", status: "upcoming" },
    { time: "01:00 PM", subject: "Chemistry", class: "Grade 10-C", status: "upcoming" },
    { time: "02:30 PM", subject: "Mathematics", class: "Grade 12-A", status: "upcoming" },
  ];

  const pendingTasks = [
    { task: "Grade Assignment - Algebra", deadline: "Today, 5:00 PM", priority: "high" },
    { task: "Prepare Lesson Plan - Trigonometry", deadline: "Tomorrow", priority: "medium" },
    { task: "Submit Attendance Report", deadline: "Jan 25", priority: "low" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Teacher Portal</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your schedule for today</p>
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
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todaySchedule.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-semibold">{item.subject}</p>
                  <p className="text-sm text-muted-foreground">{item.class}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{item.time}</p>
                  <Badge variant="outline" className="mt-1">Upcoming</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingTasks.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="font-semibold">{item.task}</p>
                  <p className="text-sm text-muted-foreground">{item.deadline}</p>
                </div>
                <Badge variant={item.priority === "high" ? "destructive" : item.priority === "medium" ? "default" : "secondary"}>
                  {item.priority}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
