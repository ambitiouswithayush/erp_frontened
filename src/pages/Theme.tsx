import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Check } from "lucide-react";
import { useState } from "react";

const themes = [
  { id: "blue", name: "Ocean Blue", primary: "237 83% 55%", secondary: "270 67% 47%" },
  { id: "green", name: "Forest Green", primary: "142 76% 36%", secondary: "160 84% 39%" },
  { id: "purple", name: "Royal Purple", primary: "270 67% 47%", secondary: "280 78% 55%" },
  { id: "orange", name: "Sunset Orange", primary: "25 95% 53%", secondary: "38 92% 50%" },
];

export default function Theme() {
  const [selectedTheme, setSelectedTheme] = useState("blue");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Theme Settings</h1>
        <p className="text-muted-foreground">Customize the appearance of your application</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {themes.map((theme) => (
          <Card
            key={theme.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedTheme === theme.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedTheme(theme.id)}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {theme.name}
                {selectedTheme === theme.id && (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <div
                  className="w-12 h-12 rounded-lg"
                  style={{ backgroundColor: `hsl(${theme.primary})` }}
                />
                <div
                  className="w-12 h-12 rounded-lg"
                  style={{ backgroundColor: `hsl(${theme.secondary})` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Preview
          </CardTitle>
          <CardDescription>See how your selected theme looks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-6 bg-gradient-primary rounded-lg text-white">
            <h3 className="text-xl font-bold mb-2">Primary Gradient</h3>
            <p>This is how primary elements will appear with your selected theme.</p>
          </div>
          <div className="flex gap-2">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
