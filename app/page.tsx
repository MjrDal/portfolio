import { Presentation } from "@/components/presentation/Presentation";
import { Separator } from "@/components/separator/Separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">
      <Presentation />
      <Separator />
    </main>
  );
}
