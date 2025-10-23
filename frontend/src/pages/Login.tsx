import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Shield, Users, BookOpen, Briefcase } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (role: "superadmin" | "admin" | "staff" | "student") => {
    login(role);
    
    const redirectMap = {
      superadmin: "/dashboard/superadmin",
      admin: "/dashboard/admin",
      staff: "/dashboard/staff",
      student: "/dashboard/student",
    };
    
    navigate(redirectMap[role]);
  };

  const roleCards = [
    {
      role: "admin" as const,
      title: "Admin",
      description: "School management",
      icon: Users,
      color: "text-success",
    },
    {
      role: "staff" as const,
      title: "Teacher",
      description: "Teaching portal",
      icon: GraduationCap,
      color: "text-info",
    },
    {
      role: "staff" as const,
      title: "Staff",
      description: "Employee portal",
      icon: Briefcase,
      color: "text-warning",
    },
    {
      role: "student" as const,
      title: "Student",
      description: "Student portal",
      icon: BookOpen,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <Card className="w-full max-w-4xl shadow-elegant">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">EduManage Pro</CardTitle>
          <CardDescription>Select your role to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="quick" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="quick">Quick Login</TabsTrigger>
              <TabsTrigger value="credentials">With Credentials</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quick" className="space-y-6">
              {/* Central Super Admin Button */}
              <div className="flex justify-center mb-8">
                <div
                  className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary-foreground/20 shadow-elegant hover:shadow-glow cursor-pointer transition-all hover:scale-110 flex flex-col items-center justify-center group border-4 border-primary/30"
                  onClick={() => handleLogin("superadmin")}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Shield className="h-12 w-12 text-white mb-2 relative z-10" />
                  <h3 className="font-bold text-white text-lg relative z-10">Super Admin</h3>
                  <p className="text-xs text-white/90 relative z-10">Full Access</p>
                </div>
              </div>

              {/* Four Role Cards Around */}
              <div className="grid md:grid-cols-2 gap-4">
                {roleCards.map((card) => (
                  <Card
                    key={card.title}
                    className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-primary"
                    onClick={() => handleLogin(card.role)}
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className={`p-4 rounded-lg bg-muted ${card.color}`}>
                        <card.icon className="h-7 w-7" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-lg">{card.title}</h3>
                        <p className="text-sm text-muted-foreground">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="credentials" className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-3 pt-4">
                  <Button
                    onClick={() => handleLogin("superadmin")}
                    variant="outline"
                    className="h-auto py-4 border-primary/50 hover:border-primary"
                  >
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5" />
                      <span>Login as Super Admin</span>
                    </div>
                  </Button>
                  {roleCards.map((card) => (
                    <Button
                      key={card.title}
                      onClick={() => handleLogin(card.role)}
                      variant="outline"
                      className="h-auto py-4"
                    >
                      <div className="flex items-center gap-3">
                        <card.icon className="h-5 w-5" />
                        <span>Login as {card.title}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
