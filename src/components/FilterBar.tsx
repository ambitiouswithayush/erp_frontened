import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface FilterBarProps {
  onSchoolChange?: (value: string) => void;
  onSessionChange?: (value: string) => void;
  onYearChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onUpdate?: () => void;
}

export function FilterBar({ onSchoolChange, onSessionChange, onYearChange, onSearch, onUpdate }: FilterBarProps) {
  return (
    <div className="w-full bg-gray-800 p-4 flex flex-wrap items-center gap-4">
      <Select onValueChange={onSchoolChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="--Select School--" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Schools</SelectItem>
          <SelectItem value="central">Central High School</SelectItem>
          <SelectItem value="north">North Valley School</SelectItem>
          <SelectItem value="south">South Park Academy</SelectItem>
          <SelectItem value="east">East Side Institute</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex-1 min-w-[200px]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Global Search"
            className="pl-9"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
      </div>

      <Select onValueChange={onSessionChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="--Select Session--" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="spring">Spring 2024</SelectItem>
          <SelectItem value="summer">Summer 2024</SelectItem>
          <SelectItem value="fall">Fall 2024</SelectItem>
          <SelectItem value="winter">Winter 2024</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={onYearChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="--Session Year--" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2024-2025">2024-2025</SelectItem>
          <SelectItem value="2023-2024">2023-2024</SelectItem>
          <SelectItem value="2022-2023">2022-2023</SelectItem>
        </SelectContent>
      </Select>

      <Button onClick={onUpdate} className="bg-[#61D02E] text-white hover:bg-[#4CAF50]">
        Update
      </Button>
    </div>
  );
}
