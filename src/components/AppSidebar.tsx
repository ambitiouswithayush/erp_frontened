import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Palette,
  Globe,
  Settings,
  School,
  Mail,
  Calendar,
  Users,
  ChevronDown,
  FileText,
  UserCog,
  Phone,
  Briefcase,
  GraduationCap,
  PlaneTakeoff,
  BookOpen,
  ClipboardList,
  Clock,
  UserCheck,
  CreditCard,
  TestTube,
  Award,
  TrendingUp,
  Package,
  Building2,
  BookMarked,
  Bus,
  Home as HomeIcon,
  MessageSquare,
  Send,
  AlertCircle,
  Megaphone,
  Trophy,
  DollarSign,
  Calculator,
  BarChart3,
  Image,
  Monitor,
  MoreHorizontal,
  Zap,
  User,
  CheckCircle,
  BookCheck,
  CalendarDays,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useAuth } from "@/hooks/useAuth";

// SuperAdmin Menu - Full access to all features
const superAdminMenuItems = [
  { title: "Dashboard", url: "/dashboard/superadmin", icon: LayoutDashboard },
  { title: "Theme", url: "/theme", icon: Palette },
  { title: "Language", url: "/language", icon: Globe },
  {
    title: "Administrator",
    icon: Settings,
    subItems: [
      { title: "General Settings", url: "/admin/general" },
      { title: "Manage Schools", url: "/admin/schools" },
      { title: "Payment Settings", url: "/admin/payment" },
      { title: "SMS Settings", url: "/admin/sms" },
      { title: "Email Settings", url: "/admin/email" },
      { title: "Academic Year", url: "/admin/academic-year" },
      { title: "User Role (ACL)", url: "/admin/user-roles" },
      { title: "Roles Permissions", url: "/admin/permissions" },
      { title: "Manage Super Admin", url: "/admin/super-admin" },
      { title: "Manage User", url: "/admin/users" },
      { title: "Reset User Password", url: "/admin/reset-password" },
      { title: "Reset Username", url: "/admin/reset-username" },
      { title: "User Credentials", url: "/admin/credentials" },
      { title: "Activity Logs", url: "/admin/activity-logs" },
      { title: "Manage Feedbacks", url: "/admin/feedbacks" },
      { title: "Backup Database", url: "/admin/backup" },
      { title: "Opening Hours", url: "/admin/opening-hours" },
    ],
  },
  {
    title: "Template",
    icon: FileText,
    subItems: [
      { title: "SMS Templates", url: "/template/sms" },
      { title: "Email Templates", url: "/template/email" },
    ],
  },
  {
    title: "Front Office",
    icon: UserCog,
    subItems: [
      { title: "Visitor Purpose", url: "/front-office/visitor-purpose" },
      { title: "Call Logs", url: "/front-office/call-logs" },
      { title: "Postal Dispatch", url: "/front-office/postal-dispatch" },
      { title: "Postal Receive", url: "/front-office/postal-receive" },
    ],
  },
  {
    title: "Human Resource",
    icon: Briefcase,
    subItems: [
      { title: "Manage Destination", url: "/hr/destination" },
      { title: "Manage Employee", url: "/hr/employee" },
    ],
  },
  {
    title: "Teacher",
    icon: GraduationCap,
    subItems: [
      { title: "Department", url: "/teacher/department" },
      { title: "Manage Teacher", url: "/teacher/manage" },
      { title: "Class Lecture", url: "/teacher/class-lecture" },
      { title: "Rating", url: "/teacher/rating" },
    ],
  },
  {
    title: "Manage Leaves",
    icon: PlaneTakeoff,
    subItems: [
      { title: "Leave Type", url: "/leaves/type" },
      { title: "Leave Application", url: "/leaves/application" },
      { title: "Waiting Application", url: "/leaves/waiting" },
      { title: "Approved Application", url: "/leaves/approved" },
      { title: "Declined Application", url: "/leaves/declined" },
    ],
  },
  {
    title: "Academic",
    icon: BookOpen,
    subItems: [
      { title: "Class", url: "/academic/class" },
      { title: "Section", url: "/academic/section" },
      { title: "Subject", url: "/academic/subject" },
      { title: "Syllabus", url: "/academic/syllabus" },
      { title: "Material", url: "/academic/material" },
      { title: "Live Classes", url: "/academic/live-classes" },
      { title: "Assignment", url: "/academic/assignment" },
      { title: "Submission", url: "/academic/submission" },
    ],
  },
  {
    title: "Lesson Plan",
    icon: ClipboardList,
    subItems: [
      { title: "Lesson", url: "/lesson-plan/lesson" },
      { title: "Topic", url: "/lesson-plan/topic" },
      { title: "Lesson Timeline", url: "/lesson-plan/timeline" },
      { title: "Lesson Status", url: "/lesson-plan/status" },
      { title: "Lesson Plan", url: "/lesson-plan/plan" },
    ],
  },
  { title: "Class Routine", url: "/class-routine", icon: Clock },
  { title: "Guardian", url: "/guardian", icon: Users },
  {
    title: "Manage Students",
    icon: User,
    subItems: [
      { title: "Student Type", url: "/students/type" },
      { title: "Student List", url: "/students/list" },
      { title: "Admit Student", url: "/students/admit" },
      { title: "Bulk Admission", url: "/students/bulk-admission" },
      { title: "Student Activity", url: "/students/activity" },
    ],
  },
  {
    title: "Attendance",
    icon: UserCheck,
    subItems: [
      { title: "Student Attendance", url: "/attendance/student" },
      { title: "Teacher Attendance", url: "/attendance/teacher" },
      { title: "Employee Attendance", url: "/attendance/employee" },
      { title: "Absent Email", url: "/attendance/absent-email" },
      { title: "Absent SMS", url: "/attendance/absent-sms" },
    ],
  },
  {
    title: "Generate Card",
    icon: CreditCard,
    subItems: [
      { title: "ID Card Setting", url: "/cards/id-setting" },
      { title: "Admit Card Setting", url: "/cards/admit-setting" },
      { title: "Teacher ID Card", url: "/cards/teacher-id" },
      { title: "Employee ID Card", url: "/cards/employee-id" },
      { title: "Student ID Card", url: "/cards/student-id" },
      { title: "Student Admit Card", url: "/cards/student-admit" },
    ],
  },
  { title: "Online Exams", url: "/online-exams", icon: TestTube },
  {
    title: "Manage Exams",
    icon: BookMarked,
    subItems: [
      { title: "Exam Grade", url: "/exams/grade" },
      { title: "Exam Term", url: "/exams/term" },
      { title: "Schedule", url: "/exams/schedule" },
      { title: "Suggestion", url: "/exams/suggestion" },
      { title: "Attendance", url: "/exams/attendance" },
    ],
  },
  {
    title: "Exam Mark",
    icon: Award,
    subItems: [
      { title: "Manage Mark", url: "/exam-mark/manage" },
      { title: "Exam Term Result", url: "/exam-mark/term-result" },
      { title: "Exam Final Result", url: "/exam-mark/final-result" },
      { title: "Merit List", url: "/exam-mark/merit-list" },
      { title: "Mark Sheet", url: "/exam-mark/mark-sheet" },
      { title: "Result Card", url: "/exam-mark/result-card" },
      { title: "Mark Send by Email", url: "/exam-mark/mark-email" },
      { title: "Mark Send by SMS", url: "/exam-mark/mark-sms" },
      { title: "Result Send by Email", url: "/exam-mark/result-email" },
      { title: "Result Send by SMS", url: "/exam-mark/result-sms" },
    ],
  },
  { title: "Promotions", url: "/promotions", icon: TrendingUp },
  {
    title: "Certificates",
    icon: Award,
    subItems: [
      { title: "Certificate Type", url: "/certificates/type" },
      { title: "Generate Certificate", url: "/certificates/generate" },
    ],
  },
  { title: "Inventory", url: "/inventory", icon: Package },
  { title: "Asset Management", url: "/asset-management", icon: Building2 },
  { title: "Library", url: "/library", icon: BookMarked },
  { title: "Transport", url: "/transport", icon: Bus },
  { title: "Hostel", url: "/hostel", icon: HomeIcon },
  { title: "Message", url: "/message", icon: MessageSquare },
  { title: "Mail & SMS", url: "/mail-sms", icon: Send },
  { title: "Complain", url: "/complain", icon: AlertCircle },
  { title: "Announcement", url: "/announcement", icon: Megaphone },
  { title: "Scholarship", url: "/scholarship", icon: Trophy },
  { title: "Event", url: "/event", icon: Calendar },
  { title: "Payroll", url: "/payroll", icon: DollarSign },
  { title: "Accounting", url: "/accounting", icon: Calculator },
  { title: "Report", url: "/report", icon: BarChart3 },
  { title: "Media Gallery", url: "/media-gallery", icon: Image },
  { title: "Manage Frontend", url: "/manage-frontend", icon: Monitor },
  { title: "Miscellaneous", url: "/miscellaneous", icon: MoreHorizontal },
  { title: "Subscription (SaaS)", url: "/subscription", icon: Zap },
  { title: "Profile", url: "/profile", icon: User },
];

