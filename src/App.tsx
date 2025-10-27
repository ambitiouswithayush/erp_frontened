import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AppSidebar } from "@/components/AppSidebar";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Bell, MessageSquare, User, LogOut, KeyRound, UserCircle, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Theme from "./pages/Theme";
import Language from "./pages/Language";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import AcademicYear from "./pages/teacher/AcademicYear";
import ManageDesignation from "./pages/teacher/ManageDesignation";
import ManageEmployee from "./pages/teacher/ManageEmployee";
import ManageDepartment from "./pages/teacher/ManageDepartment";
import SuperadminManageDepartment from "./pages/superadmin/ManageDepartment";
import ManageTeacher from "./pages/teacher/ManageTeacher";
import SuperadminManageTeacher from "./pages/superadmin/ManageTeacher";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import GeneralSettings from "./pages/GeneralSettings";
import ManageSchools from "./pages/ManageSchools";
import ManageSMSTemplate from "./pages/ManageSMSTemplate";
import ManageEmailTemplate from "./pages/ManageEmailTemplate";

// Superadmin imports
import ActivityLog from "./pages/superadmin/ActivityLog";
import DatabaseBackup from "./pages/superadmin/DatabaseBackup";
import GeneralSetting from "./pages/superadmin/GeneralSetting";
import ManageCallLog from "./pages/superadmin/ManageCallLog";
import ManageFeedback from "./pages/superadmin/ManageFeedback";
import ManageOpeningHour from "./pages/superadmin/ManageOpeningHour";
import ManagePaymentSettingPage from "./pages/superadmin/ManagePaymentSettingPage";
import ManagePostalDispatch from "./pages/superadmin/ManagePostalDispatch";
import ManagePostalReceive from "./pages/superadmin/ManagePostalReceive";
import ManageSchoolsSuper from "./pages/superadmin/ManageSchools";
import ManageSMSSettingsPage from "./pages/superadmin/ManageSMSSettingsPage";
import ManageEmailSettingsPage from "./pages/superadmin/ManageEmailSettingsPage";
import ManageSMSTemplateSuper from "./pages/superadmin/ManageSMSTemplate";
import ManageUserCredential from "./pages/superadmin/ManageUserCredential";
import ManageVisitorInfo from "./pages/superadmin/ManageVisitorInfo";
import ManageVisitorPurpose from "./pages/superadmin/ManageVisitorPurpose";
import ResetPassword from "./pages/superadmin/ResetPassword";
import ResetPasswordForm from "./pages/superadmin/ResetPasswordForm";
import ResetPasswordPage from "./pages/superadmin/ResetPasswordPage";
import ResetUsername from "./pages/superadmin/ResetUsername";
import ManageEmailTemplateSuper from "./pages/superadmin/ManageEmailTemplate";
import ManageAcademicYear from "./pages/superadmin/ManageAcademicYear";
import ManageUserRole from "./pages/superadmin/ManageUserRole";
import ManageRolePermission from "./pages/superadmin/ManageRolePermission";
import ManageSuperAdmin from "./pages/superadmin/ManageSuperAdmin";
import ManageUser from "./pages/superadmin/ManageUser";
import ManageClassLecture from "./pages/superadmin/ManageClassLecture";
import ManageRating from "./pages/superadmin/ManageRating";
import ManageLeaveType from "./pages/superadmin/ManageLeaveType";
import ManageLeaveApplication from "./pages/superadmin/ManageLeaveApplication";
import ManageWaitingApplication from "./pages/superadmin/ManageWaitingApplication";
import ManageApprovedApplication from "./pages/superadmin/ManageApprovedApplication";
import ManageDeclinedApplication from "./pages/superadmin/ManageDeclinedApplication";
import ManageClass from "./pages/superadmin/ManageClass";
import ManageSection from "./pages/superadmin/ManageSection";

const queryClient = new QueryClient();

