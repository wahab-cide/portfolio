import { Hero } from "@/components/hero";
import { CurrentlyBuilding } from "@/components/currently-building";
import { Research } from "@/components/research";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CurrentlyBuilding />
      <Research />
    </div>
  );
}