// Teacher Portal Menu
const teacherMenuItems = [
  { title: "Dashboard", url: "/dashboard/staff", icon: LayoutDashboard },
  { title: "My Attendance", url: "/teacher-portal/attendance", icon: UserCheck },
  { title: "Academic Calendar", url: "/teacher-portal/calendar", icon: CalendarDays },
  {
    title: "Manage Students",
    icon: Users,
    subItems: [
      { title: "Student List", url: "/teacher-portal/students/list" },
      { title: "Student Attendance", url: "/teacher-portal/students/attendance" },
      { title: "Student Performance", url: "/teacher-portal/students/performance" },
    ],
  },
  {
    title: "Classes & Lectures",
    icon: BookOpen,
    subItems: [
      { title: "My Classes", url: "/teacher-portal/classes" },
      { title: "Timetable", url: "/teacher-portal/timetable" },
      { title: "Live Classes", url: "/teacher-portal/live-classes" },
    ],
  },
  {
    title: "Assignments",
    icon: ClipboardList,
    subItems: [
      { title: "Create Assignment", url: "/teacher-portal/assignments/create" },
      { title: "Submissions", url: "/teacher-portal/assignments/submissions" },
      { title: "Grade Assignments", url: "/teacher-portal/assignments/grade" },
    ],
  },
  {
    title: "Exam Management",
    icon: TestTube,
    subItems: [
      { title: "Exam Schedule", url: "/teacher-portal/exams/schedule" },
      { title: "Enter Marks", url: "/teacher-portal/exams/marks" },
      { title: "Result Analysis", url: "/teacher-portal/exams/analysis" },
    ],
  },
  {
    title: "Lesson Plan",
    icon: BookCheck,
    subItems: [
      { title: "My Lesson Plans", url: "/teacher-portal/lesson-plan/my-plans" },
      { title: "Create Lesson", url: "/teacher-portal/lesson-plan/create" },
      { title: "Lesson Progress", url: "/teacher-portal/lesson-plan/progress" },
    ],
  },
  { title: "My Payroll", url: "/teacher-portal/payroll", icon: DollarSign },
  { title: "Leave Management", url: "/teacher-portal/leaves", icon: PlaneTakeoff },
  { title: "Messages", url: "/teacher-portal/messages", icon: MessageSquare },
  { title: "Profile", url: "/profile", icon: User },
];

