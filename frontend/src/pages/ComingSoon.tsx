import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
            <Clock className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-muted-foreground">
            {description || "This feature is currently under development and will be available soon."}
          </p>
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
