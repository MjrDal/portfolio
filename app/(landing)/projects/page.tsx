import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center p-24 bg-black">
      <div className="text-white">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect className=" text-white" />
      </div>
    </main>
  );
}