// Admin Portal Menu
const adminMenuItems = [
  { title: "Dashboard", url: "/dashboard/admin", icon: LayoutDashboard },
  { title: "Theme", url: "/theme", icon: Palette },
  { title: "Language", url: "/language", icon: Globe },
  {
    title: "School Settings",
    icon: Settings,
    subItems: [
      { title: "General Settings", url: "/admin-portal/settings/general" },
      { title: "Academic Year", url: "/admin-portal/settings/academic-year" },
      { title: "Payment Settings", url: "/admin-portal/settings/payment" },
      { title: "Communication Settings", url: "/admin-portal/settings/communication" },
    ],
  },
  {
    title: "User Management",
    icon: Users,
    subItems: [
      { title: "Manage Users", url: "/admin-portal/users/manage" },
      { title: "Roles & Permissions", url: "/admin-portal/users/roles" },
      { title: "Activity Logs", url: "/admin-portal/users/logs" },
    ],
  },
  {
    title: "Academic",
    icon: BookOpen,
    subItems: [
      { title: "Classes & Sections", url: "/admin-portal/academic/classes" },
      { title: "Subjects", url: "/admin-portal/academic/subjects" },
      { title: "Syllabus", url: "/admin-portal/academic/syllabus" },
    ],
  },
  {
    title: "Staff Management",
    icon: Briefcase,
    subItems: [
      { title: "Teachers", url: "/admin-portal/staff/teachers" },
      { title: "Employees", url: "/admin-portal/staff/employees" },
      { title: "Attendance", url: "/admin-portal/staff/attendance" },
    ],
  },
  {
    title: "Student Management",
    icon: User,
    subItems: [
      { title: "Students List", url: "/admin-portal/students/list" },
      { title: "Admissions", url: "/admin-portal/students/admissions" },
      { title: "Student Attendance", url: "/admin-portal/students/attendance" },
    ],
  },
  {
    title: "Exams",
    icon: TestTube,
    subItems: [
      { title: "Exam Schedule", url: "/admin-portal/exams/schedule" },
      { title: "Results", url: "/admin-portal/exams/results" },
      { title: "Report Cards", url: "/admin-portal/exams/report-cards" },
    ],
  },
  { title: "Fees & Payments", url: "/admin-portal/fees", icon: DollarSign },
  { title: "Library", url: "/admin-portal/library", icon: BookMarked },
  { title: "Transport", url: "/admin-portal/transport", icon: Bus },
  { title: "Announcements", url: "/admin-portal/announcements", icon: Megaphone },
  { title: "Reports", url: "/admin-portal/reports", icon: BarChart3 },
  { title: "Profile", url: "/profile", icon: User },
];

