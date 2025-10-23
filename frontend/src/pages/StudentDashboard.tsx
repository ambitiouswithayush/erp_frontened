import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, Calendar, ClipboardCheck, TrendingUp, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function StudentDashboard() {
  const stats = [
    { title: "My Subjects", value: "8", icon: BookOpen, color: "text-blue-500" },
    { title: "Pending Assignments", value: "5", icon: ClipboardCheck, color: "text-green-500" },
    { title: "Upcoming Exams", value: "3", icon: Calendar, color: "text-purple-500" },
    { title: "Overall Grade", value: "A-", icon: Award, color: "text-orange-500" },
  ];

  const subjects = [
    { name: "Mathematics", progress: 85, grade: "A" },
    { name: "Physics", progress: 78, grade: "B+" },
    { name: "Chemistry", progress: 92, grade: "A+" },
    { name: "English", progress: 88, grade: "A" },
  ];

  const upcomingEvents = [
    { title: "Mathematics Quiz", date: "Jan 22", type: "quiz" },
    { title: "Physics Lab Exam", date: "Jan 25", type: "exam" },
    { title: "Assignment: English Essay", date: "Jan 27", type: "assignment" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Student Portal</h1>
        <p className="text-muted-foreground mt-1">Track your academic progress and stay updated</p>
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
              <TrendingUp className="h-5 w-5" />
              Subject Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{subject.name}</span>
                  <Badge variant="outline">{subject.grade}</Badge>
                </div>
                <Progress value={subject.progress} className="h-2" />
                <p className="text-xs text-muted-foreground">{subject.progress}% Complete</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <Badge variant={event.type === "exam" ? "destructive" : event.type === "quiz" ? "default" : "secondary"}>
                  {event.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
