import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "success" | "warning";
}

export function StatCard({ title, value, icon: Icon, trend, variant = "default" }: StatCardProps) {
  const variantColors = {
    default: "text-primary",
    primary: "text-primary",
    success: "text-success",
    warning: "text-warning",
  };

  return (
    <Card className="hover:shadow-lg transition-shadow bg-white/20 backdrop-blur-md border border-white/10 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold">{value}</h3>
              {trend && (
                <span
                  className={`text-xs font-medium ${
                    trend.isPositive ? "text-success" : "text-destructive"
                  }`}
                >
                  {trend.isPositive ? "+" : ""}
                  {trend.value}
                </span>
              )}
            </div>
          </div>
          <div className={`p-3 rounded-lg bg-muted ${variantColors[variant]}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