// Student Portal Menu
const studentMenuItems = [
  { title: "Dashboard", url: "/dashboard/student", icon: LayoutDashboard },
  { title: "My Profile", url: "/student-portal/profile", icon: User },
  { title: "My Attendance", url: "/student-portal/attendance", icon: UserCheck },
  { title: "Academic Calendar", url: "/student-portal/calendar", icon: Calendar },
  {
    title: "Classes",
    icon: BookOpen,
    subItems: [
      { title: "My Classes", url: "/student-portal/classes" },
      { title: "Timetable", url: "/student-portal/timetable" },
      { title: "Live Classes", url: "/student-portal/live-classes" },
    ],
  },
  {
    title: "Assignments",
    icon: ClipboardList,
    subItems: [
      { title: "My Assignments", url: "/student-portal/assignments" },
      { title: "Submit Assignment", url: "/student-portal/assignments/submit" },
      { title: "Submission History", url: "/student-portal/assignments/history" },
    ],
  },
  {
    title: "Exams & Results",
    icon: Award,
    subItems: [
      { title: "Exam Schedule", url: "/student-portal/exams/schedule" },
      { title: "My Results", url: "/student-portal/exams/results" },
      { title: "Report Cards", url: "/student-portal/exams/report-cards" },
    ],
  },
  { title: "Library", url: "/student-portal/library", icon: BookMarked },
  { title: "Fees & Payments", url: "/student-portal/fees", icon: DollarSign },
  { title: "Messages", url: "/student-portal/messages", icon: MessageSquare },
  { title: "Announcements", url: "/student-portal/announcements", icon: Megaphone },
  { title: "Complaints", url: "/student-portal/complaints", icon: AlertCircle },
];

