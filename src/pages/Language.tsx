import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Check } from "lucide-react";
import { useState } from "react";

const languages = [
  { id: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { id: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { id: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { id: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { id: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
  { id: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { id: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { id: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
];

export default function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Language Settings</h1>
        <p className="text-muted-foreground">Choose your preferred language for the application</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {languages.map((language) => (
          <Card
            key={language.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedLanguage === language.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedLanguage(language.id)}
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{language.flag}</span>
                  <div>
                    <h3 className="font-semibold">{language.name}</h3>
                    <p className="text-sm text-muted-foreground">{language.nativeName}</p>
                  </div>
                </div>
                {selectedLanguage === language.id && (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Language Information
          </CardTitle>
          <CardDescription>Additional settings and information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Selected Language</h4>
            <p className="text-sm text-muted-foreground">
              {languages.find((l) => l.id === selectedLanguage)?.name} ({languages.find((l) => l.id === selectedLanguage)?.nativeName})
            </p>
          </div>
          <div className="flex gap-2">
            <Button>Apply Changes</Button>
            <Button variant="outline">Reset to Default</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
