import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProjectsPage() {
  const themes = [
    "html",
    "css",
    "Scss",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Angular",
  ];
  return (
    <main className="flex flex-col items-center p-24 bg-black">
      <div className="text-white">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {themes.map((docs) => (
              <SelectItem key={docs} value={docs}>
                {docs}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect className=" text-white" />
      </div>
    </main>
  );
}