// Staff Portal Menu
const staffMenuItems = [
  { title: "Dashboard", url: "/dashboard/staff", icon: LayoutDashboard },
  { title: "My Profile", url: "/staff-portal/profile", icon: User },
  { title: "My Attendance", url: "/staff-portal/attendance", icon: UserCheck },
  { title: "Leave Management", url: "/staff-portal/leaves", icon: PlaneTakeoff },
  { title: "My Timetable", url: "/staff-portal/timetable", icon: Clock },
  { title: "My Payroll", url: "/staff-portal/payroll", icon: DollarSign },
  { title: "Tasks & Assignments", url: "/staff-portal/tasks", icon: CheckCircle },
  { title: "Messages", url: "/staff-portal/messages", icon: MessageSquare },
  { title: "Announcements", url: "/staff-portal/announcements", icon: Megaphone },
  { title: "Calendar", url: "/staff-portal/calendar", icon: Calendar },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { user } = useAuth();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>(["Administrator"]);

  // Get menu items based on user role
  const getMenuItems = () => {
    switch (user) {
      case "superadmin":
        return superAdminMenuItems;
      case "admin":
        return adminMenuItems;
      case "staff":
        return teacherMenuItems; // Teachers login as staff
      case "student":
        return studentMenuItems;
      default:
        return superAdminMenuItems;
    }
  };

  const menuItems = getMenuItems();

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title) ? prev.filter((m) => m !== title) : [...prev, title]
    );
  };

  const isActive = (url: string) => location.pathname === url;
  const isMenuActive = (subItems?: { url: string }[]) => {
    if (!subItems) return false;
    return subItems.some((item) => location.pathname === item.url);
  };

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-[linear-gradient(to_bottom,#4B365B,#2A2234)]">
        <div className="px-2 py-4 border-b border-gray-600">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <School className="h-8 w-8 text-[#f0f0f0]" />
              <div>
                <h2 className="text-lg font-bold text-[#f0f0f0]">EduManage</h2>
                <p className="text-xs text-[#f0f0f0]">School Management</p>
              </div>
            </div>
          )}
          {isCollapsed && <School className="h-6 w-6 text-[#f0f0f0] mx-auto" />}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="px-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible
                      open={openMenus.includes(item.title)}
                      onOpenChange={() => toggleMenu(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={`${
                            isMenuActive(item.subItems)
                              ? "bg-[#61D02E] text-white"
                              : "hover:bg-gray-700 hover:text-[#f0f0f0] text-[#f0f0f0]"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          {!isCollapsed && (
                            <>
                              <span className="flex-1 text-left">{item.title}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform text-[#f0f0f0] ${
                                  openMenus.includes(item.title) ? "rotate-180" : ""
                                }`}
                              />
                            </>
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {!isCollapsed && (
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <NavLink
                                    to={subItem.url}
                                    className={({ isActive }) =>
                                      isActive
                                        ? "bg-[#61D02E] text-white font-medium"
                                        : "text-[#f0f0f0] hover:bg-gray-700 hover:text-[#f0f0f0]"
                                    }
                                  >
                                    {subItem.title}
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg-[#61D02E] text-white font-medium"
                              : "text-[#f0f0f0] hover:bg-gray-700 hover:text-[#f0f0f0]"
                          }`
                        }
                      >
                        <item.icon className="h-4 w-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