function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/teacher/profile/my-profile");
  };

  const handleResetPassword = () => {
    navigate("/teacher/profile/reset-password");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-gray-600 bg-[linear-gradient(to_bottom,#4B365B,#2A2234)] px-6">
            <SidebarTrigger className="text-[#f0f0f0]" />
            <h1 className="text-lg font-semibold text-[#f0f0f0]">EduManage Pro</h1>
            <div className="ml-auto flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-[#f0f0f0] hover:bg-gray-700">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-[#f0f0f0] hover:bg-gray-700">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-[#f0f0f0] hover:bg-gray-700">
                    <Avatar className="h-8 w-8 bg-white">
                      <AvatarFallback className="bg-white">
                        <User className="h-5 w-5 text-purple-600" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm capitalize">
                      {user === "staff" ? "Teacher" : user}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={handleProfile} className="cursor-pointer">
                    <UserCircle className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleResetPassword} className="cursor-pointer">
                    <KeyRound className="h-4 w-4 mr-2" />
                    Reset Password
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Dashboard Routes */}
            <Route path="/dashboard/superadmin" element={
              <ProtectedRoute allowedRoles={["superadmin"]}>
                <AppLayout><Dashboard /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/admin" element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AppLayout><AdminDashboard /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/staff" element={
              <ProtectedRoute allowedRoles={["staff"]}>
                <AppLayout><TeacherDashboard /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/student" element={
              <ProtectedRoute allowedRoles={["student"]}>
                <AppLayout><StudentDashboard /></AppLayout>
              </ProtectedRoute>
            } />

            <Route path="/theme" element={
              <ProtectedRoute>
                <AppLayout><Theme /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/language" element={
              <ProtectedRoute>
                <AppLayout><Language /></AppLayout>
              </ProtectedRoute>
            } />

            {/* Administrator Routes */}
            <Route path="/admin/general" element={
              <ProtectedRoute>
                <AppLayout><GeneralSettings /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/schools" element={<ProtectedRoute><AppLayout><ManageSchools /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/payment" element={<ProtectedRoute><AppLayout><ManagePaymentSettingPage /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/sms" element={<ProtectedRoute><AppLayout><ManageSMSSettingsPage /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/email" element={<ProtectedRoute><AppLayout><ManageEmailSettingsPage /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/academic-year" element={<ProtectedRoute><AppLayout><ManageAcademicYear /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/user-roles" element={<ProtectedRoute><AppLayout><ManageUserRole /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/permissions" element={<ProtectedRoute><AppLayout><ManageRolePermission /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/super-admin" element={<ProtectedRoute><AppLayout><ManageSuperAdmin /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute><AppLayout><ManageUser /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/reset-password" element={<ProtectedRoute><AppLayout><ResetPassword /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/reset-username" element={<ProtectedRoute><AppLayout><ResetUsername /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/credentials" element={<ProtectedRoute><AppLayout><ManageUserCredential /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/activity-logs" element={<ProtectedRoute><AppLayout><ActivityLog /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/feedbacks" element={<ProtectedRoute><AppLayout><ManageFeedback /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/backup" element={<ProtectedRoute><AppLayout><DatabaseBackup /></AppLayout></ProtectedRoute>} />
            <Route path="/admin/opening-hours" element={<ProtectedRoute><AppLayout><ManageOpeningHour /></AppLayout></ProtectedRoute>} />

            {/* Teacher Portal Routes */}
            <Route path="/teacher/dashboard" element={
              <ProtectedRoute allowedRoles={["staff"]}>
                <AppLayout><TeacherDashboard /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/admin/academic-year" element={
              <ProtectedRoute allowedRoles={["staff"]}>
                <AppLayout><AcademicYear /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/hr/designation" element={
              <ProtectedRoute allowedRoles={["superadmin", "staff"]}>
                <AppLayout><ManageDesignation /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/hr/employee" element={
              <ProtectedRoute allowedRoles={["superadmin", "staff"]}>
                <AppLayout><ManageEmployee /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/superadmin/department" element={
              <ProtectedRoute allowedRoles={["superadmin"]}>
                <AppLayout><SuperadminManageDepartment /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/superadmin/manage-teacher" element={
              <ProtectedRoute allowedRoles={["superadmin"]}>
                <AppLayout><SuperadminManageTeacher /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/department" element={
              <ProtectedRoute allowedRoles={["staff"]}>
                <AppLayout><ManageDepartment /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/manage-teacher" element={
              <ProtectedRoute allowedRoles={["staff"]}>
                <AppLayout><ManageTeacher /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/class-lecture" element={
              <ProtectedRoute allowedRoles={["superadmin", "staff"]}>
                <AppLayout><ManageClassLecture /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/rating" element={
              <ProtectedRoute allowedRoles={["superadmin", "staff"]}>
                <AppLayout><ManageRating /></AppLayout>
              </ProtectedRoute>
            } />

            {/* Template Routes */}
            <Route path="/template/sms" element={<ProtectedRoute><AppLayout><ManageSMSTemplateSuper /></AppLayout></ProtectedRoute>} />
            <Route path="/template/email" element={<ProtectedRoute><AppLayout><ManageEmailTemplateSuper /></AppLayout></ProtectedRoute>} />
            <Route path="/template/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Template Management" /></AppLayout></ProtectedRoute>} />
            {/* Front Office Routes */}
            <Route path="/front-office/visitor-info" element={<ProtectedRoute><AppLayout><ManageVisitorInfo /></AppLayout></ProtectedRoute>} />
            <Route path="/front-office/call-log" element={<ProtectedRoute><AppLayout><ManageCallLog /></AppLayout></ProtectedRoute>} />
            <Route path="/front-office/postal-dispatch" element={<ProtectedRoute><AppLayout><ManagePostalDispatch /></AppLayout></ProtectedRoute>} />
            <Route path="/front-office/postal-receive" element={<ProtectedRoute><AppLayout><ManagePostalReceive /></AppLayout></ProtectedRoute>} />
            <Route path="/front-office/visitor-purpose" element={<ProtectedRoute><AppLayout><ManageVisitorPurpose /></AppLayout></ProtectedRoute>} />
            <Route path="/front-office/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Front Office" /></AppLayout></ProtectedRoute>} />
            <Route path="/hr/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Human Resource" /></AppLayout></ProtectedRoute>} />
            <Route path="/teacher/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Teacher Management" /></AppLayout></ProtectedRoute>} />
            <Route path="/leaves/type" element={<ProtectedRoute><AppLayout><ManageLeaveType /></AppLayout></ProtectedRoute>} />
            <Route path="/leaves/application" element={<ProtectedRoute><AppLayout><ManageLeaveApplication /></AppLayout></ProtectedRoute>} />
            <Route path="/leaves/waiting" element={<ProtectedRoute><AppLayout><ManageWaitingApplication /></AppLayout></ProtectedRoute>} />
            <Route path="/leaves/approved" element={<ProtectedRoute><AppLayout><ManageApprovedApplication /></AppLayout></ProtectedRoute>} />
            <Route path="/leaves/declined" element={<ProtectedRoute><AppLayout><ManageDeclinedApplication /></AppLayout></ProtectedRoute>} />
            <Route path="/leaves/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Leave Management" /></AppLayout></ProtectedRoute>} />
            <Route path="/academic/class" element={<ProtectedRoute><AppLayout><ManageClass /></AppLayout></ProtectedRoute>} />
            <Route path="/academic/section" element={<ProtectedRoute><AppLayout><ManageSection /></AppLayout></ProtectedRoute>} />
            <Route path="/academic/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Academic Management" /></AppLayout></ProtectedRoute>} />
            <Route path="/lesson-plan/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Lesson Plan" /></AppLayout></ProtectedRoute>} />
            <Route path="/class-routine" element={<ProtectedRoute><AppLayout><ComingSoon title="Class Routine" /></AppLayout></ProtectedRoute>} />
            <Route path="/guardian" element={<ProtectedRoute><AppLayout><ComingSoon title="Guardian Management" /></AppLayout></ProtectedRoute>} />
            <Route path="/students/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Student Management" /></AppLayout></ProtectedRoute>} />
            <Route path="/attendance/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Attendance" /></AppLayout></ProtectedRoute>} />
            <Route path="/cards/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Card Generation" /></AppLayout></ProtectedRoute>} />
            <Route path="/online-exams" element={<ProtectedRoute><AppLayout><ComingSoon title="Online Exams" /></AppLayout></ProtectedRoute>} />
            <Route path="/exams/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Exam Management" /></AppLayout></ProtectedRoute>} />
            <Route path="/exam-mark/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Exam Marks" /></AppLayout></ProtectedRoute>} />
            <Route path="/promotions" element={<ProtectedRoute><AppLayout><ComingSoon title="Promotions" /></AppLayout></ProtectedRoute>} />
            <Route path="/certificates/*" element={<ProtectedRoute><AppLayout><ComingSoon title="Certificates" /></AppLayout></ProtectedRoute>} />
            <Route path="/inventory" element={<ProtectedRoute><AppLayout><ComingSoon title="Inventory" /></AppLayout></ProtectedRoute>} />
            <Route path="/asset-management" element={<ProtectedRoute><AppLayout><ComingSoon title="Asset Management" /></AppLayout></ProtectedRoute>} />
            <Route path="/library" element={<ProtectedRoute><AppLayout><ComingSoon title="Library" /></AppLayout></ProtectedRoute>} />
            <Route path="/transport" element={<ProtectedRoute><AppLayout><ComingSoon title="Transport" /></AppLayout></ProtectedRoute>} />
            <Route path="/hostel" element={<ProtectedRoute><AppLayout><ComingSoon title="Hostel" /></AppLayout></ProtectedRoute>} />
            <Route path="/message" element={<ProtectedRoute><AppLayout><ComingSoon title="Message" /></AppLayout></ProtectedRoute>} />
            <Route path="/mail-sms" element={<ProtectedRoute><AppLayout><ComingSoon title="Mail & SMS" /></AppLayout></ProtectedRoute>} />
            <Route path="/complain" element={<ProtectedRoute><AppLayout><ComingSoon title="Complain" /></AppLayout></ProtectedRoute>} />
            <Route path="/announcement" element={<ProtectedRoute><AppLayout><ComingSoon title="Announcement" /></AppLayout></ProtectedRoute>} />
            <Route path="/scholarship" element={<ProtectedRoute><AppLayout><ComingSoon title="Scholarship" /></AppLayout></ProtectedRoute>} />
            <Route path="/event" element={<ProtectedRoute><AppLayout><ComingSoon title="Event" /></AppLayout></ProtectedRoute>} />
            <Route path="/payroll" element={<ProtectedRoute><AppLayout><ComingSoon title="Payroll" /></AppLayout></ProtectedRoute>} />
            <Route path="/accounting" element={<ProtectedRoute><AppLayout><ComingSoon title="Accounting" /></AppLayout></ProtectedRoute>} />
            <Route path="/report" element={<ProtectedRoute><AppLayout><ComingSoon title="Report" /></AppLayout></ProtectedRoute>} />
            <Route path="/media-gallery" element={<ProtectedRoute><AppLayout><ComingSoon title="Media Gallery" /></AppLayout></ProtectedRoute>} />
            <Route path="/manage-frontend" element={<ProtectedRoute><AppLayout><ComingSoon title="Manage Frontend" /></AppLayout></ProtectedRoute>} />
            <Route path="/miscellaneous" element={<ProtectedRoute><AppLayout><ComingSoon title="Miscellaneous" /></AppLayout></ProtectedRoute>} />
            <Route path="/subscription" element={<ProtectedRoute><AppLayout><ComingSoon title="Subscription (SaaS)" /></AppLayout></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><AppLayout><ComingSoon title="Profile" /></AppLayout></ProtectedRoute>} />

            {/* Teacher Portal Routes */}
            <Route path="/teacher-portal/*" element={<ProtectedRoute allowedRoles={["staff"]}><AppLayout><ComingSoon title="Teacher Portal Feature" /></AppLayout></ProtectedRoute>} />

            {/* Admin Portal Routes */}
            <Route path="/admin-portal/*" element={<ProtectedRoute allowedRoles={["admin"]}><AppLayout><ComingSoon title="Admin Portal Feature" /></AppLayout></ProtectedRoute>} />

            {/* Student Portal Routes */}
            <Route path="/student-portal/*" element={<ProtectedRoute allowedRoles={["student"]}><AppLayout><ComingSoon title="Student Portal Feature" /></AppLayout></ProtectedRoute>} />

            {/* Staff Portal Routes */}
            <Route path="/staff-portal/*" element={<ProtectedRoute allowedRoles={["staff"]}><AppLayout><ComingSoon title="Staff Portal Feature" /></AppLayout></ProtectedRoute>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
